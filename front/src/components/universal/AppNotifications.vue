<script setup lang="ts">
const notificationsStore = useNotificationsStore()
</script>

<template>
  <div class="pointer-events-none fixed right-4 top-20 z-[100] flex w-full max-w-xs flex-col gap-3">
    <TransitionGroup
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-x-4"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition-all duration-200 ease-in absolute"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <NotificationItem
        v-for="item in notificationsStore.items"
        :key="item.id"
        :notification="item"
        @close="notificationsStore.dismiss(item.id)"
      />
    </TransitionGroup>
  </div>
</template>
