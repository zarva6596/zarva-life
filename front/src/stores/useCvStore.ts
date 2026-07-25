import type { CvTechItem, CvTechCategory, CvExperience, CvProject } from '~/types/cv'

export const useCvStore = defineStore('cv', () => {
  const { t, tm } = useI18n()
  const softwarePrimaryTech: CvTechItem[] = [
    { icon: 'devicon:vuejs', name: 'Vue.js' },
    { icon: 'devicon:nuxtjs', name: 'Nuxt' },
    { icon: 'devicon:typescript', name: 'TypeScript' },
    { icon: 'devicon:tailwindcss', name: 'Tailwind CSS' },
    { icon: 'devicon:react', name: 'React' },
    { icon: 'devicon:nextjs', name: 'Next.js' },
  ]

  const softwareTechCategories = (t: (key: string) => string): CvTechCategory[] => [
    {
      key: 'fundamentals',
      label: t('pages.cv.techStack.categories.fundamentals'),
      items: [
        { icon: 'devicon:javascript', name: 'JavaScript', stars: 5 },
        { icon: 'devicon:html5', name: 'HTML5', stars: 5 },
        { icon: 'devicon:css3', name: 'CSS3', stars: 5 },
      ],
    },
    {
      key: 'ui',
      label: t('pages.cv.techStack.categories.ui'),
      items: [
        { icon: 'devicon:vuetify', name: 'Vuetify', stars: 4 },
        { icon: 'simple-icons:primevue', name: 'PrimeVue', stars: 5 },
        { icon: 'devicon:quasar', name: 'Quasar', stars: 2 },
        { icon: 'ep:element-plus', name: 'Element Plus', stars: 5 },
      ],
    },
    {
      key: 'css',
      label: t('pages.cv.techStack.categories.css'),
      items: [
        { icon: 'devicon:sass', name: 'SASS/SCSS', stars: 5 },
        { icon: 'devicon:bootstrap', name: 'Bootstrap', stars: 5 },
        { icon: 'devicon:postcss', name: 'PostCSS', stars: 5 },
      ],
    },
    {
      key: 'state',
      label: t('pages.cv.techStack.categories.state'),
      items: [
        { icon: 'logos:pinia', name: 'Pinia', stars: 5 },
        { name: 'Vuex', stars: 5 },
        { icon: 'devicon:redux', name: 'Redux', stars: 4 },
        { icon: 'devicon:zustand', name: 'Zustand', stars: 4 },
      ],
    },
    {
      key: 'build',
      label: t('pages.cv.techStack.categories.build'),
      items: [
        { icon: 'devicon:vitejs', name: 'Vite', stars: 5 },
        { icon: 'devicon:webpack', name: 'Webpack', stars: 5 },
        { icon: 'logos:rollupjs', name: 'Rollup', stars: 3 },
        { icon: 'logos:turbopack', name: 'Turbopack', stars: 3, labelHidden: true },
        { icon: 'logos:esbuild', name: 'ESBuild', stars: 3 },
      ],
    },
    {
      key: 'testing',
      label: t('pages.cv.techStack.categories.testing'),
      items: [
        { icon: 'logos:vitest', name: 'Vitest', stars: 3 },
        { icon: 'logos:jest', name: 'Jest', stars: 3 },
        { icon: 'logos:cypress-icon', name: 'Cypress', stars: 3 },
        { icon: 'devicon:storybook', name: 'Storybook', stars: 4 },
      ],
    },
    {
      key: 'vcs',
      label: t('pages.cv.techStack.categories.vcs'),
      items: [
        { icon: 'devicon:git', name: 'Git', stars: 4 },
        { icon: 'simple-icons:githubactions', name: 'GitHub Actions', stars: 4 },
        { icon: 'devicon:gitlab', name: 'GitLab CI', stars: 4 },
        { icon: 'devicon:docker', name: 'Docker', stars: 3 },
      ],
    },
    {
      key: 'backend',
      label: t('pages.cv.techStack.categories.backend'),
      items: [
        { icon: 'devicon:nodejs', name: 'Node.js', stars: 3 },
        { icon: 'devicon:nestjs', name: 'NestJS', stars: 4 },
        { icon: 'devicon:express', name: 'Express', stars: 3 },
        { icon: 'logos:bun', name: 'Bun', stars: 2 },
        { icon: 'logos:graphql', name: 'GraphQL', stars: 3 },
      ],
    },
    {
      key: 'databases',
      label: t('pages.cv.techStack.categories.databases'),
      items: [
        { icon: 'devicon:postgresql', name: 'PostgreSQL', stars: 4 },
        { icon: 'devicon:mysql', name: 'MySQL', stars: 3 },
        { icon: 'devicon:mongodb', name: 'MongoDB', stars: 4 },
        { icon: 'devicon:supabase', name: 'Supabase', stars: 4 },
        { icon: 'devicon:firebase', name: 'Firebase', stars: 4 },
      ],
    },
    {
      key: 'cms',
      label: t('pages.cv.techStack.categories.cms'),
      items: [
        { icon: 'logos:storyblok', name: 'Storyblok', stars: 5, labelHidden: true },
        { icon: 'simple-icons:directus', name: 'Directus', stars: 5 },
        { icon: 'devicon:wordpress', name: 'WordPress', stars: 4 },
        { icon: 'logos:prismic', name: 'Prismic', stars: 5, labelHidden: true },
      ],
    },
    {
      key: 'mobile',
      label: t('pages.cv.techStack.categories.mobile'),
      items: [
        { icon: 'devicon:react', name: 'React Native', stars: 2 },
        { icon: 'ion:logo-capacitor', name: 'Capacitor', stars: 3 },
      ],
    },
    {
      key: 'devtools',
      label: t('pages.cv.techStack.categories.devtools'),
      items: [
        { icon: 'devicon:figma', name: 'Figma', stars: 4 },
        { icon: 'dashicons:rest-api', name: 'REST API', stars: 5 },
        { icon: 'logos:websocket', name: 'WebSockets', stars: 4 },
        { icon: 'devicon:electron', name: 'Electron', stars: 3 },
        { icon: 'ion:logo-pwa', name: 'PWA', stars: 3, labelHidden: true },
      ],
    },
  ]

  const upworkProjectsBase: Pick<CvProject, 'name' | 'tech' | 'link'>[] = [
    { name: 'Bonny Moon Beach Club', tech: ['Nuxt', 'Directus', 'TypeScript', 'TailwindCSS'], link: 'https://www.bonnymoon.ky/' },
    { name: 'Big Leap Health', tech: ['Nuxt', 'Prismic', 'TypeScript', 'TailwindCSS'], link: 'https://www.bigleaphealth.com/' },
    { name: 'Room Service by Ash', tech: ['Nuxt', 'Storyblok', 'TypeScript', 'TailwindCSS'], link: 'https://www.orderroomservice.com/' },
    { name: 'Ash Hotels', tech: ['Nuxt', 'Storyblok', 'TypeScript', 'TailwindCSS'], link: 'https://ash.world/' },
    { name: 'Chase a Chance', tech: ['Nuxt 4', 'TypeScript', 'TailwindCSS', 'Pinia'], link: 'https://chaseachance.com/' },
    { name: 'DemToes', tech: ['Nuxt', 'TypeScript', 'TailwindCSS', 'Pinia', 'REST API'], link: 'https://demtoes.com/' },
    { name: 'Car City', tech: ['Vue 3', 'TailwindCSS', 'Laravel'], link: 'https://carcity.ky/' },
    { name: 'Property Cayman', tech: ['WordPress'], link: 'https://propertycayman.com/' },
  ]

  const hoverlaProjectsBase: Pick<CvProject, 'name' | 'tech'>[] = [
    { name: 'Relocation & Immigration SaaS', tech: ['Nuxt 3', 'TypeScript', 'TailwindCSS', 'Pinia', 'Element Plus'] },
    { name: null, tech: ['Nuxt 2', 'Vue 3', 'Capacitor'] },
    { name: null, tech: ['Vue 3', 'Nuxt 3', 'TypeScript', 'TailwindCSS'] },
  ]

  const resolveAchievements = (key: string): string[] => {
    const raw = tm(key)
    if (!Array.isArray(raw)) return []
    return raw.map((_, j) => t(`${key}.${j}`))
  }

  const resolveProject = (prefix: string, base: Pick<CvProject, 'name' | 'tech' | 'link' | 'github'> | Pick<CvProject, 'name' | 'tech'>): CvProject => ({
    ...base,
    description: t(`${prefix}.description`),
    role: t(`${prefix}.role`),
    achievements: resolveAchievements(`${prefix}.achievements`),
  })

  const softwareExperience = computed<CvExperience[]>(() => [
    {
      company: 'Upwork',
      location: 'Ukraine',
      remote: 'remote',
      type: 'freelance',
      startDate: '2024-11-01',
      role: t('pages.cv.experience.software.upwork.role'),
      description: t('pages.cv.experience.software.upwork.description'),
      achievements: [],
      projects: upworkProjectsBase.map((base, i) =>
        resolveProject(`pages.cv.experience.software.upwork.projects.${i}`, base),
      ),
    },
    {
      company: 'Hoverla Soft',
      location: 'Ukraine',
      remote: 'remote',
      type: 'full-time',
      startDate: '2021-09-01',
      endDate: '2024-11-01',
      role: t('pages.cv.experience.software.hoverla.role'),
      description: t('pages.cv.experience.software.hoverla.description'),
      achievements: resolveAchievements('pages.cv.experience.software.hoverla.achievements'),
      projects: hoverlaProjectsBase.map((base, i) =>
        resolveProject(`pages.cv.experience.software.hoverla.projects.${i}`, base),
      ),
    },
    {
      company: 'Webtune',
      location: 'Ukraine',
      remote: 'office',
      type: 'full-time',
      startDate: '2020-10-01',
      endDate: '2021-08-01',
      role: t('pages.cv.experience.software.webtune.role'),
      description: t('pages.cv.experience.software.webtune.description'),
      achievements: resolveAchievements('pages.cv.experience.software.webtune.achievements'),
      projects: [],
    },
  ])

  return {
    softwarePrimaryTech,
    softwareTechCategories,
    softwareExperience,
  }
})
