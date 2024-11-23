import express from 'express'
import axios from 'axios' // Ajout de axios pour récupérer l'HTML de l'URL
import * as cheerio from 'cheerio'

const router = express.Router()

// URL de la page à scrapper
const targetUrl = 'https://www.swimcloud.com/swimmer/1283295/'

// Route pour récupérer les statistiques de natation en temps réel
router.get('/stats', async (req, res) => {
  try {
    // Faire une requête HTTP GET pour récupérer le HTML de la page
    const { data } = await axios.get(targetUrl)

    // Charger le HTML dans Cheerio pour pouvoir l'analyser
    const $ = cheerio.load(data)

    // Extraction des données
    const stats = []
    $('.c-table-clean tr').each((index, element) => {
      const event = $(element).find('td:nth-child(1)').text().trim()
      const time = $(element).find('td:nth-child(2)').text().trim()
      const date = $(element).find('td:nth-child(3)').text().trim()

      if (event && time && date) {
        stats.push({ event, time, date })
      }
    })

    res.json(stats)
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error.message)
    res.status(500).json({ message: 'Erreur lors de la récupération des données.' })
  }
})

export default router
