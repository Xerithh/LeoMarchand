import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import * as cheerio from 'cheerio'

const router = express.Router()

// Résoudre les chemins dans ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Route pour récupérer les statistiques de natation
router.get('/stats', (req, res) => {
  const filePath = path.join(__dirname, '../public/scraping/index.html') // Fichier HTML local pour le scraping

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erreur lors de la lecture du fichier HTML :', err.message)
      return res.status(500).json({ message: 'Erreur lors de la lecture du fichier HTML.' })
    }

    try {
      const $ = cheerio.load(data)

      // Extraction des données
      const stats = []
      $('#js-swimmer-profile-times-container tr').each((index, element) => {
        const event = $(element).find('td:nth-child(1)').text().trim()
        const time = $(element).find('td:nth-child(2)').text().trim()
        const date = $(element).find('td:nth-child(5)').text().trim()
        if (event && time && date) {
          stats.push({ event, time, date })
        }
      })

      res.json(stats) // Renvoi des données JSON au client
    } catch (parseError) {
      console.error("Erreur lors de l'analyse HTML :", parseError.message)
      return res.status(500).json({ message: "Erreur lors de l'analyse du fichier HTML." })
    }
  })
})

export default router // Export de la route
