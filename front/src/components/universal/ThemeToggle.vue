<script setup lang="ts">
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="flex size-8 cursor-pointer items-center justify-center rounded-full text-ink-muted transition-colors hover:text-ink"
    @click="toggleTheme"
  >
    <Icon
      :name="colorMode.value === 'dark' ? 'lucide:sun' : 'lucide:moon'"
      class="size-4"
    />
  </button>
</template>
