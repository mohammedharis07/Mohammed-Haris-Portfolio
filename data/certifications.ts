export type Certification = {
  id: string
  title: string
  issuer?: string
  date?: string
  credentialUrl?: string
  category: string
}

// Add issuer, date, or credentialUrl only after verifying against the actual certificate.
export const certifications: Certification[] = [
  { id: 'claude-101', title: 'Claude 101', category: 'Applied AI' },
  { id: 'power-bi-internship', title: 'Power BI Internship', issuer: 'Nest Digital', category: 'Data Analytics' },
  { id: 'applied-ai-python', title: 'Applied AI with Python', category: 'Machine Learning' },
]
