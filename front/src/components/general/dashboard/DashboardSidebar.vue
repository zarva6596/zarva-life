<script setup lang="ts">
const { navItems } = useDashboardNavItems()
</script>

<template>
  <aside class="h-full w-64 shrink-0 border-r border-border bg-surface px-4 py-6">
    <nav class="flex flex-col gap-1">
      <NuxtLink
        v-for="item in navItems"
        :key="item.key"
        :to="item.to"
        class="rounded-lg px-3 py-2 text-sm font-medium text-ink-secondary transition-colors hover:bg-surface-tertiary"
        active-class="bg-surface-tertiary text-ink"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </aside>
</template>
