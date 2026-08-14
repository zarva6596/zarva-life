<script setup lang="ts">
import type { NotifyPayload } from '~/stores/useNotificationsStore'

const { t } = useI18n()
const localePath = useLocalePath()
const { origin } = useRequestURL()
const notificationsStore = useNotificationsStore()

const demoNotifications: { label: string, payload: NotifyPayload }[] = [
  { label: 'Success · default title', payload: { type: 'success', description: 'Changes saved.' } },
  { label: 'Info · default title', payload: { type: 'info', description: 'A new version is available.' } },
  { label: 'Error · default title', payload: { type: 'error', description: 'Something went wrong.' } },
  { label: 'Warning · default title', payload: { type: 'warning', description: 'Your session is about to expire.' } },
  { label: 'Success · custom title', payload: { type: 'success', title: 'Payment received' } },
  { label: 'Info · custom title', payload: { type: 'info', title: 'Heads up' } },
  { label: 'Error · custom title', payload: { type: 'error', title: 'Upload failed' } },
  { label: 'Warning · custom title', payload: { type: 'warning', title: 'Low disk space' } },
  { label: 'Success · long description', payload: { type: 'success', title: 'Deployed', description: 'Your changes were built, tested, and deployed to production without any errors.' } },
  { label: 'Info · long description', payload: { type: 'info', title: 'Maintenance', description: 'Scheduled maintenance will begin tonight at 2 AM and may cause brief downtime.' } },
  { label: 'Error · long description', payload: { type: 'error', title: 'Sync failed', description: 'We could not sync your latest changes because the connection was interrupted.' } },
  { label: 'Warning · long description', payload: { type: 'warning', title: 'Unsaved changes', description: 'You have unsaved changes that will be lost if you navigate away from this page.' } },
  { label: 'Success · persists', payload: { type: 'success', title: 'Pinned', description: 'This one stays until closed.', duration: 0 } },
  { label: 'Error · persists', payload: { type: 'error', title: 'Critical error', description: 'This one stays until closed.', duration: 0 } },
  { label: 'Success · quick (1.5s)', payload: { type: 'success', title: 'Copied', duration: 1500 } },
  { label: 'Info · quick (1.5s)', payload: { type: 'info', title: 'Refreshed', duration: 1500 } },
  { label: 'Warning · slow (10s)', payload: { type: 'warning', title: 'Reminder', description: 'This stays visible longer.', duration: 10000 } },
  { label: 'Error · slow (10s)', payload: { type: 'error', title: 'Connection lost', description: 'This stays visible longer.', duration: 10000 } },
  { label: 'Success · title only', payload: { type: 'success' } },
  { label: 'Info · title + description', payload: { type: 'info', title: 'Update ready', description: 'Restart to apply the update.', duration: 3000 } },
]

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

      <div class="grid grid-cols-2 gap-2 pt-4 sm:grid-cols-4">
        <button
          v-for="(demo, index) in demoNotifications"
          :key="index"
          class="cursor-pointer rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
          @click="notificationsStore.notify(demo.payload)"
        >
          {{ demo.label }}
        </button>
      </div>
    </div>
  </div>
</template>
