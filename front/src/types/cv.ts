export interface CvTechItem {
  icon?: string
  name: string
  stars?: number
  labelHidden?: boolean
}

export interface CvTechCategory {
  key: string
  label: string
  items: CvTechItem[]
}

export interface CvProject {
  name: string | null
  description: string
  role: string
  achievements: string[]
  tech: string[]
  link?: string
  teamSize?: number
}

export interface CvExperience {
  company: string
  url?: string
  location: string
  remote: 'remote' | 'office' | 'hybrid'
  type: 'full-time' | 'part-time' | 'contract' | 'freelance'
  startDate: string
  endDate?: string
  role: string
  description: string
  achievements: string[]
  projects: CvProject[]
}
