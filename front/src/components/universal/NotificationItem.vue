<script setup lang="ts">
import type { Notification, NotificationType } from '~/stores/useNotificationsStore'

defineProps<{
  notification: Notification
}>()

defineEmits<{
  close: []
}>()

const typeStyles: Record<NotificationType, { border: string, bg: string, text: string, icon: string }> = {
  success: { border: 'border-green-500', bg: 'bg-green-50', text: 'text-green-700', icon: 'lucide:check-circle' },
  info: { border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-700', icon: 'lucide:info' },
  error: { border: 'border-red-500', bg: 'bg-red-50', text: 'text-red-700', icon: 'lucide:x-circle' },
  warning: { border: 'border-amber-500', bg: 'bg-amber-50', text: 'text-amber-700', icon: 'lucide:alert-triangle' },
}
</script>

<template>
  <div
    class="pointer-events-auto flex w-full items-start gap-2.5 rounded-lg border border-l-4 p-3 shadow-lg"
    :class="[typeStyles[notification.type].border, typeStyles[notification.type].bg]"
  >
    <Icon
      :name="typeStyles[notification.type].icon"
      class="mt-0.5 size-5 shrink-0"
      :class="typeStyles[notification.type].text"
    />

    <div class="min-w-0 flex-1">
      <p
        class="text-sm font-semibold"
        :class="typeStyles[notification.type].text"
      >
        {{ notification.title }}
      </p>

      <p
        v-if="notification.description"
        class="mt-1 text-sm text-gray-600"
      >
        {{ notification.description }}
      </p>
    </div>

    <button
      class="cursor-pointer text-gray-400 transition-colors hover:text-gray-700"
      @click="$emit('close')"
    >
      <Icon
        name="lucide:x"
        class="size-4"
      />
    </button>
  </div>
</template>
