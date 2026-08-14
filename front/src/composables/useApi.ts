type ApiOptions = Parameters<typeof $fetch>[1]

export const useApi = <T>(request: string, opts: ApiOptions = {}) => {
  const config = useRuntimeConfig()
  const headers = import.meta.server ? useRequestHeaders(['cookie']) : undefined

  return $fetch<T>(request, {
    ...opts,
    baseURL: config.public.apiBase,
    credentials: 'include',
    headers,
  })
}
