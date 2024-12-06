<template>
  <div class="form-section bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
    <h2 class="text-2xl font-bold text-center mb-6">Contactez moi</h2>
    <form @submit.prevent="submitForm" class=" flex flex-col items-center w-100%">
      <div class="mb-4 w-full">
        <label for="name" class="block text-sm font-medium">Nom</label>
        <input
          type="text"
          id="name"
          v-model="name"
          class="border border-gray-300 p-3 rounded w-full"
          placeholder="Votre nom"
          required
        />
      </div>
      <div class="mb-4 w-full">
        <label for="email" class="block text-sm font-medium">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="border border-gray-300 p-3 rounded w-full"
          placeholder="Votre email"
          required
        />
      </div>
      <div class="mb-4 w-full">
        <label for="message" class="block text-sm font-medium">Message</label>
        <textarea
          id="message"
          v-model="message"
          class="border border-gray-300 p-3 rounded w-full resize-none"
          rows="2"
          placeholder="Votre message"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-blue-900 text-white py-2 px-6 rounded-md w-full hover:bg-blue-600 transition-colors"
      >
        Envoyer
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormSection",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      alert(`Merci ${this.name}, votre message a été envoyé.`);
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.form-section {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 600px;
}
</style>
