import express from 'express'
import fetch from 'node-fetch'
import sqlite3 from 'sqlite3'

sqlite3.verbose()

const app = express()
const PORT = 3000

// Initialise la base de données SQLite
const db = new sqlite3.Database(':memory:') // Utilisez un fichier pour persister les données si nécessaire

// Créez une table pour stocker les vidéos et l'heure de mise en cache
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS youtube_cache (
      id INTEGER PRIMARY KEY,
      videos TEXT,
      cache_time INTEGER
    )
  `)
})

// Fonction pour récupérer des vidéos depuis l'API YouTube
async function fetchYoutubeVideos() {
  const API_KEY = 'AIzaSyD39fMiy_ZfRTceco5DcZw-7njx7nVVKO0' // Remplacez par votre clé API
  const QUERY = 'Léo Marchand'
  const MAX_RESULTS = 3
  const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${MAX_RESULTS}&q=${encodeURIComponent(
    QUERY,
  )}&type=video&key=${API_KEY}`

  try {
    const response = await fetch(URL)
    const data = await response.json()
    return data.items || []
  } catch (error) {
    console.error('Erreur lors de la récupération des vidéos YouTube:', error)
    throw error
  }
}

// Endpoint pour récupérer les vidéos
app.get('/api/videos', async (req, res) => {
  const ONE_HOUR = 60 * 60 * 1000
  const currentTime = Date.now()

  // Vérifiez si des vidéos sont déjà en cache
  db.get('SELECT * FROM youtube_cache ORDER BY id DESC LIMIT 1', async (err, row) => {
    if (err) {
      console.error('Erreur SQLite:', err)
      return res.status(500).send('Erreur serveur.')
    }

    if (row && currentTime - row.cache_time < ONE_HOUR) {
      // Retournez les vidéos en cache
      console.log('Envoi des vidéos en cache.')
      return res.json(JSON.parse(row.videos))
    }

    // Si le cache est expiré, récupérez de nouvelles vidéos
    try {
      const videos = await fetchYoutubeVideos()
      const videosJSON = JSON.stringify(videos)

      // Mettez à jour le cache dans la base de données
      db.run(
        'INSERT INTO youtube_cache (videos, cache_time) VALUES (?, ?)',
        [videosJSON, currentTime],
        (err) => {
          if (err) {
            console.error("Erreur lors de l'insertion dans la base de données:", err)
          }
        },
      )

      console.log('Nouvelles vidéos récupérées.')
      res.json(videos)
    } catch (error) {
      console.error('Erreur lors de la récupération des vidéos YouTube:', error)
      res.status(500).send('Erreur lors de la récupération des vidéos.')
    }
  })
})

// Lancez le serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`)
})
