<script setup lang="ts">
const props = defineProps<{
  icon?: string
  name: string
  stars?: number
  labelHidden?: boolean
}>()

const DEFAULT_RATING_COLORS: [string, string] = ['#ef4444', '#dc2626']

const ratingColors: Record<number, [string, string]> = {
  0: DEFAULT_RATING_COLORS,
  1: ['#f97316', '#ea580c'],
  2: ['#fb923c', '#f97316'],
  3: ['#eab308', '#ca8a04'],
  4: ['#84cc16', '#65a30d'],
  5: ['#22c55e', '#16a34a'],
}

const barStyle = computed(() => {
  if (props.stars === undefined) return {}
  const [from, to] = ratingColors[props.stars] ?? DEFAULT_RATING_COLORS
  return {
    width: `${(props.stars / 5) * 100}%`,
    background: `linear-gradient(to right, ${from}, ${to})`,
  }
})
</script>

<template>
  <div class="relative flex items-center gap-2 overflow-hidden rounded-full border border-border bg-surface px-4 py-2 shadow-sm">
    <Icon
      v-if="icon"
      :name="icon"
      class="size-5"
    />

    <span
      v-if="!labelHidden"
      class="text-sm font-medium text-ink-secondary"
    >{{ name }}</span>

    <template v-if="stars !== undefined">
      <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-surface-tertiary" />

      <div
        class="absolute bottom-0 left-0 h-0.5"
        :style="barStyle"
      />
    </template>
  </div>
</template>
