<script setup lang="ts">
withDefaults(defineProps<{
  label: string
  items: { key: string; to: string; label: string }[]
  size?: 'sm' | 'base'
  uppercase?: boolean
}>(), {
  size: 'sm',
  uppercase: false,
})

const isOpen = ref(false)
const invisibleRef = ref<HTMLElement>()
const itemsRef = ref<HTMLElement>()
const collapsedWidth = ref<number | null>(null)
const expandedWidth = ref<number | null>(null)

const measure = () => {
  requestAnimationFrame(() => {
    collapsedWidth.value = invisibleRef.value?.offsetWidth ?? 0
    expandedWidth.value = itemsRef.value?.offsetWidth ?? 0
  })
}

onMounted(measure)

const currentWidth = computed(() =>
  collapsedWidth.value === null
    ? 'auto'
    : `${isOpen.value ? expandedWidth.value : collapsedWidth.value}px`,
)
</script>

<template>
  <div
    class="relative h-full overflow-hidden"
    :style="{ width: currentWidth, transition: 'width 600ms ease' }"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <span
      class="absolute inset-0 flex items-center justify-center whitespace-nowrap font-medium tracking-wide transition-opacity duration-600"
      :class="[
        size === 'sm' ? 'text-sm' : 'text-base',
        uppercase && 'uppercase',
        isOpen ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100',
      ]"
    >
      {{ label }}
    </span>

    <div
      ref="itemsRef"
      class="absolute inset-y-0 left-0 flex items-stretch whitespace-nowrap transition-opacity duration-600"
      :class="isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'"
    >
      <NavItem
        v-for="item in items"
        :key="item.key"
        :to="item.to"
        :label="item.label"
        :size="size"
        :uppercase="uppercase"
      />
    </div>

    <span
      ref="invisibleRef"
      class="invisible flex h-full items-center whitespace-nowrap px-3 font-medium tracking-wide"
      :class="[
        size === 'sm' ? 'text-sm' : 'text-base',
        uppercase && 'uppercase',
      ]"
    >
      {{ label }}
    </span>
  </div>
</template>
