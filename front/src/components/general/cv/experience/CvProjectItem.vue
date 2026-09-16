<script setup lang="ts">
import type { CvProject } from '~/types/cv'

defineProps<{
  project: CvProject
}>()

const { t } = useI18n()
</script>

<template>
  <div class="rounded-lg border border-border-subtle bg-surface-secondary p-4">
    <div class="mb-2 flex items-start justify-between gap-2">
      <div class="flex items-baseline gap-2">
        <span class="font-medium text-ink-secondary">
          {{ project.name ?? 'Under NDA' }}
        </span>

        <template v-if="project.link || project.github">
          <span class="text-xs text-ink-faintest">·</span>

          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs italic text-blue-500 underline"
          >
            {{ t('pages.cv.experience.visitSite') }}
          </a>

          <template v-if="project.link && project.github">
            <span class="text-xs text-ink-faintest">·</span>
          </template>

          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs italic text-blue-500 underline"
          >
            GitHub
          </a>
        </template>
      </div>

      <a
        v-if="project.link"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="shrink-0 text-ink-faint transition-colors hover:text-ink-secondary"
      >
        <Icon
          name="lucide:external-link"
          class="size-4"
        />
      </a>
    </div>

    <p class="mb-3 text-sm leading-relaxed text-ink-muted">
      {{ project.description }}
    </p>

    <div class="mb-3 text-sm text-ink-muted">
      <span class="font-medium text-ink-muted">Role:</span>
      {{ project.role }}
    </div>

    <ul
      v-if="project.achievements.length"
      class="mb-3 space-y-1"
    >
      <li
        v-for="(achievement, index) in project.achievements"
        :key="index"
        class="flex gap-2 text-sm text-ink-muted"
      >
        <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-surface-tertiary" />
        {{ achievement }}
      </li>
    </ul>

    <div
      v-if="project.photos?.length"
      class="mb-3 flex gap-2 overflow-x-auto pb-1"
    >
      <img
        v-for="(photo, index) in project.photos"
        :key="index"
        :src="photo"
        :alt="`${project.name ?? 'Project'} screenshot ${index + 1}`"
        class="h-32 w-auto shrink-0 rounded-md object-cover"
      >
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <div
        v-if="project.teamSize"
        class="flex items-center gap-1 text-xs text-ink-faint"
      >
        <Icon
          name="lucide:users"
          class="size-3.5"
        />
        {{ project.teamSize }}
      </div>

      <span
        v-for="tech in project.tech"
        :key="tech"
        class="rounded-full bg-surface-tertiary px-2 py-0.5 text-xs text-ink-muted"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>
