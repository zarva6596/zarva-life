<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  type?: string
  placeholder?: string
  invalid?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [string]
}>()
</script>

<template>
  <input
    :value="props.modelValue"
    :type="props.type ?? 'text'"
    :placeholder="props.placeholder"
    class="w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#6a9140]"
    :class="props.invalid ? 'border-red-300' : 'border-gray-200'"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>
