<script setup lang="ts">
const isOpen = defineModel<boolean>({ default: false })

const { navItems, hobbiesItems } = useNavItems()
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div
      v-if="isOpen"
      class="fixed inset-x-0 top-16 z-40 flex flex-col overflow-y-auto bg-white"
      style="height: calc(100dvh - 4rem); padding-bottom: env(safe-area-inset-bottom)"
    >
      <template v-for="item in navItems" :key="item.id">
        <NuxtLink
          v-if="item.to"
          :to="item.to"
          class="border-b border-gray-100 px-6 py-4 text-base font-medium uppercase tracking-wide transition-colors duration-200 hover:bg-gray-50"
          active-class="text-black"
          inactive-class="text-black"
          @click="isOpen = false"
        >
          {{ item.label }}
        </NuxtLink>

        <template v-else>
          <div class="border-b border-gray-100 px-6 py-4 text-base font-medium uppercase tracking-wide text-gray-400">
            {{ item.label }}
          </div>

          <NuxtLink
            v-for="sub in hobbiesItems"
            :key="sub.key"
            :to="sub.to"
            class="border-b border-gray-100 py-4 pl-10 pr-6 text-base font-medium uppercase tracking-wide transition-colors duration-200 hover:bg-gray-50"
            active-class="text-black"
            inactive-class="text-black"
            @click="isOpen = false"
          >
            {{ sub.label }}
          </NuxtLink>
        </template>
      </template>
    </div>
  </Transition>
</template>
