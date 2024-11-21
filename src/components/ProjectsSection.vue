<template>
  <section class="projects py-16 px-8 bg-white">
    <h2 class="text-3xl font-bold text-center mb-6">Réalisations</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in projects" :key="project.id" class="project bg-gray-100 p-4 rounded">
        <img :src="project.image" :alt="project.title" class="mb-4 rounded" />
        <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
        <p class="text-gray-700">{{ project.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Projet 1',
          description: 'Description du projet 1',
          image: '/path/to/image1.jpg',
        },
        {
          id: 2,
          title: 'Projet 2',
          description: 'Description du projet 2',
          image: '/path/to/image2.jpg',
        },
        // Ajoutez plus de projets ici.
      ],
    }
  },
}
</script>
