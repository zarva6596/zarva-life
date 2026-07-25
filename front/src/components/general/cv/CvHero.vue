<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="flex flex-col items-center py-20 text-center">
    <img
      src="https://github.com/zarva6596.png"
      alt="Roman Zarvanskyi"
      class="mb-6 size-40 rounded-full object-cover ring-4 ring-gray-100"
    >

    <h1 class="mb-2 text-4xl font-bold text-gray-900">
      {{ t('pages.cv.name') }}
    </h1>

    <p class="mb-8 text-xl text-gray-500">
      {{ t('pages.cv.position') }}
    </p>

    <CvTechStack />
  </section>
</template>
