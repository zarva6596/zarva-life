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
    class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:border-gray-300 hover:bg-gray-50"
  >
    <Icon name="lucide:download" class="size-4" />

    {{ t('pages.cv.downloadCv') }}
  </a>
</template>
