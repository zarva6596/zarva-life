<script setup lang="ts">
import type { CvExperience } from '~/types/cv'

defineProps<{
  experience: CvExperience[]
}>()

const openIndices = ref<Set<number>>(new Set([0]))

const toggle = (index: number) => {
  if (openIndices.value.has(index)) {
    openIndices.value.delete(index)
  }
  else {
    openIndices.value.add(index)
  }
  openIndices.value = new Set(openIndices.value)
}
</script>

<template>
  <div class="flex w-full max-w-5xl flex-col">
    <div
      v-for="(item, index) in experience"
      :key="index"
      class="relative border-b border-border-subtle pl-6 last:border-0
        before:absolute before:left-0 before:top-3.5 before:h-full before:w-px before:bg-surface-tertiary last:before:hidden
        after:absolute after:left-[-3px] after:top-3.5 after:size-1.5 after:rounded-full after:bg-ink-faint"
    >
      <CvExperienceItem
        :experience="item"
        :open="openIndices.has(index)"
        @toggle="toggle(index)"
      />
    </div>
  </div>
</template>
