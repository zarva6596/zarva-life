<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  placeholder?: string
  rows?: number
  invalid?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [string]
}>()
</script>

<template>
  <textarea
    :value="props.modelValue"
    :placeholder="props.placeholder"
    :rows="props.rows ?? 4"
    class="w-full resize-none rounded-lg border px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent"
    :class="props.invalid ? 'border-red-300' : 'border-border'"
    @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>
