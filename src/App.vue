<template>
  <div ref="box" class="w-20 h-20 bg-blue-500"></div>
  <h1>Salut</h1>
</template>

<script>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

export default {
  setup() {
    const box = ref(null)

    onMounted(() => {
      gsap.to(box.value, { x: 200, duration: 2 })
    })

    return { box }
  },
}
</script>
