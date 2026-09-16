<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-6 text-center">
    <span class="text-5xl lg:text-8xl">🚧</span>

    <h1 class="text-2xl font-bold text-ink">{{ title }}</h1>

    <p class="text-base text-ink-faint">Coming soon</p>
  </div>
</template>
