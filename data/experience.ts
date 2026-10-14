export type ExperienceEntry = {
  id: string
  organization: string
  role: string
  period: string
  kind: 'Role' | 'Internship' | 'Coordination'
  status?: string
  description: string
  highlights: string[]
  note?: string
  initiative?: {
    title: string
    detail: string
    facts: { label: string; value: string }[]
  }
}

export const experience: ExperienceEntry[] = [
  {
    id: 'zaasio',
    organization: 'Zaasio Technology',
    role: 'Chief Operating Officer (COO)',
    period: 'May 2025 – Aug 2026',
    kind: 'Role',
    status: 'Former role',
    description:
      'Contributed to technology startup operations, coordination, educational initiatives, workshop planning, and collaboration between technical teams and educational institutions.',
    highlights: [
      'Startup operations',
      'Technical initiatives',
      'Team & stakeholder coordination',
      'Workshop planning',
      'Resource-person communication',
      'Educational technology programs',
      'Event logistics & participant coordination',
    ],
    initiative: {
      title: 'Power BI Workshop',
      detail:
        'An organizational initiative by Zaasio Technology in collaboration with Ilahia College of Engineering and Technology, focused on Power BI training.',
      facts: [
        { label: 'Focus', value: 'Power BI training' },
      ],
    },
  },
  {
    id: 'kaartech',
    organization: 'KaarTech Internship Program',
    role: 'College Captain / Student Coordinator',
    period: 'Ilahia College of Engineering and Technology',
    kind: 'Coordination',
    description:
      'Coordinated student communication and program-related administrative activities associated with the KaarTech Internship Program.',
    highlights: [
      'Student communication',
      'Consolidating participant information',
      'Sharing updates',
      'Coordinating documentation',
      'Communication with company representatives',
    ],
    note: 'A college coordination role — not employment with KaarTech.',
  },
  {
    id: 'atees',
    organization: 'ATEES Global',
    role: 'Intern — AI Development with Python',
    period: 'May 2023',
    kind: 'Internship',
    description:
      'Completed a remote internship focused on AI development using Python, developing and implementing AI models and gaining practical experience in machine learning and data analytics.',
    highlights: ['Python', 'AI model development', 'Machine learning', 'Data analytics'],
  },
]

export type LeadershipEntry = {
  title: string
  period?: string
  detail: string
}

export const leadership: LeadershipEntry[] = [
  { title: 'IEDC Core Team Member', period: '2023 – 2024', detail: 'Innovation and Entrepreneurship Development Cell, Ilahia College.' },
  { title: 'Young Innovators Programme (YIP)', period: '2023', detail: 'Selected for the Young Innovators Programme.' },
  { title: 'Technical Workshop Coordination', detail: 'Planning and coordinating AI, data science, and analytics workshops.' },
  { title: 'Youth Red Cross Volunteer', detail: 'Community volunteering through the Youth Red Cross.' },
]
