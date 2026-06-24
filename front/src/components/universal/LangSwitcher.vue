<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'dashboard'
  compact?: boolean
}>(), {
  variant: 'primary',
  compact: false,
})

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const visibleLocales = computed(() =>
  props.compact ? locales.value.filter(l => l.code !== locale.value) : locales.value,
)
</script>

<template>
  <div class="flex items-center gap-2 self-center">
    <NuxtLink
      v-for="loc in visibleLocales"
      :key="loc.code"
      :to="switchLocalePath(loc.code)"
      :class="[
        'text-base font-medium transition-colors',
        variant === 'primary' && props.compact && 'text-black',
        variant === 'primary' && !props.compact && locale === loc.code && 'text-black',
        variant === 'primary' && !props.compact && locale !== loc.code && 'text-gray-400 hover:text-black',
        variant === 'dashboard' && locale === loc.code && 'text-white',
        variant === 'dashboard' && locale !== loc.code && 'text-white/40 hover:text-white',
      ]"
    >
      {{ loc.code.toUpperCase() }}
    </NuxtLink>
  </div>
</template>
