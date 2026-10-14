export type Credential = {
  label: string
  value: string
}

export const profile = {
  name: 'Mohammed Haris A P',
  shortName: 'HARIS',
  monogram: 'MH',
  title: 'AI & Data Science Engineer',
  identities: [
    'AI/ML Engineer',
    'Computer Vision Developer',
    'Software Developer',
    'Autonomous Systems Researcher',
    'Technology Innovator',
  ],
  location: 'Kerala, India',
  email: 'mohammedharis2021@gmail.com',
  resumePath: '/resume.pdf',
  hero: {
    label: 'AI ENGINEERING / COMPUTER VISION / AUTONOMOUS SYSTEMS',
    headline: ['Engineering Intelligence.', "Building What's Next."],
    intro:
      "I'm Mohammed Haris A P, an AI and Data Science engineer passionate about intelligent systems, computer vision, autonomous technologies, and building software that solves meaningful problems.",
    supporting:
      'From autonomous drone research to AI-powered computer vision, I explore how intelligent technologies can move from concepts to real-world applications.',
    meta: [
      'B.Tech AI & Data Science',
      'Minor in ECE',
      'Class of 2026',
      'Ilahia College of Engineering and Technology',
    ],
  },
  about: {
    heading: 'Curiosity drives the engineering.',
    bio: [
      "I'm Mohammed Haris A P, an Artificial Intelligence and Data Science engineer with a strong interest in building intelligent systems and solving real-world problems through technology.",
      'My technical interests span machine learning, deep learning, computer vision, autonomous systems, robotics, and software development. I enjoy exploring the complete journey from understanding a problem to designing, implementing, and refining a technical solution.',
      "My work also extends beyond implementation. Through research, innovation initiatives, startup operations, and technical workshop coordination, I've developed an appreciation for collaboration, communication, and the process of turning ideas into useful outcomes.",
      'I approach engineering with curiosity, experimentation, and a commitment to continuous learning.',
    ],
    areas: [
      'Applied Artificial Intelligence',
      'Computer Vision',
      'Autonomous Systems',
      'Sensor Fusion',
      'Software Engineering',
      'Research and Innovation',
    ],
  },
  education: {
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    minor: 'Minor in Electronics and Communication Engineering',
    institution: 'Ilahia College of Engineering and Technology',
    place: 'Muvattupuzha, Kerala',
    university: 'APJ Abdul Kalam Technological University',
    years: '2022 – 2026',
    credentials: [
      { label: 'CGPA', value: '9.06/10' },
      { label: 'Graduating', value: 'Class of 2026' },
    ] satisfies Credential[],
  },
  achievements: [
    { value: '9.06', unit: '/10', label: 'Cumulative GPA', detail: 'B.Tech AI & Data Science' },
    { value: 'ECE', unit: 'Minor', label: 'Electronics & Communication', detail: 'Alongside the AI & DS major' },
    { value: 'YIP', unit: '2023', label: 'Young Innovators Programme', detail: 'Selected participant' },
  ],
  hackathons: [
    { title: 'IEDC StartUp Summit Hackathon', result: 'Winner', year: '2026' },
    { title: 'HackRush Hackathon', result: 'Runner-Up', year: '2026' },
  ],
  interests: {
    copy: 'Outside engineering, I enjoy exploring good stories, discovering music, playing badminton, and maintaining an active lifestyle. These interests give me space to recharge, stay curious, and approach new problems with a fresh perspective.',
    items: [
      'Fiction, thrillers & mystery novels',
      'Music',
      'Badminton',
      'Fitness & working out',
      'Anime',
      'Emerging technologies',
    ],
  },
  contact: {
    heading: "Have an interesting problem? Let's build something meaningful.",
    copy: "I'm open to thoughtful conversations about AI engineering, software development, research, autonomous systems, and technology-driven opportunities.",
  },
} as const

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000')
