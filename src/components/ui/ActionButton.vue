<template>
  <button
    @click="handleClick"
    :class="[
      'swimButton relative group cursor-pointer text-sky-50 overflow-hidden h-12 w-48 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold',
      customClass,
    ]"
  >
    <div
      class="swimButton absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-900"
    ></div>
    <div
      class="swimButton absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-800"
    ></div>
    <div
      class="swimButton absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-700"
    ></div>
    <div
      class="swimButton absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-sky-600"
    ></div>
    <p class="swimButton z-10">{{ text }}</p>
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      default: null,
    },
    onClick: {
      type: Function,
      default: null,
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick(event) {
      if (this.href) {
        window.location.href = this.href
      } else if (this.onClick) {
        this.onClick(event)
      }
    },
  },
}
</script>
