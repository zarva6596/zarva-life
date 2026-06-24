<script setup lang="ts">
const { locale } = useI18n()

const menuOpen = ref(false)
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 h-16 w-full border-b border-gray-200 bg-white px-6">
    <div class="hidden h-full items-stretch justify-between md:flex">
      <AppLogo />

      <DefaultNav :key="locale" />

      <LangSwitcher />
    </div>

    <div class="relative flex h-full items-center md:hidden">
      <div class="flex-1">
        <LangSwitcher compact />
      </div>

      <div class="absolute left-1/2 -translate-x-1/2">
        <AppLogo />
      </div>

      <div class="flex flex-1 justify-end">
        <MobileMenuToggle v-model="menuOpen" />
      </div>
    </div>
  </header>

  <MobileMenu v-model="menuOpen" />
</template>
