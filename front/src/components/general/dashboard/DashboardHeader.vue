<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const authStore = useAuthStore()

const onLogout = async () => {
  await authStore.logout()
  await navigateTo(localePath('/login'))
}
</script>

<template>
  <header class="flex w-full items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
    <span class="text-sm text-gray-500">{{ authStore.user?.email }}</span>

    <div class="flex items-center gap-4">
      <LangSwitcher variant="dashboard" />

      <button
        class="cursor-pointer text-sm font-medium text-gray-700 transition-colors hover:text-black"
        @click="onLogout"
      >
        {{ t('pages.admin.logout') }}
      </button>
    </div>
  </header>
</template>
