<script setup lang="ts">
import type { CvExperience } from '~/types/cv'

defineProps<{
  experience: CvExperience[]
}>()
</script>

<template>
  <div class="flex w-full max-w-5xl flex-col gap-8">
    <div
      v-for="(item, index) in experience"
      :key="index"
      class="relative pl-6 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-gray-200 after:absolute after:left-[-3px] after:top-2 after:size-1.5 after:rounded-full after:bg-gray-400"
    >
      <CvExperienceItem :experience="item" />
    </div>
  </div>
</template>
