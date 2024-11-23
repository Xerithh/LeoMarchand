<template>
  <section
    class="hero h-screen bg-cover bg-center flex items-center px-4"
    style="background-image: url('/background_hero.jpg')"
  >
    <div class="text-white mx-16 space-y-8">
      <h1 class="text-6xl font-extrabold drop-shadow-xl">Léon Marchand</h1>
      <p class="text-2xl italic">Explorez mes réalisations, performances et projets inspirants.</p>
      <div class="flex flex-col sm:flex-row gap-6">
        <a
          href="#about"
          class="px-6 py-3 bg-blue-500 text-white font-semibold rounded shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Découvrir mon parcours
        </a>
        <a
          href="#contact"
          class="px-6 py-3 bg-gray-700 text-white font-semibold rounded shadow-lg hover:bg-gray-800 transition duration-300"
        >
          Me Contacter
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
}
</script>

<style scoped>
.hero {
  position: relative;
}
.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7); /* Overlay sombre intensifié */
  z-index: 0;
}
.hero > div {
  position: relative;
  z-index: 1;
}
</style>
