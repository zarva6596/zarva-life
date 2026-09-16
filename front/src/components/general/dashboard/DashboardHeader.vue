<script setup lang="ts">
const { t } = useI18n()
const authStore = useAuthStore()
const { onLogout } = useAuthActions()
</script>

<template>
  <header class="flex w-full items-center justify-between border-b border-border bg-surface px-6 py-4">
    <AppLogo />

    <div class="flex items-center gap-4">
      <span class="text-sm text-ink-muted">{{ authStore.user?.email }}</span>

      <LangSwitcher />

      <ThemeToggle />

      <button
        class="cursor-pointer text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
        @click="onLogout"
      >
        {{ t('pages.admin.logout') }}
      </button>
    </div>
  </header>
</template>
