<template>
  <section
    class="skills w-full flex justify-center items-center flex-col py-20 px-12"
    ref="skillsSection"
  >
    <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Réalisations</h2>

    <div v-if="projects.length === 0" class="w-full flex justify-center">
      <LoaderComponent />
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
      <div
        v-for="(project, index) in displayedProjects"
        :key="index"
        :style="{
          backgroundImage: `url('/skills/background_skills_${(index % 6) + 1}.jpg')`,
        }"
        class="skill-card bg-cover bg-center rounded-lg shadow-lg relative p-8 pb-5 text-white flex flex-col justify-between h-64"
      >
        <!-- Lien vers la page de la compétition -->
        <a
          :href="'https://www.swimcloud.com/' + project.competitionUrl"
          target="_blank"
          class="w-full h-full absolute top-0 left-0 z-10"
        ></a>

        <!-- Titre de la compétition -->
        <h3 class="text-3xl font-bold mb-6">{{ project.event }}</h3>

        <!-- Informations -->
        <div class="info-box space-y-2">
          <!-- Temps -->
          <div
            class="flex items-center gap-3 bg-yellow-400 text-black font-medium rounded px-2 py-1 w-fit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M12 1.75a10.25 10.25 0 100 20.5 10.25 10.25 0 000-20.5zm0 2.5a7.75 7.75 0 110 15.5 7.75 7.75 0 010-15.5zm-.5 3a.75.75 0 011.5 0v5.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5h2.75V7.25z"
              />
            </svg>
            <span>{{ project.time }}</span>
          </div>

          <!-- Date -->
          <div
            class="flex items-center gap-3 bg-white text-gray-800 font-medium rounded px-2 py-1 w-fit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M6.75 2.25A.75.75 0 017.5 3v.75h9V3a.75.75 0 011.5 0v.75h1.25a3 3 0 013 3V19a3 3 0 01-3 3H6.25a3 3 0 01-3-3V6a3 3 0 013-3H7.5V3a.75.75 0 01.75-.75zM6 7.5a.75.75 0 000 1.5h12a.75.75 0 000-1.5H6z"
                clip-rule="evenodd"
              />
            </svg>
            <span>{{ project.date }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Boutons pour afficher plus ou moins -->
    <div v-if="hasMoreProjects" class="text-center mt-10">
      <button
        @click="loadMore"
        class="bg-blue-500 text-white py-3 px-8 rounded hover:bg-blue-600 transition"
      >
        Afficher plus
      </button>
    </div>
    <div v-if="displayedProjects.length > 6" class="text-center mt-6">
      <button
        @click="showLess"
        class="bg-gray-500 text-white py-3 px-8 rounded hover:bg-gray-600 transition"
      >
        Voir moins
      </button>
    </div>
  </section>
</template>

<script>
import LoaderComponent from './ui/LoaderComponent.vue'

export default {
  name: 'SkillsSection',
  components: {
    LoaderComponent,
  },
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
      this.$refs.skillsSection.scrollIntoView({
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
