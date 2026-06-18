<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'dashboard'
}>(), {
  variant: 'primary',
})

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="flex gap-2">
    <NuxtLink
      v-for="loc in locales"
      :key="loc.code"
      :to="switchLocalePath(loc.code)"
      :class="[
        'text-sm font-medium transition-colors',
        variant === 'primary' && locale === loc.code && 'text-black',
        variant === 'primary' && locale !== loc.code && 'text-gray-400 hover:text-black',
        variant === 'dashboard' && locale === loc.code && 'text-white',
        variant === 'dashboard' && locale !== loc.code && 'text-white/40 hover:text-white',
      ]"
    >
      {{ loc.code.toUpperCase() }}
    </NuxtLink>
  </div>
</template>
