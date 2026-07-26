<script setup lang="ts">
const { t } = useI18n()

const cvStore = useCvStore()

const about = computed(() => [t('pages.cv.about1'), t('pages.cv.about2')])

const contactOpen = ref(false)

const categories = computed(() => cvStore.softwareTechCategories(t))
</script>

<template>
  <div class="flex flex-col items-center gap-8 px-6 py-4">
    <CvAbout :paragraphs="about" />

    <div class="flex flex-wrap items-center justify-center gap-3">
      <CvDownload href="/Roman Zarvanskyi CV.pdf" />

      <button
        class="animate-pulse-glow inline-flex items-center gap-2 rounded-full cursor-pointer
          border border-transparent bg-[#6a9140] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#5a7a36]"
        @click="contactOpen = true"
      >
        <Icon name="lucide:mail" class="size-4" />

        {{ t('pages.cv.contact.button') }}
      </button>
    </div>

    <AppDialog
      :open="contactOpen"
      :title="t('pages.cv.contact.title')"
      :subtitle="t('pages.cv.contact.subtitle')"
      @close="contactOpen = false"
    >
      <CvContactForm @success="contactOpen = false" />
    </AppDialog>

    <CvSkillsList :primary-tech="cvStore.softwarePrimaryTech" :categories="categories" />

    <CvExperienceSection :experience="cvStore.softwareExperience" />
  </div>
</template>
