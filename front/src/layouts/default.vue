<template>
  <div class="flex min-h-screen flex-col">
    <DefaultHeader />

    <main class="flex-1">
      <slot />
    </main>

    <DefaultFooter />
  </div>
</template>
