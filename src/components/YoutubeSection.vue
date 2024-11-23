<template>
  <div class="w-full flex justify-center items-center flex-col">
    <h2 class="text-3xl font-bold mb-6">Dernières Vidéos</h2>
    <div v-if="videos.length > 0" class="flex justify-center items-center flex-wrap gap-4 p-4">
      <div v-for="video in videos" :key="video.id.videoId" class="youtube-video">
        <iframe
          width="470"
          height="250"
          :src="'https://www.youtube.com/embed/' + video.id.videoId"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="rounded-lg mb-5"
        ></iframe>
      </div>
    </div>
    <p
      v-else
      class="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin m-5"
    ></p>
  </div>
</template>

<script>
export default {
  name: 'YoutubeSection',
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
