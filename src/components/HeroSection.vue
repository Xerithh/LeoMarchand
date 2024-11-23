<template>
  <section
    class="hero h-screen bg-cover bg-center flex items-center px-8"
    style="background-image: url('/background_hero.jpg')"
  >
    <div class="text-white md:mx-4 sm:mx-16 space-y-8">
      <h1 class="text-4xl sm:text-6xl font-extrabold drop-shadow-xl sm:text-left">Léon Marchand</h1>
      <p class="w-2/3 md:w-full text-lg md:text-xl sm:text-2xl italic sm:text-left">
        Explorez mes réalisations, performances et projets inspirants.
      </p>
      <div class="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start">
        <button
          class="duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-12 w-64 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold"
        >
          <div
            class="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"
          ></div>
          <div
            class="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-sky-800"
          ></div>
          <div
            class="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-sky-700"
          ></div>
          <div
            class="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-sky-600"
          ></div>
          <p class="z-10">Découvrir mon parcours</p>
        </button>

        <ActionButton text="Me Contacter" href="/contact" />
      </div>
    </div>
  </section>
</template>

<script>
import ActionButton from './ui/ActionButton.vue'

export default {
  name: 'HeroSection',
  components: {
    ActionButton,
  },
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
