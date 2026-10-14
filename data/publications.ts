export type Publication = {
  id: string
  title: string
  type: 'Journal publication' | 'Conference publication' | 'Published design patent'
  venue: string
  year?: string
  areas: string[]
  description: string
  indexing?: string
  link?: string
  relatedProject?: string
}

export const publications: Publication[] = [
  {
    id: 'aerolink',
    title: 'AeroLink: A GPS-IMU Sensor Fusion Based Autonomous Delivery Drone for Campus Logistics',
    type: 'Conference publication',
    venue: 'IEEE International Conference Proceedings',
    year: '2026',
    indexing: 'Reported as Scopus-indexed',
    areas: ['GPS-IMU Sensor Fusion', 'Autonomous Navigation', 'Campus Logistics', 'Robotics'],
    description: 'Research into GPS-IMU sensor fusion for autonomous delivery applications in campus environments.',
    relatedProject: 'airbridge',
  },
  {
    id: 'airbridge-ijedr',
    title: 'AIRBRIDGE: An Autonomous Delivery Drone',
    type: 'Journal publication',
    venue: 'IJEDR',
    year: '2025',
    areas: ['Autonomous Systems', 'Drone Technology'],
    description: 'Research exploring autonomous drone technology and intelligent navigation for delivery applications.',
    relatedProject: 'airbridge',
  },
  {
    id: 'agri-drone-patent',
    title: 'Agricultural Drone for Monitoring and Spraying Pesticides',
    type: 'Published design patent',
    venue: 'Design patent publication',
    areas: ['Agricultural Technology', 'Drone Systems'],
    description:
      'A design patent publication concerning an agricultural drone concept for monitoring and pesticide-spraying applications.',
  },
]

export const researchInterests = [
  'Autonomous Systems',
  'Sensor Fusion',
  'Computer Vision',
  'Applied Machine Learning',
  'Intelligent Robotics',
]
