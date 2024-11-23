<template>
  <div class="flex items-center gap-3">
    <!-- Médaille avec couleur dynamique -->
    <div
      :class="medalClass"
      class="flex items-center gap-3 text-black font-medium rounded px-2 py-1 w-fit"
    >
      <!-- Icône de Médaille -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        viewBox="0 0 24 24"
        fill="currentColor"
        color="currentColor"
      >
        <path
          d="M12 0C9.24 0 7 2.24 7 5C7 7.25 8.16 9.16 10 10.03V13H7V15H10V19H14V15H17V13H14V10.03C15.84 9.16 17 7.25 17 5C17 2.24 14.76 0 12 0ZM12 7C11.28 7 10.6 7.32 10.23 7.8C9.87 8.29 9.81 8.88 10.07 9.33L11.06 10.88L10.41 12.5L12 11.64L13.59 12.5L12.94 10.88L13.93 9.33C14.19 8.88 14.13 8.29 13.77 7.8C13.4 7.32 12.72 7 12 7Z"
        />
      </svg>
      <span>{{ positionText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MedalPosition',
  props: {
    position: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    // Convert position to a number (if it's a string)
    positionNumber() {
      return Number(this.position)
    },
    // Dynamically calculate the medal color and text based on position
    medalClass() {
      const position = this.positionNumber
      switch (position) {
        case 1:
          return 'bg-yellow-400' // Or
        case 2:
          return 'bg-gray-400' // Argent
        case 3:
          return 'bg-orange-400' // Bronze
        default:
          return 'bg-white text-gray-800' // Autres positions
      }
    },
    // Display the correct position text based on the number
    positionText() {
      const position = this.positionNumber
      switch (position) {
        case 1:
          return '1er'
        case 2:
          return '2ème'
        case 3:
          return '3ème'
        default:
          return `3+`
      }
    },
  },
}
</script>
