<script setup lang="ts">
const props = withDefaults(defineProps<{
  compact?: boolean
}>(), {
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
        compact && 'text-ink',
        !compact && locale === loc.code && 'text-ink',
        !compact && locale !== loc.code && 'text-ink-faint hover:text-ink',
      ]"
    >
      {{ loc.code.toUpperCase() }}
    </NuxtLink>
  </div>
</template>
