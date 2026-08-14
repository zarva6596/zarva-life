export default defineNuxtRouteMiddleware(() => {
  const authStore = useAuthStore()
  const localePath = useLocalePath()

  if (!authStore.isAuthenticated) {
    return navigateTo(localePath('/login'))
  }

  if (!authStore.isAdmin) {
    return navigateTo(localePath('/'))
  }
})
