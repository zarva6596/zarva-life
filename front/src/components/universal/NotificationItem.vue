<script setup lang="ts">
import type { Notification, NotificationType } from '~/stores/useNotificationsStore'

defineProps<{
  notification: Notification
}>()

defineEmits<{
  close: []
}>()

const typeStyles: Record<NotificationType, { border: string, bg: string, text: string, icon: string }> = {
  success: { border: 'border-success-border', bg: 'bg-success-bg', text: 'text-success-text', icon: 'lucide:check-circle' },
  info: { border: 'border-info-border', bg: 'bg-info-bg', text: 'text-info-text', icon: 'lucide:info' },
  error: { border: 'border-error-border', bg: 'bg-error-bg', text: 'text-error-text', icon: 'lucide:x-circle' },
  warning: { border: 'border-warning-border', bg: 'bg-warning-bg', text: 'text-warning-text', icon: 'lucide:alert-triangle' },
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
        class="mt-1 text-sm text-ink-muted"
      >
        {{ notification.description }}
      </p>
    </div>

    <button
      class="cursor-pointer text-ink-faint transition-colors hover:text-ink-secondary"
      @click="$emit('close')"
    >
      <Icon
        name="lucide:x"
        class="size-4"
      />
    </button>
  </div>
</template>
