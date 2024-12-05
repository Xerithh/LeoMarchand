<template>
    <div ref="textElement" class="text-container">
      <div v-html="animatedText"></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { gsap } from 'gsap'
  
  // Define the prop to receive the text to animate
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
  })
  
  // Create a ref to hold the animated text and the DOM element
  const textElement = ref(null)
  const animatedText = ref('')
  
  // Function to handle text animation
  const animateText = () => {
    let newText = ''
    // Add spans around each character
    for (let i = 0; i < props.text.length; i++) {
      newText += `<span class="letter">${props.text[i] === ' ' ? '&nbsp;' : props.text[i]}</span>`
    }
    animatedText.value = newText
  
    // Animate the text using GSAP
    gsap.fromTo(
      `${textElement.value} .letter`,
      { opacity: 0, y: 45 },
      {
        duration: 2,
        opacity: 1,
        y: 0,
        stagger: 0.03,
        ease: 'elastic(1.2, 0.5)',
      }
    )
  }
  
  // Expose the animateText function to the parent component
  defineExpose({
    animateText,
  })
  </script>
  
  <style scoped>
  .text-container {
    display: inline-block;
  }
  
  .letter {
    display: inline-block;
  }
  </style>
  