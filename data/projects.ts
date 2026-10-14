export type ProjectCategory = 'Autonomous Systems' | 'Computer Vision' | 'Software'

export type ProjectIllustration = 'drone' | 'surveillance' | 'gesture' | 'management'

export type CaseStudySection = {
  title: string
  body?: string
  points?: string[]
}

export type Project = {
  slug: string
  title: string
  fullTitle: string
  category: string
  filters: ProjectCategory[]
  description: string
  stack: string[]
  challenge: string
  approach: string
  status: string
  illustration: ProjectIllustration
  imageAlt: string
  featured: boolean
  repoUrl?: string
  demoUrl?: string
  publications?: string[]
  caseStudy: CaseStudySection[]
}

export const projects: Project[] = [
  {
    slug: 'airbridge',
    title: 'AIRBRIDGE',
    fullTitle: 'AIRBRIDGE — An Autonomous Delivery Drone',
    category: 'Autonomous Systems / Robotics / Research',
    filters: ['Autonomous Systems'],
    description:
      'A research-driven autonomous delivery drone project exploring intelligent campus logistics through sensing, localization, sensor fusion, and autonomous navigation.',
    stack: ['iflightz BLITZ Mini ATF435', 'IMU', 'GPS', 'Ultrasonic / ToF', 'VIO', 'ROS'],
    challenge:
      'Reliable localization and navigation for a small autonomous aircraft, where no single sensor is sufficient on its own.',
    approach:
      'Fuse Visual-Inertial Odometry with GPS for real-time localization, and use ROS to integrate sensors, plan missions, and drive autonomous flight control.',
    status: 'Research project · Published',
    illustration: 'drone',
    imageAlt:
      'Technical illustration of a quadcopter drone with sensor callouts for IMU, GPS, and ToF, over a coordinate grid with a planned navigation path.',
    featured: true,
    publications: ['airbridge-ijedr', 'aerolink'],
    caseStudy: [
      {
        title: 'Problem',
        body: 'Campus logistics — moving small items between buildings — is a natural testbed for autonomous delivery. Doing it autonomously requires an aircraft that knows where it is, understands what is around it, and can execute a mission without manual piloting.',
      },
      {
        title: 'Sensor integration',
        points: [
          'IMU for high-rate attitude and motion estimation.',
          'GPS for global positioning outdoors.',
          'Ultrasonic / ToF sensors for proximity and altitude awareness.',
          'Onboard compute on the iflightz BLITZ Mini ATF435 platform.',
        ],
      },
      {
        title: 'Positioning & localization',
        body: 'Visual-Inertial Odometry (VIO) provides relative motion estimates from camera and inertial data, and is fused with GPS to produce real-time localization that draws on the strengths of both sources.',
      },
      {
        title: 'Robotics software',
        body: 'ROS ties the system together: it handles sensor fusion, mission planning, and the autonomous flight-control pipeline as composable nodes.',
      },
      {
        title: 'Autonomous navigation',
        body: 'Mission planning defines the route; fused localization keeps the drone on it; proximity sensing provides awareness of nearby obstacles and ground distance.',
      },
      {
        title: 'Campus delivery application',
        body: 'The target application is intelligent campus logistics — the research context explored in the AIRBRIDGE journal paper and the AeroLink GPS-IMU sensor fusion conference paper.',
      },
    ],
  },
  {
    slug: 'the-3rd-eye',
    title: 'The 3rd Eye',
    fullTitle: 'The 3rd Eye — AI-Powered CCTV Threat Detection',
    category: 'Computer Vision / AI Surveillance',
    filters: ['Computer Vision'],
    description:
      'An AI-powered surveillance concept that uses computer vision and object detection to identify potentially dangerous objects and hazards in CCTV footage.',
    stack: ['Python', 'OpenCV', 'YOLO', 'Deep Learning', 'Computer Vision'],
    challenge:
      'Monitoring many CCTV feeds by hand is tiring and error-prone; potentially dangerous objects need to be surfaced from live video automatically.',
    approach:
      'Process video frames with OpenCV and run YOLO-based object detection to identify weapons and hazards, rendering bounding boxes over the feed for review.',
    status: 'Engineering project',
    illustration: 'surveillance',
    imageAlt:
      'Dark surveillance-style video frame with object-detection bounding boxes, confidence labels, and a CCTV overlay HUD.',
    featured: true,
    caseStudy: [
      {
        title: 'Problem',
        body: 'Security monitoring depends on people watching footage. The 3rd Eye explores how computer vision can assist that process by flagging potentially dangerous objects in CCTV footage.',
      },
      {
        title: 'Approach',
        points: [
          'Video-feed processing: frames are captured and pre-processed with OpenCV.',
          'Object detection: a YOLO model detects objects in each frame.',
          'Weapon & hazard identification: detections of interest are flagged.',
          'Bounding-box visualization: results are drawn over the video for a human reviewer.',
        ],
      },
      {
        title: 'Architecture',
        body: 'CCTV / video input → OpenCV frame pipeline → YOLO inference → detection filtering → annotated output. CCTV integration is explored as a concept rather than a deployed product.',
      },
      {
        title: 'Technologies',
        points: ['Python', 'OpenCV', 'YOLO', 'Deep Learning'],
      },
    ],
  },
  {
    slug: 'gesture-media-control',
    title: 'Gesture Media Control',
    fullTitle: 'Gesture Media Control',
    category: 'Computer Vision / Human-Computer Interaction',
    filters: ['Computer Vision'],
    description:
      'A gesture-based media control application that explores hands-free interaction by recognizing hand gestures and mapping them to media commands.',
    stack: ['Python', 'OpenCV', 'CNN'],
    challenge: 'Interacting with media without touching a device, using only the hand gestures a camera can see.',
    approach:
      'Process camera input with OpenCV, classify hand gestures with a CNN, and map each recognized gesture to a media command.',
    status: 'Engineering project',
    illustration: 'gesture',
    imageAlt: 'Hand-landmark wireframe beside media player controls, showing a gesture mapped to a play command.',
    featured: false,
    caseStudy: [
      {
        title: 'Problem',
        body: 'Contactless interaction is useful when hands are busy or a device is out of reach. This project explores controlling media with gestures alone.',
      },
      {
        title: 'Approach',
        points: [
          'Visual input processing with OpenCV.',
          'CNN-based gesture classification.',
          'Gesture-to-command mapping for media actions.',
          'Contactless, real-time interaction.',
        ],
      },
      { title: 'Technologies', points: ['Python', 'OpenCV', 'Convolutional Neural Networks'] },
    ],
  },
  {
    slug: 'majmaul-madaris',
    title: 'Majmaul Madaris',
    fullTitle: 'Majmaul Madaris — Institution Management System',
    category: 'Software Development / Institution Management',
    filters: ['Software'],
    description:
      'An institution management system for Arabic colleges, designed to organize institutional information and simplify administrative workflows.',
    stack: ['Python', 'SQL'],
    challenge: 'Institutional records, attendance, and administration spread across manual processes.',
    approach:
      'A database-driven application that centralizes student records, attendance tracking, and administrative operations.',
    status: 'Software project',
    illustration: 'management',
    imageAlt: 'Management dashboard illustration with organized student records, attendance grid, and admin panels.',
    featured: false,
    caseStudy: [
      {
        title: 'Problem',
        body: 'Arabic colleges manage student information and administrative workflows that benefit from a structured, central system.',
      },
      {
        title: 'Approach',
        points: [
          'Structured data management for student records.',
          'Attendance tracking.',
          'Streamlined administrative operations.',
        ],
      },
      { title: 'Technologies', points: ['Python', 'SQL'] },
    ],
  },
]

export type Experiment = {
  title: string
  area: string
  note: string
}

export const experiments: Experiment[] = [
  { title: 'Fake Currency Detection', area: 'Computer Vision', note: 'Exploration' },
  { title: 'AI-Powered Music Mood Detection', area: 'Machine Learning', note: 'Exploration' },
  { title: 'AI-Based Behaviour & Threat Analysis', area: 'Computer Vision', note: 'Concept' },
  { title: 'Campus Buggy', area: 'Autonomous Vehicles', note: 'Concept' },
]

export const projectFilters: ('All' | ProjectCategory)[] = ['All', 'Autonomous Systems', 'Computer Vision', 'Software']

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
