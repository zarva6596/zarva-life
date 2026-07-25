export type CvRole = 'software' | 'hardware'

export const useCvRole = () => useState<CvRole>('cv-role', () => 'software')
