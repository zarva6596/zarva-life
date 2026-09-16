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
    class="w-full rounded-lg border px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
    :class="props.invalid ? 'border-red-300' : 'border-border'"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>
