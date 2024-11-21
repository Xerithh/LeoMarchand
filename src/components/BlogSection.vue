<template>
  <section class="blog py-16 px-8 bg-white text-center">
    <h2 class="text-3xl font-bold mb-6">Actualités</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <article v-for="post in posts" :key="post.id" class="post bg-gray-100 p-4 rounded">
        <h3 class="text-xl font-bold mb-2">{{ post.title }}</h3>
        <p class="text-gray-700">{{ post.excerpt }}</p>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogSection',
  data() {
    return {
      posts: [
        { id: 1, title: 'Article 1', excerpt: 'Résumé de l’article 1' },
        { id: 2, title: 'Article 2', excerpt: 'Résumé de l’article 2' },
        // Ajoutez plus d’articles ici.
      ],
    }
  },
}
</script>
