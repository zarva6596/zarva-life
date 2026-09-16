<script setup lang="ts">
defineProps<{
  open: boolean
  title: string
  subtitle?: string
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div
          class="absolute inset-0 bg-accent/20 backdrop-blur-md"
          @click="emit('close')"
        />

        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="open"
            class="relative z-10 w-full max-w-md rounded-2xl bg-surface p-6 shadow-xl"
          >
            <div class="mb-5 flex items-start justify-between gap-4">
              <div>
                <h2 class="text-lg font-semibold text-ink">{{ title }}</h2>

                <p
                  v-if="subtitle"
                  class="mt-1 text-sm text-ink-muted"
                >{{ subtitle }}</p>
              </div>

              <button
                class="cursor-pointer shrink-0 rounded-full size-7 flex items-center justify-center
                  text-ink-faint transition-colors hover:bg-surface-tertiary hover:text-ink-secondary"
                @click="emit('close')"
              >
                <Icon
                  name="lucide:x"
                  class="size-5"
                />
              </button>
            </div>

            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
