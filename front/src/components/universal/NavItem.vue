<script setup lang="ts">
withDefaults(defineProps<{
  to: string
  label: string
  size?: 'sm' | 'base'
  uppercase?: boolean
}>(), {
  size: 'sm',
  uppercase: false,
})
</script>

<template>
  <NuxtLink :to="to" custom v-slot="{ navigate, href }">
    <a
      :href="href ?? undefined"
      class="flex h-full items-center px-3 font-medium tracking-wide transition-colors duration-500 hover:bg-black hover:text-white"
      :class="[
        size === 'sm' ? 'text-sm' : 'text-base',
        uppercase && 'uppercase',
      ]"
      @click="navigate"
    >
      {{ label }}
    </a>
  </NuxtLink>
</template>
