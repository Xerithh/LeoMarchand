<template>
  <section class="about py-16 px-8 bg-gray-100">
    <div class="container mx-auto flex flex-col md:flex-row items-center md:items-start">
      <!-- Image à gauche -->
      <div class="w-full md:w-1/2">
        <img
          src="/image_left_about.jpg"
          alt="Léon Marchand"
          class="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      <!-- Texte à droite -->
      <div class="flex flex-col w-full md:w-1/2 md:ml-12 mt-8 md:mt-0 gap-6">
        <h2 class="text-3xl font-bold text-center md:text-left">À propos</h2>
        <p class="max-w-lg text-gray-700 text-sm leading-relaxed">
          Léon Marchand est un nageur français né le 17 mai 2002 à Toulouse. Il est issu d’une
          famille de nageurs et a commencé à s’entraîner à un jeune âge. Grâce à son talent
          exceptionnel et sa détermination, il est devenu l’un des meilleurs nageurs du monde,
          remportant plusieurs titres de champion du monde et olympique. Aujourd’hui, Léon inspire
          par sa persévérance, sa passion et son engagement à exceller dans tout ce qu’il
          entreprend.
        </p>
        <ActionButton text="Me Contacter" href="#top" />
      </div>
    </div>
  </section>
</template>

<script>
import ActionButton from './ui/ActionButton.vue'

export default {
  name: 'AboutSection',
  components: {
    ActionButton,
  },
}
</script>
