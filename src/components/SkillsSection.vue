<template>
  <section class="skills py-16 px-8 bg-gray-100 text-center">
    <h2 class="text-3xl font-bold mb-6">Compétences</h2>
    <div class="flex flex-wrap justify-center gap-6">
      <div v-for="skill in skills" :key="skill.id" class="skill flex flex-col items-center">
        <img :src="skill.icon" :alt="skill.name" class="h-12 w-12 mb-2" />
        <p class="text-lg font-bold">{{ skill.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: [
        { id: 1, name: 'JavaScript', icon: '/path/to/js-icon.png' },
        { id: 2, name: 'Vue.js', icon: '/path/to/vue-icon.png' },
        // Ajoutez plus de compétences ici.
      ],
    }
  },
}
</script>
