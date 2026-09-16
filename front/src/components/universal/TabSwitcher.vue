<script setup lang="ts">
export interface SwitcherTab {
  key: string
  label: string
  startDate?: string
}

const props = defineProps<{
  tabs: SwitcherTab[]
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

function toggle() {
  const next = props.tabs.find(t => t.key !== props.modelValue)
  if (next) emit('update:modelValue', next.key)
}
</script>

<template>
  <div class="font-semibold w-full flex justify-center">
    <div
      class="relative flex cursor-pointer justify-center md:hidden w-full"
      style="height: 50px"
      @click="toggle"
    >
      <div
        v-for="tab in tabs"
        :key="tab.key"
        class="absolute flex flex-col items-center gap-1 transition-all duration-500 ease-in-out pointer-events-none"
        :style="tab.key === modelValue
          ? { left: '50%', top: '20px', zIndex: 10, transform: 'translateX(-50%) scale(1)', opacity: '1' }
          : { left: '50%', top: '0px', zIndex: 0, transform: 'translateX(-50%) scale(0.82)', opacity: '0.3' }"
      >
        <span
          class="text-base/5 transition-colors whitespace-nowrap"
          :class="tab.key === modelValue ? 'text-ink' : 'text-ink-faint'"
        >
          {{ tab.label }}
        </span>

        <ExperienceLabel
          v-if="tab.startDate && tab.key === modelValue"
          :start-date="tab.startDate"
        />
      </div>
    </div>

    <div class="hidden items-center gap-3 text-xl md:flex">
      <template
        v-for="(tab, index) in tabs"
        :key="tab.key"
      >
        <div class="group flex flex-col items-center gap-1">
          <button
            class="cursor-pointer transition-colors"
            :class="tab.key === modelValue ? 'text-ink' : 'text-ink-faintest hover:text-ink-muted'"
            @click="emit('update:modelValue', tab.key)"
          >
            {{ tab.label }}
          </button>

          <ExperienceLabel
            v-if="tab.startDate"
            :start-date="tab.startDate"
            class="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        <span
          v-if="index < tabs.length - 1"
          class="hidden select-none self-start text-ink-faintest md:inline"
        >/</span>
      </template>
    </div>
  </div>
</template>
