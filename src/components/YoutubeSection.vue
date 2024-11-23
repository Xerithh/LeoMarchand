<template>
  <div class="w-full flex justify-center items-center flex-col bg-gray-100 py-20">
    <h2 class="text-3xl font-bold mb-6">Dernières Vidéos</h2>
    <div v-if="videos.length > 0" class="flex justify-center items-center flex-wrap gap-4 p-4">
      <div v-for="video in videos" :key="video.id.videoId" class="youtube-video">
        <iframe
          :src="'https://www.youtube.com/embed/' + video.id.videoId"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="rounded-lg mb-5"
        ></iframe>
      </div>
    </div>
    <div v-else>
      <LoaderComponent />
    </div>
  </div>
</template>

<script>
import LoaderComponent from './ui/LoaderComponent.vue'

export default {
  name: 'YoutubeSection',
  components: {
    LoaderComponent,
  },
  data() {
    return {
      videos: [], // Tableau pour stocker les vidéos récupérées
    }
  },
  methods: {
    async fetchYoutubeVideos() {
      try {
        const response = await fetch('/api/videos') // Endpoint Node.js
        const data = await response.json()
        this.videos = data // Mettre à jour les vidéos
      } catch (error) {
        console.error('Erreur lors de la récupération des vidéos:', error)
      }
    },
  },
  mounted() {
    this.fetchYoutubeVideos() // Appelle la méthode après le montage
  },
}
</script>

<style scoped>
iframe {
  width: 470px;
  height: 250px;
}
@media (max-width: 768px) {
  iframe {
    width: 300px;
    height: 150px;
  }
}
</style>
