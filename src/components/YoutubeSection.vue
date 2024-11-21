<template>
  <section class="youtube py-16 px-8 bg-gray-100 text-center">
    <h2 class="text-3xl font-bold mb-6">Vidéos Youtube</h2>
    <iframe
      class="w-full max-w-4xl mx-auto aspect-video"
      src="https://www.youtube.com/embed/VIDEO_ID"
      title="YouTube Video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </section>
</template>

<script>
export default {
  name: 'YoutubeSection',
}
</script>
