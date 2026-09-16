<script setup lang="ts">
defineProps<{
  to: string
}>()

const { t } = useI18n()
</script>

<template>
  <NuxtLink
    :to="to"
    class="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink-secondary shadow-sm transition-colors hover:border-border hover:bg-surface-secondary"
  >
    <Icon
      name="lucide:folder-open"
      class="size-4"
    />

    {{ t('pages.cv.portfolio.button') }}
  </NuxtLink>
</template>
