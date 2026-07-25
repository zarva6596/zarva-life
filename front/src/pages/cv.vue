<script setup lang="ts">
import type { CvRole } from '~/composables/useCvRole'

const { t } = useI18n()

useHead({ title: t('pages.cv.name') })

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
  <div>
    <CvHero />

    <div class="flex justify-center px-6">
      <TabSwitcher
        :model-value="activeRole"
        :tabs="tabs"
        @update:model-value="(val) => activeRole = val as CvRole"
      />
    </div>

    <CvSoftwareContent v-if="activeRole === 'software'" />

    <CvHardwareContent v-else />
  </div>
</template>
