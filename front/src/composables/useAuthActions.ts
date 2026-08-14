export interface AuthNavAction {
  key: string
  label: string
  to?: string
  onClick?: () => void | Promise<void>
}

export const useAuthActions = () => {
  const { t } = useI18n()
  const localePath = useLocalePath()
  const authStore = useAuthStore()
  const notificationsStore = useNotificationsStore()

  const onLogout = async () => {
    await authStore.logout()
    notificationsStore.notify({ type: 'success', description: t('pages.admin.logoutSuccessMessage') })
    await navigateTo(localePath('/login'))
  }

  const authActions = computed<AuthNavAction[]>(() => {
    if (authStore.isAdmin) {
      return [{ key: 'dashboard', label: t('nav.dashboard'), to: localePath('/admin') }]
    }

    if (authStore.isAuthenticated) {
      return [{ key: 'logout', label: t('nav.logout'), onClick: onLogout }]
    }

    return [
      { key: 'login', label: t('nav.login'), to: localePath('/login') },
      { key: 'signup', label: t('nav.signup'), to: localePath('/register') },
    ]
  })

  return { authActions, onLogout }
}
