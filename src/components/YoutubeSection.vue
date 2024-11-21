<template>
  <div>
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
    <p v-else>Chargement des vidéos...</p>
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
