<template>
  <footer class="bg-gray-900 text-white py-8">
    <div
      class="container w-full flex flex-col md:flex-row flex-wrap justify-start lg:justify-center gap-x-12 md:gap-x-48 gap-y-12 md:gap-y-24 py-4 pl-12 lg:pl-0"
    >
      <!-- Section À propos -->
      <div
        class="footer-about flex flex-col items-center md:items-start text-center md:text-left max-w-xs"
      >
        <h3 class="text-xl font-bold mb-4">À propos</h3>
        <p class="text-gray-400 mb-4">
          Ce site présente les réalisations et les actualités de Léo Marchand. Retrouvez ses
          performances, vidéos et autres projets inspirants.
        </p>

        <ActionButton
          text="Me Contacter"
          href="#top"
        />
      </div>

      <!-- Section Navigation -->
      <div class="footer-nav flex flex-col items-center md:items-start text-center md:text-left">
        <h3 class="text-xl font-bold mb-4">Navigation</h3>
        <ul class="space-y-2 md:pl-0">
          <li><a href="#realisations" class="hover:text-blue-400">Réalisations</a></li>
          <li><a href="#videos" class="hover:text-blue-400">Vidéos</a></li>
          <li><a href="#contact" class="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>

      <!-- Section Contact -->
      <div
        class="footer-contact flex flex-col items-center md:items-start text-center md:text-left"
      >
        <h3 class="text-xl font-bold mb-4">Contact</h3>
        <ul class="space-y-2">
          <li>
            <a
              href="mailto:leo.marchand@example.com"
              class="hover:text-blue-400 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884l8 4.8 8-4.8A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4.8-8-4.8V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              leo.marchand@example.com
            </a>
          </li>
          <li>
            <a href="tel:+330123456789" class="hover:text-blue-400 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 5a3 3 0 013-3h10a3 3 0 013 3v10a3 3 0 01-3 3H5a3 3 0 01-3-3V5zm7.293.293a1 1 0 011.414 0L13 7.586 14.293 6.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              +33 0 12 34 56 78
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
      © 2024 Léo Marchand. Tous droits réservés.
    </div>
  </footer>
</template>

<script>
import ActionButton from './ui/ActionButton.vue';

export default {
  name: 'FooterSection',
  components: {
    ActionButton,
  },
};
</script>

<style scoped>
footer a {
  transition: color 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer-about,
  .footer-nav,
  .footer-contact {
    align-items: flex-start;
    text-align: left;
  }
}
</style>
