<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const breadcrumbs = computed(() => [
  { label: t('nav.home'), to: localePath('/') },
  { label: t('nav.cv'), to: localePath('/cv') },
  { label: t('pages.cv.portfolio.button') },
])
</script>

<template>
  <div class="flex flex-col gap-6 px-6 py-4">
    <AppBreadcrumbs :items="breadcrumbs" />

    <ComingSoon :title="t('pages.cv.portfolio.software.title')" />
  </div>
</template>
