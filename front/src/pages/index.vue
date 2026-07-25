<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { origin } = useRequestURL()

useHead({
  titleTemplate: '%s',
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Roman Zarvanskyi',
        jobTitle: 'Senior Front-end Developer',
        url: origin,
        image: 'https://github.com/zarva6596.png',
        sameAs: ['https://github.com/zarva6596'],
        knowsAbout: [
          'Vue.js', 'Nuxt.js', 'React', 'Next.js',
          'TypeScript', 'JavaScript', 'Node.js', 'NestJS',
          'TailwindCSS', 'PostgreSQL',
        ],
      }),
    },
  ],
})

useSeoMeta({
  title: 'Roman Zarvanskyi — Front-end Developer',
  ogTitle: 'Roman Zarvanskyi — Front-end Developer',
  ogUrl: origin,
})

const paras = computed(() => [
  t('pages.home.para1'),
  t('pages.home.para2'),
  t('pages.home.para3'),
])
</script>

<template>
  <div class="flex min-h-[60vh] items-center justify-center px-6 py-16">
    <div class="flex max-w-xl flex-col gap-5">
      <h1 class="text-4xl font-bold text-gray-900">
        {{ t('pages.home.greeting') }}
      </h1>

      <p class="indent-8 text-justify text-base leading-relaxed text-gray-500">
        {{ t('pages.home.intro') }}
        <NuxtLink
          :to="localePath('/cv')"
          class="text-gray-700 underline underline-offset-2 hover:text-gray-900"
        >
          {{ t('pages.home.cvLink') }}
        </NuxtLink>.
      </p>

      <p
        v-for="(para, index) in paras"
        :key="index"
        class="indent-8 text-justify text-base leading-relaxed text-gray-500"
      >
        {{ para }}
      </p>

      <p class="indent-8 text-justify text-base leading-relaxed text-gray-400">
        {{ t('pages.home.outro') }}
      </p>
    </div>
  </div>
</template>
