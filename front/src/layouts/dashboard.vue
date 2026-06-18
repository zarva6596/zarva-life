<template>
  <div class="flex min-h-screen flex-col">
    <DashboardHeader />
    
    <div class="flex flex-1 overflow-hidden">
      <DashboardSidebar />

      <main class="flex-1 overflow-auto">
        <slot />
      </main>
    </div>

    <DashboardFooter />
  </div>
</template>
