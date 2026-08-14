export const useDashboardNavItems = () => {
  const { t } = useI18n()
  const localePath = useLocalePath()

  const navItems = computed(() => [
    { key: 'overview', to: localePath('/admin'), label: t('pages.admin.nav.overview') },
  ])

  return { navItems }
}
