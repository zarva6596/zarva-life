<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="flex flex-col items-center pt-20 pb-4 text-center">
    <img
      src="https://github.com/zarva6596.png"
      alt="Roman Zarvanskyi"
      class="mb-6 size-40 rounded-full object-cover ring-4 ring-border-subtle"
    >

    <h1 class="text-4xl font-bold text-ink">
      {{ t('pages.cv.name') }}
    </h1>
  </section>
</template>
