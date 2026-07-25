<script setup lang="ts">
const { t } = useI18n()

const activeRole = useCvRole()

const tabs = computed(() => [
  {
    key: 'software',
    label: t('pages.cv.roles.software'),
    startDate: '2020-06-24',
  },
  {
    key: 'hardware',
    label: t('pages.cv.roles.hardware'),
    startDate: '2026-07-01',
  },
])
</script>

<template>
  <section class="flex flex-col items-center py-20 text-center">
    <img
      src="https://github.com/zarva6596.png"
      alt="Roman Zarvanskyi"
      class="mb-6 size-40 rounded-full object-cover ring-4 ring-gray-100"
    >

    <h1 class="mb-4 text-4xl font-bold text-gray-900">
      {{ t('pages.cv.name') }}
    </h1>

    <TabSwitcher :model-value="activeRole" :tabs="tabs" class="mb-8" @update:model-value="(val) => activeRole = val" />

    <CvTechStack />
  </section>
</template>
