export type SkillIcon =
  | 'code'
  | 'brain'
  | 'scan'
  | 'layers'
  | 'chart'
  | 'database'
  | 'globe'
  | 'wrench'

export type SkillGroup = {
  id: string
  title: string
  icon: SkillIcon
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  { id: 'programming', title: 'Programming', icon: 'code', items: ['Python', 'C', 'Java', 'R', 'SQL'] },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: 'brain',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Neural Networks',
      'CNNs',
      'Natural Language Processing',
      'Computer Vision',
      'Object Detection',
      'Transfer Learning',
      'Model Training & Evaluation',
    ],
  },
  {
    id: 'cv',
    title: 'Computer Vision',
    icon: 'scan',
    items: ['OpenCV', 'YOLO', 'MediaPipe', 'Image Processing', 'Object Detection', 'Gesture Recognition'],
  },
  { id: 'frameworks', title: 'AI/ML Frameworks', icon: 'layers', items: ['TensorFlow', 'Keras', 'Scikit-learn'] },
  {
    id: 'data',
    title: 'Data Science & Analytics',
    icon: 'chart',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Jupyter Notebook', 'Data Analysis', 'Data Visualization'],
  },
  { id: 'databases', title: 'Databases', icon: 'database', items: ['MySQL', 'PostgreSQL', 'SQLAlchemy', 'DBMS'] },
  {
    id: 'web',
    title: 'Web & Application Development',
    icon: 'globe',
    items: ['React.js', 'Next.js', 'Node.js', 'FastAPI', 'Vite.js', 'REST APIs'],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    icon: 'wrench',
    items: ['Git', 'GitHub', 'Visual Studio Code', 'Jupyter Notebook', 'MS Office', 'Windows', 'Ubuntu'],
  },
]
