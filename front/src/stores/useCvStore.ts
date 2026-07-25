import type { CvTechItem, CvTechCategory, CvExperience } from '~/types/cv'

export const useCvStore = defineStore('cv', () => {
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

  const softwareExperience: CvExperience[] = [
    {
      company: 'Upwork',
      location: 'Ukraine',
      remote: 'remote',
      type: 'freelance',
      startDate: '2024-11-01',
      role: 'Senior Front-end Developer',
      description:
        'Freelance Senior Front-end Developer working with international clients on diverse web projects — from premium hospitality websites to content marketplaces and trading platforms.',
      achievements: [],
      projects: [
        {
          name: 'Bonny Moon Beach Club',
          description:
            'A website for a premium beachside venue in the Cayman Islands. Showcases dining experience, events (DJ nights, live music, private gatherings), amenity packages, and booking functionality for an international audience.',
          role: 'Senior Front-end Developer',
          achievements: [
            'Built a sophisticated event scheduling system with rich media content',
            'Integrated newsletter subscription functionality',
          ],
          tech: ['Nuxt', 'Directus', 'TypeScript', 'TailwindCSS'],
          link: 'https://www.bonnymoon.ky/',
        },
        {
          name: 'Big Leap Health',
          description:
            'A platform for locating nearby mental health clinics across the US, specializing in insurance-covered breakthrough treatments such as TMS therapy and Spravato (esketamine).',
          role: 'Senior Front-end Developer',
          achievements: [
            'Implemented advanced search and filtering by condition, insurance provider, and location',
            'Built clinic profiles with virtual tours and patient testimonials',
            'Developed an online symptom assessment flow',
          ],
          tech: ['Nuxt', 'Prismic', 'TypeScript', 'TailwindCSS'],
          link: 'https://www.bigleaphealth.com/',
        },
        {
          name: 'Room Service by Ash',
          description:
            'A website for a premium full-suite FF&E (furnishing, decoration, and procurement) firm serving hospitality, commercial, and residential clients across the US.',
          role: 'Senior Front-end Developer',
          achievements: [
            'Showcased completed projects and outlined the 9-step service process',
            'Integrated contact and newsletter functionality',
          ],
          tech: ['Nuxt', 'Storyblok', 'TypeScript', 'TailwindCSS'],
          link: 'https://www.orderroomservice.com/',
        },
        {
          name: 'Ash Hotels',
          description:
            'A website for a collection of cinematic boutique luxury hotels across the United States (Providence, Baltimore, New Orleans, Detroit, Richmond).',
          role: 'Senior Front-end Developer',
          achievements: [
            'Built hotel listings with city guides, souvenir shop, and gift cards',
            'Integrated newsletter subscription',
          ],
          tech: ['Nuxt', 'Storyblok', 'TypeScript', 'TailwindCSS'],
          link: 'https://ash.world/',
        },
        {
          name: 'Chase a Chance',
          description:
            'A platform for collecting and trading baseball, Pokémon, and hockey cards, serving a global audience for a Canadian client.',
          role: 'Senior Front-end Developer',
          achievements: [
            'Implemented pixel-perfect UI based on Figma designs',
            'Integrated payment and notification systems',
            'Built form validation and custom animations',
          ],
          tech: ['Nuxt 4', 'TypeScript', 'TailwindCSS', 'Pinia'],
          link: 'https://chaseachance.com/',
        },
        {
          name: 'DemToes',
          description:
            'A content marketplace platform connecting verified creators with buyers.',
          role: 'Senior Front-end Developer',
          achievements: [
            'Implemented dual-role authentication (viewer/creator)',
            'Built credit-based payment system with content unlocking and tipping',
            'Developed custom content request flow and creator verification',
          ],
          tech: ['Nuxt', 'TypeScript', 'TailwindCSS', 'Pinia', 'REST API'],
          link: 'https://demtoes.com/',
        },
      ],
    },
    {
      company: 'Hoverla Soft',
      location: 'Ukraine',
      remote: 'remote',
      type: 'full-time',
      startDate: '2021-09-01',
      endDate: '2024-11-01',
      role: 'Vue.js Front-end Developer',
      description:
        'Front-end developer at a product-focused software company. Worked on large-scale SaaS platforms serving international clients in the relocation, immigration, and hospitality industries.',
      achievements: [
        'Developed and tested new features across multiple products',
        'Set up SEO optimization — meta tags, Open Graph, structured data',
        'Integrated third-party APIs and services',
        'Participated in user story estimation, customer meetings, and sprint demos',
        'Collaborated closely with designers and backend developers',
        'Refactored and improved existing codebases',
        'Wrote reusable components and maintained UI consistency',
      ],
      projects: [
        {
          name: 'Relocation & Immigration SaaS',
          description:
            'A large-scale product consisting of two interconnected SaaS platforms for relocation and immigration service providers. The company portal featured full white-label customization, invoice management, messaging, task tracking, document exchange, and meeting scheduling. The client portal enabled users to pay invoices, upload documents, book meetings, and receive notifications.',
          role: 'Vue.js Front-end Developer',
          achievements: [
            'Built full white-label customization system (logos, interface visuals)',
            'Implemented invoice management and document exchange flows',
            'Developed messaging, task tracking, and meeting scheduling modules',
          ],
          tech: ['Nuxt 3', 'TypeScript', 'TailwindCSS', 'Pinia', 'Element Plus'],
        },
        {
          name: null,
          description:
            'A multi-platform product consisting of three interconnected applications: a marketing landing with animations and SEO, a mobile app for restaurants and hotels (QR code ordering, menu browsing, reservations, payments), and an admin panel for managing products, QR codes, and platform settings.',
          role: 'Vue.js Front-end Developer',
          achievements: [
            'Built a QR-code driven ordering and payment flow for mobile',
            'Developed a full-featured admin panel for business management',
            'Implemented engaging animations and SEO optimization on the landing',
          ],
          tech: ['Nuxt 2', 'Vue 3', 'Capacitor'],
        },
        {
          name: null,
          description:
            'Worked on 10+ short-term projects involving landing pages, admin dashboards, e-commerce features, CMS integrations, and responsive layouts.',
          role: 'Vue.js Front-end Developer',
          achievements: [
            'Built projects from scratch under tight deadlines',
            'Implemented UI components, performance improvements, and bug fixes',
          ],
          tech: ['Vue 3', 'Nuxt 3', 'TypeScript', 'TailwindCSS'],
        },
      ],
    },
    {
      company: 'Webtune',
      location: 'Ukraine',
      remote: 'office',
      type: 'full-time',
      startDate: '2020-10-01',
      endDate: '2021-08-01',
      role: 'Front-end Developer',
      description:
        'Front-end developer at a web studio. Responsible for creating responsive, pixel-perfect layouts based on Figma designs for marketing websites and landing pages, later integrated into WordPress by other developers.',
      achievements: [
        'Developed layouts for 6 client projects: Plit, Webtune, Indest, Ular, Optic, LivingRoom',
        'Maintained and updated legacy projects',
        'Implemented interactive elements such as maps and email templates',
      ],
      projects: [],
    },
  ]

  return {
    softwarePrimaryTech,
    softwareTechCategories,
    softwareExperience,
  }
})
