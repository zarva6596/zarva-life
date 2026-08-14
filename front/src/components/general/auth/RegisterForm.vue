<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const { t } = useI18n()
const localePath = useLocalePath()
const authStore = useAuthStore()
const notificationsStore = useNotificationsStore()

const schema = computed(() =>
  toTypedSchema(
    z.object({
      name: z.string().optional(),
      email: z
        .string()
        .min(1, t('pages.auth.register.validation.emailRequired'))
        .email(t('pages.auth.register.validation.emailInvalid')),
      password: z
        .string()
        .min(1, t('pages.auth.register.validation.passwordRequired'))
        .min(8, t('pages.auth.register.validation.passwordMin')),
    }),
  ),
)

const { handleSubmit, meta } = useForm({
  validationSchema: schema,
})

const status = ref<'idle' | 'sending' | 'error'>('idle')
const errorMessage = ref('')

const isReady = computed(() => meta.value.valid && status.value !== 'sending')

const { value: name } = useField<string>('name')
const { value: email, errorMessage: emailError } = useField<string>('email')
const { value: password, errorMessage: passwordError } = useField<string>('password')

const onSubmit = handleSubmit(async (values) => {
  status.value = 'sending'
  try {
    await authStore.register(values)
    notificationsStore.notify({ type: 'success', description: t('pages.auth.register.successMessage') })
    await navigateTo(localePath('/admin'))
  }
  catch (error) {
    status.value = 'error'
    errorMessage.value = (error as { data?: { message?: string } })?.data?.message ?? t('pages.auth.register.title')
  }
})
</script>

<template>
  <form
    class="flex flex-col gap-4"
    @submit.prevent="onSubmit"
  >
    <FormField>
      <FormInput
        v-model="name"
        :placeholder="t('pages.auth.register.name')"
      />
    </FormField>

    <FormField :error="emailError">
      <FormInput
        v-model="email"
        type="email"
        :placeholder="t('pages.auth.register.email')"
        :invalid="!!emailError"
      />
    </FormField>

    <FormField :error="passwordError">
      <FormInput
        v-model="password"
        type="password"
        :placeholder="t('pages.auth.register.password')"
        :invalid="!!passwordError"
      />
    </FormField>

    <p
      v-if="status === 'error'"
      class="text-sm text-red-500"
    >
      {{ errorMessage }}
    </p>

    <button
      type="submit"
      :disabled="!isReady"
      class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all duration-300"
      :class="isReady
        ? 'animate-pulse-glow cursor-pointer bg-[#6a9140] hover:bg-[#5a7a36]'
        : 'cursor-not-allowed bg-gray-300 text-gray-500'"
    >
      {{ status === 'sending' ? t('pages.auth.register.submitting') : t('pages.auth.register.submit') }}
    </button>

    <p class="text-center text-sm text-gray-500">
      {{ t('pages.auth.register.hasAccount') }}

      <NuxtLink
        :to="localePath('/login')"
        class="font-medium text-[#6a9140] hover:underline"
      >
        {{ t('pages.auth.register.loginLink') }}
      </NuxtLink>
    </p>
  </form>
</template>
