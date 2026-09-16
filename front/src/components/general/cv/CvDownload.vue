<script setup lang="ts">
defineProps<{
  href: string
}>()

const { t } = useI18n()
</script>

<template>
  <a
    :href="href"
    download
    class="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-ink-secondary shadow-sm transition-colors hover:border-border hover:bg-surface-secondary"
  >
    <Icon
      name="lucide:download"
      class="size-4"
    />

    {{ t('pages.cv.downloadCv') }}
  </a>
</template>
