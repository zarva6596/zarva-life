<script setup lang="ts">
const props = defineProps<{
  startDate: string
}>()

const { t } = useI18n()

const experience = computed(() => {
  const start = new Date(props.startDate)
  const now = new Date()

  const totalMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth())

  if (totalMonths < 1) {
    const days = Math.floor((now.getTime() - start.getTime()) / 86_400_000)
    return t('common.experience.days', { n: days })
  }

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  if (years === 0) return t('common.experience.months', { n: months })
  if (months === 0) return t('common.experience.years', { n: years })
  return t('common.experience.yearsAndMonths', { years, months })
})
</script>

<template>
  <span class="text-xs font-light italic text-gray-400">{{ experience }}</span>
</template>
