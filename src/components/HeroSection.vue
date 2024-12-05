<template>
  <section
    class="hero h-screen bg-cover bg-center flex items-center px-8"
    style="background-image: url('/background_hero.jpg')"
  >
    <div class="text-white md:mx-4 sm:mx-16 space-y-8 m-10">
      <h1 class="text-4xl sm:text-6xl font-extrabold drop-shadow-xl sm:text-left">
        Léon Marchand
      </h1>
      <p class="w-full md:w-full text-lg md:text-xl sm:text-2xl italic sm:text-left">
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

        <ActionButton
          text="Me Contacter"
          :onClick="toggleForm"
        />
      </div>
    </div>

    <!-- Formulaire (affiché lorsque `showForm` est true) -->
    <transition name="fade">
      <div
        v-if="showForm"
        class="absolute top-0 left-0 w-3/5 h-1/1 flex items-center justify-center bg-white bg-opacity-0 m-10"
      >
        <FormSection />
      </div>
    </transition>
  </section>
</template>

<script>
import ActionButton from './ui/ActionButton.vue';
import FormSection from './FormSection.vue';

export default {
  name: 'HeroSection',
  components: {
    ActionButton,
    FormSection,
  },
  data() {
    return {
      showForm: false,
    };
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
  },
};
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
  background: rgba(0, 0, 0, 0.7);
  z-index: 0;
}
.hero > div {
  position: relative;
  z-index: 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width:1000px){
  .hero{
    flex-direction: column;
  }
  .form-section{
    width: 300px;
  }
}
</style>
