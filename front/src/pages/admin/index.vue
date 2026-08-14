<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'admin',
})

const { t } = useI18n()
const authStore = useAuthStore()
</script>

<template>
  <div class="flex flex-col gap-2 px-6 py-8">
    <h1 class="text-2xl font-bold text-gray-900">
      {{ t('pages.admin.overview.title') }}
    </h1>

    <p class="text-gray-500">
      {{ t('pages.admin.overview.welcome', { email: authStore.user?.email }) }}
    </p>
  </div>
</template>
