export type NotificationType = 'success' | 'info' | 'error' | 'warning'

export interface Notification {
  id: string
  type: NotificationType
  title: string
  description?: string
  duration: number
}

export interface NotifyPayload {
  type: NotificationType
  title?: string
  description?: string
  duration?: number
}

const DEFAULT_DURATION = 5000

export const useNotificationsStore = defineStore('notifications', () => {
  const { t } = useI18n()

  const items = ref<Notification[]>([])

  const dismiss = (id: string) => {
    items.value = items.value.filter(item => item.id !== id)
  }

  const notify = (payload: NotifyPayload) => {
    const id = crypto.randomUUID()
    const duration = payload.duration ?? DEFAULT_DURATION

    items.value.push({
      id,
      type: payload.type,
      title: payload.title ?? t(`notifications.types.${payload.type}`),
      description: payload.description,
      duration,
    })

    if (duration > 0) {
      setTimeout(() => dismiss(id), duration)
    }

    return id
  }

  return { items, notify, dismiss }
})
