<template>
  <section
    class="projects w-full flex justify-center items-center flex-col py-16 px-8 bg-white"
    ref="projectsSection"
  >
    <h2 class="text-3xl font-bold text-center mb-6">Réalisations</h2>
    <div
      v-if="projects.length === 0"
      class="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"
    ></div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      <div
        v-for="(project, index) in displayedProjects"
        :key="index"
        class="project bg-gray-100 p-4 rounded w-full"
      >
        <h3 class="text-xl font-bold mb-2">{{ project.event }}</h3>
        <p class="text-gray-700 mb-2"><strong>Temps :</strong> {{ project.time }}</p>
        <p class="text-gray-700"><strong>Date :</strong> {{ project.date }}</p>
      </div>
    </div>
    <div v-if="hasMoreProjects" class="text-center mt-6">
      <button @click="loadMore" class="bg-blue-500 text-white py-2 px-4 rounded">
        Afficher plus
      </button>
    </div>
    <div v-if="displayedProjects.length > 6" class="text-center mt-6">
      <button @click="showLess" class="bg-gray-500 text-white py-2 px-4 rounded">Voir moins</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [], // Toutes les données de l'API
      displayedProjects: [], // Les statistiques à afficher
      projectsToShow: 6, // Le nombre de projets à afficher par défaut
      hasMoreProjects: false, // Pour savoir s'il y a encore des projets à afficher
    }
  },
  methods: {
    async fetchSwimmingStats() {
      try {
        const response = await fetch('/api/swimming-stats/stats') // Appel à l'API backend
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données')
        }
        const data = await response.json()
        this.projects = data // Stockage des données dans `projects`

        // Tri des projets par date (du plus récent au plus ancien)
        this.projects.sort((a, b) => new Date(b.date) - new Date(a.date))

        // Initialiser avec les 6 premiers projets
        this.displayedProjects = this.projects.slice(0, this.projectsToShow)
        this.hasMoreProjects = this.projects.length > this.projectsToShow // Vérifier s'il y a plus de projets
      } catch (error) {
        console.error('Erreur :', error.message)
      }
    },
    loadMore() {
      const nextProjects = this.projects.slice(
        this.displayedProjects.length,
        this.displayedProjects.length + this.projectsToShow,
      )
      this.displayedProjects = [...this.displayedProjects, ...nextProjects]
      this.hasMoreProjects = this.displayedProjects.length < this.projects.length
    },
    showLess() {
      // Réduit l'affichage à 6 projets
      this.displayedProjects = this.projects.slice(0, this.projectsToShow)
      this.hasMoreProjects = this.projects.length > this.projectsToShow

      // Faire défiler la page vers le haut de la section
      this.scrollToTop()
    },
    scrollToTop() {
      // Utiliser scrollIntoView pour faire défiler la page vers la section des projets
      this.$refs.projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },
  },
  mounted() {
    this.fetchSwimmingStats() // Appel à l'API lors du montage du composant
  },
}
</script>
