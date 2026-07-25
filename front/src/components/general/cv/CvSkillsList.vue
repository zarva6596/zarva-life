<script setup lang="ts">
import type { CvTechItem, CvTechCategory } from '~/types/cv'

defineProps<{
  primaryTech: CvTechItem[]
  categories: CvTechCategory[]
}>()

const { t } = useI18n()
const showAll = ref(false)
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <div class="flex flex-wrap justify-center gap-3">
      <TechBadge
        v-for="tech in primaryTech"
        :key="tech.name"
        :icon="tech.icon"
        :name="tech.name"
      />
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="showAll" class="flex w-full flex-col items-center gap-6">
        <button
          class="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-gray-700"
          @click="showAll = false"
        >
          <Icon name="lucide:chevron-up" class="size-4" />

          <span>{{ t('pages.cv.techStack.showLess') }}</span>
        </button>

        <div class="w-full space-y-6">
          <div
            v-for="category in categories"
            :key="category.key"
            class="flex flex-col items-center gap-3"
          >
            <span class="text-xs font-semibold uppercase tracking-widest text-gray-400">
              {{ category.label }}
            </span>

            <div class="flex flex-wrap justify-center gap-2">
              <TechBadge
                v-for="tech in category.items"
                :key="tech.name"
                :icon="tech.icon"
                :name="tech.name"
                :stars="tech.stars"
                :label-hidden="tech.labelHidden"
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <button
      class="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-gray-700"
      @click="showAll = !showAll"
    >
      <span>{{ showAll ? t('pages.cv.techStack.showLess') : t('pages.cv.techStack.showMore') }}</span>

      <Icon
        name="lucide:chevron-down"
        class="size-4 transition-transform duration-300"
        :class="{ 'rotate-180': showAll }"
      />
    </button>
  </div>
</template>
