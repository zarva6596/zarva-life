<script setup lang="ts">
import type { CvExperience } from '~/types/cv'

defineProps<{
  experience: CvExperience
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <div class="flex flex-wrap items-start justify-between gap-2">
        <div class="flex flex-col gap-0.5">
          <a
            v-if="experience.url"
            :href="experience.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1.5 font-semibold text-gray-900 hover:underline"
          >
            {{ experience.company }}
            <Icon name="lucide:external-link" class="size-3.5 text-gray-400" />
          </a>

          <span v-else class="font-semibold text-gray-900">{{ experience.company }}</span>

          <span class="text-sm text-gray-500">{{ experience.role }}</span>
        </div>

        <div class="flex flex-col items-end gap-0.5 text-xs text-gray-400">
          <ExperienceLabel :start-date="experience.startDate" :end-date="experience.endDate" />

          <div class="flex items-center gap-2">
            <span>{{ experience.location }}</span>
            <span>·</span>
            <span>{{ experience.remote }}</span>
            <span>·</span>
            <span>{{ experience.type }}</span>
          </div>
        </div>
      </div>
    </div>

    <p class="text-sm leading-relaxed text-gray-500">{{ experience.description }}</p>

    <ul v-if="experience.achievements.length" class="space-y-1">
      <li
        v-for="(achievement, index) in experience.achievements"
        :key="index"
        class="flex gap-2 text-sm text-gray-500"
      >
        <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-gray-400" />
        {{ achievement }}
      </li>
    </ul>

    <div v-if="experience.projects.length" class="flex flex-col gap-3">
      <CvProjectItem
        v-for="(project, index) in experience.projects"
        :key="index"
        :project="project"
      />
    </div>
  </div>
</template>
