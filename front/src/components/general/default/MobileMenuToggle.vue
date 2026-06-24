<script setup lang="ts">
const isOpen = defineModel<boolean>({ default: false })
</script>

<template>
  <button
    class="flex flex-col items-center justify-center gap-1.5 p-2"
    @click="isOpen = !isOpen"
  >
    <span
      class="block h-0.5 w-6 bg-black transition-all duration-300"
      :class="isOpen ? 'translate-y-2 rotate-45' : ''"
    />

    <span
      class="block h-0.5 w-6 bg-black transition-all duration-300"
      :class="isOpen ? 'opacity-0' : ''"
    />

    <span
      class="block h-0.5 w-6 bg-black transition-all duration-300"
      :class="isOpen ? '-translate-y-2 -rotate-45' : ''"
    />
  </button>
</template>
