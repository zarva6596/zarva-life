<script setup lang="ts">
const { t } = useI18n()

useHead({ title: t('pages.cv.name') })
</script>

<template>
  <div>
    <CvHero />
  </div>
</template>
