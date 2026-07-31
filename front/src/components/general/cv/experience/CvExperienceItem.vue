<script setup lang="ts">
import type { CvExperience } from '~/types/cv'

const props = defineProps<{
  experience: CvExperience
  open: boolean
}>()

const emit = defineEmits<{
  toggle: []
}>()
</script>

<template>
  <div class="flex flex-col">
    <button
      class="flex w-full cursor-pointer items-start justify-between gap-4 py-1 text-left"
      @click="emit('toggle')"
    >
      <div class="flex flex-col gap-0.5">
        <div class="flex items-center gap-1.5">
          <span class="font-semibold text-gray-900">{{ props.experience.company }}</span>

          <a
            v-if="props.experience.url"
            :href="props.experience.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-gray-700"
            @click.stop
          >
            <Icon name="lucide:external-link" class="size-3.5" />
          </a>
        </div>

        <span class="text-sm text-gray-500">{{ props.experience.role }}</span>
      </div>

      <div class="flex shrink-0 items-center gap-8">
        <div class="flex flex-col items-end gap-0.5 text-xs text-gray-400">
          <ExperienceLabel :start-date="props.experience.startDate" :end-date="props.experience.endDate" />

          <div class="flex items-center gap-2">
            <span>{{ props.experience.location }}</span>

            <span>·</span>

            <span>{{ props.experience.remote }}</span>

            <span>·</span>

            <span>{{ props.experience.type }}</span>
          </div>
        </div>

        <Icon
          name="lucide:chevron-down"
          class="size-5 shrink-0 text-gray-400 transition-transform duration-300"
          :class="props.open ? 'rotate-180' : ''"
        />
      </div>
    </button>

    <div
      class="grid transition-all duration-300"
      :class="props.open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
    >
      <div class="overflow-hidden">
        <div class="flex flex-col gap-4 py-4">
          <p class="text-sm leading-relaxed text-gray-500">{{ props.experience.description }}</p>

          <ul v-if="props.experience.achievements.length" class="space-y-1">
            <li
              v-for="(achievement, index) in props.experience.achievements"
              :key="index"
              class="flex gap-2 text-sm text-gray-500"
            >
              <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-gray-400" />
              {{ achievement }}
            </li>
          </ul>

          <div v-if="props.experience.projects.length" class="flex flex-col gap-3">
            <CvProjectItem
              v-for="(project, index) in props.experience.projects"
              :key="index"
              :project="project"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
