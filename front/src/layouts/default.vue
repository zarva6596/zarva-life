<template>
  <div class="flex min-h-screen flex-col">
    <DefaultHeader />

    <main class="mt-16 flex-1">
      <slot />
    </main>

    <DefaultFooter />
  </div>
</template>
