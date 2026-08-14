<script setup lang="ts">
const { navItems } = useDashboardNavItems()
</script>

<template>
  <aside class="h-full w-64 shrink-0 border-r border-gray-200 bg-white px-4 py-6">
    <nav class="flex flex-col gap-1">
      <NuxtLink
        v-for="item in navItems"
        :key="item.key"
        :to="item.to"
        class="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
        active-class="bg-gray-100 text-black"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </aside>
</template>
