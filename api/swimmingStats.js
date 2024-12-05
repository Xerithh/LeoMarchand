import express from 'express'
import axios from 'axios'
import * as cheerio from 'cheerio'

const router = express.Router()

// URL de la page à scrapper pour récupérer les stats de Léon Marchand
const targetUrl = 'https://www.swimcloud.com/swimmer/1283295/'

// Route pour récupérer les statistiques de natation paginées
router.get('/stats', async (req, res) => {
  try {
    const { page = 1, limit = 6 } = req.query // Pagination : page actuelle et limite par page

    // Faire une requête HTTP GET pour récupérer le HTML de la page
    const { data } = await axios.get(targetUrl)

    // Charger le HTML dans Cheerio pour pouvoir l'analyser
    const $ = cheerio.load(data)

    // Extraction des données
    const allProjects = []
    $('#js-swimmer-profile-times tr').each((index, element) => {
      const event = $(element).find('td:nth-child(1)').text().trim()
      const time = $(element).find('td:nth-child(2)').text().trim()
      const date = $(element).find('td:nth-child(5)').text().trim()
      const competitionUrl = $(element).find('td:nth-child(4) a').attr('href')

      if (event && time && date && competitionUrl) {
        // Construire l'URL complète de la compétition
        const competitionPageUrl = `https://www.swimcloud.com${competitionUrl}`
        allProjects.push({
          event,
          time,
          date,
          competitionUrl: competitionPageUrl,
          position: null, // Position sera récupérée plus tard
        })
      }
    })

    // Paginer les résultats
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const paginatedProjects = allProjects.slice(startIndex, endIndex)

    // Récupérer les positions des compétitions pour les projets paginés
    const promises = paginatedProjects.map(async (project) => {
      try {
        const { data: competitionData } = await axios.get(project.competitionUrl)
        const $competition = cheerio.load(competitionData)

        let position = null
        const highPointTable = $competition('#meet-dashboard-placeholders').children('div').eq(1)

        highPointTable.find('tr').each((i, row) => {
          const swimmerLink = $(row).find('td').eq(1).find('a')
          const swimmerName = swimmerLink.text().trim()

          if (swimmerName === 'Leon Marchand') {
            position = $(row).find('td').eq(0).text().trim()
          }
        })

        project.position = position || 'Non classé'
      } catch (error) {
        console.error(
          `Erreur lors de la récupération de la position pour ${project.event} :`,
          error.message,
        )
      }
    })

    // Attendre que toutes les positions soient récupérées
    await Promise.all(promises)

    // Réponse avec les projets paginés
    res.json({
      projects: paginatedProjects,
      total: allProjects.length,
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error.message)
    res.status(500).json({ message: 'Erreur lors de la récupération des données.' })
  }
})

export default router
