<script setup lang="ts">
defineProps<{
  paragraphs: string[]
}>()

const { t } = useI18n()

const showMore = ref(false)
const contentRef = ref<HTMLElement | null>(null)
const isClamped = ref(false)

onMounted(() => {
  if (contentRef.value) {
    isClamped.value = contentRef.value.scrollHeight > contentRef.value.clientHeight
  }
})
</script>

<template>
  <div class="w-full max-w-5xl">
    <div class="md:hidden">
      <div
        ref="contentRef"
        class="text-base leading-relaxed text-gray-500"
        :class="showMore ? '' : 'line-clamp-3'"
      >
        <p
          v-for="(paragraph, index) in paragraphs"
          :key="index"
          class="indent-8 text-justify"
          :class="index > 0 ? 'mt-4' : ''"
        >
          {{ paragraph }}
        </p>
      </div>

      <button
        v-if="isClamped || showMore"
        class="mt-2 text-sm text-gray-400 hover:text-gray-600"
        @click="showMore = !showMore"
      >
        {{ showMore ? t('pages.cv.about.showLess') : t('pages.cv.about.showMore') }}
      </button>
    </div>

    <div class="hidden md:flex md:flex-col md:gap-4">
      <p
        v-for="(paragraph, index) in paragraphs"
        :key="index"
        class="indent-8 text-justify text-base leading-relaxed text-gray-500"
      >
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>
