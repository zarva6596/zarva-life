<script setup lang="ts">
const props = defineProps<{
  icon?: string
  name: string
  stars?: number
  labelHidden?: boolean
}>()

const ratingColors: Record<number, [string, string]> = {
  0: ['#ef4444', '#dc2626'],
  1: ['#f97316', '#ea580c'],
  2: ['#fb923c', '#f97316'],
  3: ['#eab308', '#ca8a04'],
  4: ['#84cc16', '#65a30d'],
  5: ['#22c55e', '#16a34a'],
}

const barStyle = computed(() => {
  if (props.stars === undefined) return {}
  const [from, to] = ratingColors[props.stars] ?? ratingColors[0]
  return {
    width: `${(props.stars / 5) * 100}%`,
    background: `linear-gradient(to right, ${from}, ${to})`,
  }
})
</script>

<template>
  <div class="relative flex items-center gap-2 overflow-hidden rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
    <Icon
      v-if="icon"
      :name="icon"
      class="size-5"
    />

    <span
      v-if="!labelHidden"
      class="text-sm font-medium text-gray-700"
    >{{ name }}</span>

    <template v-if="stars !== undefined">
      <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100" />

      <div
        class="absolute bottom-0 left-0 h-0.5"
        :style="barStyle"
      />
    </template>
  </div>
</template>
