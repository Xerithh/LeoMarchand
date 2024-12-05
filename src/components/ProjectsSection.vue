<template>
  <section
    class="skills w-full flex justify-center items-center flex-col py-20 px-8"
    ref="skillsSection"
  >
    <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Réalisations</h2>

    <!-- Loader -->
    <div v-if="projects.length === 0 && isLoading" class="w-full flex justify-center">
      <LoaderComponent />
    </div>

    <!-- Projets affichés -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
      <div
        v-for="(project, index) in displayedProjects"
        :key="index"
        :style="{
          backgroundImage: `url('/skills/background_skills_${(index % 6) + 1}.jpg')`,
        }"
        class="skill-card bg-cover bg-center rounded-lg shadow-lg relative p-8 pb-5 text-white flex flex-col justify-between h-72"
      >
        <!-- Lien vers la page de la compétition -->
        <a
          :href="project.competitionUrl"
          target="_blank"
          class="w-full h-full absolute top-0 left-0 z-10"
        ></a>

        <!-- Titre de la compétition -->
        <h3 class="text-3xl font-bold mb-6">{{ project.event }}</h3>

        <!-- Informations -->
        <div class="info-box space-y-2">
          <!-- Position -->
          <MedalPosition :position="project.position" />

          <!-- Temps -->
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

    <!-- Boutons d'action -->
    <div class="text-center mt-10 space-y-6">
      <div v-if="hasMoreProjects && !isLoading">
        <ActionButton text="Afficher plus" :onClick="loadMore" />
      </div>
      <div v-if="displayedProjects.length > limit && !isLoading">
        <ActionButton text="Afficher moins" :onClick="showLess" customClass="scale-90 bg-sky-950" />
      </div>
    </div>

    <!-- Loader pendant le chargement -->
    <div v-if="(projects.length !== 0) & isLoading" class="text-center mt-10">
      <LoaderComponent />
    </div>
  </section>
</template>

<script>
import MedalPosition from './MedalPosition.vue'
import LoaderComponent from './ui/LoaderComponent.vue'
import ActionButton from './ui/ActionButton.vue'

export default {
  name: 'SkillsSection',
  components: {
    LoaderComponent,
    MedalPosition,
    ActionButton,
  },
  data() {
    return {
      projects: [], // Tous les projets récupérés
      displayedProjects: [], // Projets actuellement affichés
      currentPage: 1, // Page actuelle
      limit: 6, // Nombre de projets par page
      totalProjects: 0, // Nombre total de projets disponibles
      isLoading: false, // Indicateur de chargement
      hasMoreProjects: true, // Indique s'il reste des projets à charger
    }
  },
  methods: {
    async fetchSwimmingStats(page = 1) {
      this.isLoading = true
      try {
        const response = await fetch(`/api/swimming-stats/stats?page=${page}&limit=${this.limit}`)
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données')
        }
        const data = await response.json()

        // Ajouter les nouveaux projets à ceux déjà affichés
        this.projects = [...this.projects, ...data.projects]
        this.totalProjects = data.total

        // Mettre à jour les projets affichés
        this.updateDisplayedProjects()

        // Vérifier s'il reste des projets à charger
        this.hasMoreProjects = this.projects.length < this.totalProjects
      } catch (error) {
        console.error('Erreur :', error.message)
      } finally {
        this.isLoading = false
      }
    },
    loadMore() {
      // Charger la page suivante
      this.currentPage += 1
      this.fetchSwimmingStats(this.currentPage)
    },
    showLess() {
      // Réduire l'affichage à la limite initiale
      this.displayedProjects = this.projects.slice(0, this.limit)
      this.currentPage = 1
      this.hasMoreProjects = true

      // Faire défiler vers le haut de la section
      this.scrollToTop()
    },
    updateDisplayedProjects() {
      // Met à jour la liste des projets affichés
      this.displayedProjects = this.projects.slice(0, this.currentPage * this.limit)
    },
    scrollToTop() {
      this.$refs.skillsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },
  },
  mounted() {
    this.fetchSwimmingStats() // Charger les premiers projets au montage
  },
}
</script>
