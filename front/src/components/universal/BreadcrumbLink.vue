<script setup lang="ts">
import type { BreadcrumbItem } from './AppBreadcrumbs.vue'

defineProps<{
  item: BreadcrumbItem
  isCurrent?: boolean
}>()
</script>

<template>
  <NuxtLink
    v-if="item.to && !isCurrent"
    :to="item.to"
    class="transition-colors hover:text-gray-900"
  >
    {{ item.label }}
  </NuxtLink>

  <span
    v-else
    class="font-medium text-gray-900"
    aria-current="page"
  >
    {{ item.label }}
  </span>
</template>
