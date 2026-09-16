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
  <NuxtLink
    v-slot="{ navigate, href }"
    :to="to"
    custom
  >
    <a
      :href="href ?? undefined"
      class="flex h-full items-center px-3 font-medium tracking-wide text-ink transition-colors duration-500 hover:bg-invert hover:text-invert-text"
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
