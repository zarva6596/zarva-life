export const useNavItems = () => {
  const { t } = useI18n()
  const localePath = useLocalePath()

  const hobbiesItems = computed(() => [
    { key: 'moto', to: localePath('/moto'), label: t('nav.moto') },
    { key: 'embedded', to: localePath('/embedded'), label: t('nav.embedded') },
    { key: 'drones', to: localePath('/drones'), label: t('nav.drones') },
    { key: 'travel', to: localePath('/travel'), label: t('nav.travel') },
    { key: 'products', to: localePath('/products'), label: t('nav.products') },
  ])

  const navItems = computed(() => [
    { id: 'cv', label: t('nav.cv'), to: localePath('/work') },
    { id: 'hobbies', label: t('nav.hobbies'), items: hobbiesItems.value },
    { id: 'blog', label: t('nav.blog'), to: localePath('/blog') },
    { id: 'shop', label: t('nav.shop'), to: localePath('/shop') },
  ])

  return { navItems, hobbiesItems }
}
