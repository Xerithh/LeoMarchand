<template>
  <div class="w-full flex justify-center items-center flex-col py-20">
    <h2 class="text-3xl font-bold mb-6">Quiz</h2>
    <p class="mb-10">Pour les fans: teste tes connaissances sur ma carrière !</p>
    <ActionButton v-on:click="lmao()" text="Faire le Quiz"></ActionButton>
  </div>
</template>

<script>
import ActionButton from './ui/ActionButton.vue'

export default {
  name: 'QuizSection',
  components: { ActionButton },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    lmao() {
      this.counter++
    },
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
