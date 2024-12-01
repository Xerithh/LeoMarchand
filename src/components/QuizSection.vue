<template>
  <div class="w-full flex justify-center items-center flex-col py-20">
    <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Quiz</h2>
    <p class="mb-10">Pour les fans: défie tes connaissances sur ma carrière !</p>
    <ActionButton v-on:click="expand()" :text="quizText()"></ActionButton>
  </div>
  <div class="quiz-collapse"><Quiz /></div>
</template>

<script>
import ActionButton from './ui/ActionButton.vue'
import Quiz from './Quiz.vue'
import gsap from 'gsap'
export default {
  name: 'QuizSection',
  components: { ActionButton, Quiz },
  data() {
    return {
      quizCollapsed: true,
      buttonText: 'Faire le Quiz +',
    }
  },
  methods: {
    quizText() {
      return this.quizCollapsed ? 'Faire le Quiz +' : 'Faire le Quiz -'
    },
    expand() {
      const tl = gsap.timeline({ defaults: { duration: 1 } })
      this.quizCollapsed = !this.quizCollapsed
      if (!this.quizCollapsed) {
        tl.to('.quiz-collapse', {
          maxHeight: 4000, //TODO adjust this later
          //color: 'red', // Animates to green
          duration: 2,
          ease: 'expo.inOut',
        })
      } else {
        tl.to('.quiz-collapse', {
          maxHeight: 0,
          // color: 'red', // Animates to green

          ease: 'expo.out',
        })
      }
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
.quiz-collapse {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  /* color: red; */
}
</style>
