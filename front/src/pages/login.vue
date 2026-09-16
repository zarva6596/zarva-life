<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: 'guest',
})

const { t } = useI18n()
</script>

<template>
  <div class="flex w-full max-w-sm flex-col gap-6 px-6 py-4">
    <div class="flex flex-col gap-1 text-center">
      <h1 class="text-2xl font-bold text-ink">
        {{ t('pages.auth.login.title') }}
      </h1>

      <p class="text-sm text-ink-faint">
        {{ t('pages.auth.login.subtitle') }}
      </p>
    </div>

    <LoginForm />
  </div>
</template>
