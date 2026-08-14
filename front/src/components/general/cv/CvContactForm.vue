<script setup lang="ts">
import { useForm, useField } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const emit = defineEmits<{
  success: []
}>()

const { t } = useI18n()

const schema = computed(() =>
  toTypedSchema(
    z.object({
      name: z.string().min(1, t('pages.cv.contact.validation.nameRequired')),
      email: z
        .string()
        .min(1, t('pages.cv.contact.validation.emailRequired'))
        .email(t('pages.cv.contact.validation.emailInvalid')),
      message: z
        .string()
        .min(1, t('pages.cv.contact.validation.messageRequired'))
        .min(10, t('pages.cv.contact.validation.messageMin')),
    }),
  ),
)

const { handleSubmit, resetForm, meta } = useForm({
  validationSchema: schema,
})

const isReady = computed(() => meta.value.valid && status.value !== 'sending' && status.value !== 'success')

const { value: name, errorMessage: nameError } = useField<string>('name')
const { value: email, errorMessage: emailError } = useField<string>('email')
const { value: message, errorMessage: messageError } = useField<string>('message')

const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

const onSubmit = handleSubmit(async (values) => {
  status.value = 'sending'
  try {
    await $fetch('/api/contact', { method: 'POST', body: values })
    status.value = 'success'
    resetForm()
    setTimeout(() => emit('success'), 1500)
  }
  catch {
    status.value = 'error'
  }
})
</script>

<template>
  <form
    class="flex flex-col gap-4"
    @submit.prevent="onSubmit"
  >
    <FormField :error="nameError">
      <FormInput
        v-model="name"
        :placeholder="t('pages.cv.contact.name')"
        :invalid="!!nameError"
      />
    </FormField>

    <FormField :error="emailError">
      <FormInput
        v-model="email"
        type="email"
        :placeholder="t('pages.cv.contact.email')"
        :invalid="!!emailError"
      />
    </FormField>

    <FormField :error="messageError">
      <FormTextarea
        v-model="message"
        :placeholder="t('pages.cv.contact.message')"
        :invalid="!!messageError"
      />
    </FormField>

    <p
      v-if="status === 'success'"
      class="text-sm text-green-600"
    >
      {{ t('pages.cv.contact.success') }}
    </p>

    <p
      v-if="status === 'error'"
      class="text-sm text-red-500"
    >
      {{ t('pages.cv.contact.error') }}
    </p>

    <button
      type="submit"
      :disabled="!isReady"
      class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all duration-300"
      :class="isReady
        ? 'animate-pulse-glow cursor-pointer bg-[#6a9140] hover:bg-[#5a7a36]'
        : 'cursor-not-allowed bg-gray-300 text-gray-500'"
    >
      {{ status === 'sending' ? t('pages.cv.contact.sending') : t('pages.cv.contact.submit') }}
    </button>
  </form>
</template>
