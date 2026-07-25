<script setup lang="ts">
const { t } = useI18n()

const cvStore = useCvStore()

const about = computed(() => [t('pages.cv.about1'), t('pages.cv.about2')])

const categories = computed(() => cvStore.softwareTechCategories(t))
</script>

<template>
  <div class="flex flex-col items-center gap-8 px-6 py-4">
    <CvAbout :paragraphs="about" />

    <CvDownload href="/Roman Zarvanskyi CV.pdf" />

    <CvSkillsList :primary-tech="cvStore.softwarePrimaryTech" :categories="categories" />

    <CvExperienceSection :experience="cvStore.softwareExperience" />
  </div>
</template>
