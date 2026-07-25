<script setup lang="ts">
defineProps<{
  paragraphs: string[]
}>()
</script>

<template>
  <div class="flex max-w-5xl flex-col gap-4">
    <p
      v-for="(paragraph, index) in paragraphs"
      :key="index"
      class="indent-8 text-justify text-base leading-relaxed text-gray-500"
    >
      {{ paragraph }}
    </p>
  </div>
</template>
