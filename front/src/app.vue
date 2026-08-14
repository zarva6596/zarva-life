<script setup lang="ts">
const { t } = useI18n()
const localeHead = useLocaleHead({ dir: true, seo: true })

useHead(localeHead)

useSeoMeta({
  description: () => t('seo.description'),
  keywords: () => t('seo.keywords'),
  ogDescription: () => t('seo.description'),
  twitterDescription: () => t('seo.description'),
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
