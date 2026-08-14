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
        class="text-sm font-medium text-gray-500 transition-colors hover:text-black"
      >
        {{ action.label }}
      </NuxtLink>

      <NuxtLink
        v-else-if="action.to"
        :to="action.to"
        class="rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
      >
        {{ action.label }}
      </NuxtLink>

      <button
        v-else
        class="cursor-pointer rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        @click="action.onClick"
      >
        {{ action.label }}
      </button>
    </template>
  </div>
</template>
