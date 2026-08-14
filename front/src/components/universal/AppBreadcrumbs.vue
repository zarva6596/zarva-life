<script setup lang="ts">
export interface BreadcrumbItem {
  label: string
  to?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex flex-wrap items-center gap-2 text-sm text-gray-500">
      <template
        v-for="(item, index) in items"
        :key="item.label"
      >
        <li class="flex items-center">
          <BreadcrumbLink
            :item="item"
            :is-current="index === items.length - 1"
          />
        </li>

        <li
          v-if="index < items.length - 1"
          class="select-none text-gray-300"
          aria-hidden="true"
        >
          /
        </li>
      </template>
    </ol>
  </nav>
</template>
