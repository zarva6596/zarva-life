export default defineNuxtRouteMiddleware(async () => {
  const authStore = useAuthStore()

  if (!authStore.hydrated) {
    await authStore.fetchMe()
  }
})
