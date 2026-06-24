<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'dashboard'
}>(), {
  variant: 'primary',
})
</script>

<template>
  <NuxtLink
    to="/"
    :class="[
      'flex items-center text-lg font-bold tracking-widest uppercase',
      variant === 'primary' && 'text-black',
      variant === 'dashboard' && 'text-white',
    ]"
  >
    ZARVA LIFE
  </NuxtLink>
</template>
