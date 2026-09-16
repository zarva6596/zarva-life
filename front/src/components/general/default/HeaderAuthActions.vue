<script setup lang="ts">
const { authActions } = useAuthActions()
</script>

<template>
  <div class="flex items-center gap-3 self-center">
    <template
      v-for="(action, index) in authActions"
      :key="action.key"
    >
      <NuxtLink
        v-if="action.to && index < authActions.length - 1"
        :to="action.to"
        class="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
      >
        {{ action.label }}
      </NuxtLink>

      <NuxtLink
        v-else-if="action.to"
        :to="action.to"
        class="rounded-full bg-invert px-4 py-1.5 text-sm font-medium text-invert-text transition-colors hover:opacity-90"
      >
        {{ action.label }}
      </NuxtLink>

      <button
        v-else
        class="cursor-pointer rounded-full bg-invert px-4 py-1.5 text-sm font-medium text-invert-text transition-colors hover:opacity-90"
        @click="action.onClick"
      >
        {{ action.label }}
      </button>
    </template>
  </div>
</template>
