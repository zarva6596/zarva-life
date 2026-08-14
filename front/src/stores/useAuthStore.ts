import type { AuthUser, LoginPayload, RegisterPayload } from '~/types/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<AuthUser | null>(null)
  const hydrated = ref(false)

  const isAuthenticated = computed(() => user.value !== null)
  const isAdmin = computed(() => user.value?.role === 'ADMIN')

  const fetchMe = async () => {
    try {
      user.value = await useApi<AuthUser>('/auth/me')
    }
    catch {
      user.value = null
    }
    finally {
      hydrated.value = true
    }
  }

  const login = async (payload: LoginPayload) => {
    user.value = await useApi<AuthUser>('/auth/login', { method: 'POST', body: payload })
  }

  const register = async (payload: RegisterPayload) => {
    user.value = await useApi<AuthUser>('/auth/register', { method: 'POST', body: payload })
  }

  const logout = async () => {
    await useApi('/auth/logout', { method: 'POST' })
    user.value = null
  }

  return {
    user,
    hydrated,
    isAuthenticated,
    isAdmin,
    fetchMe,
    login,
    register,
    logout,
  }
})
