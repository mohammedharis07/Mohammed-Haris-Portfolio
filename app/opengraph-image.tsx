import { ImageResponse } from 'next/og'

export const alt = 'Mohammed Haris A P — AI & Data Science Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#070910',
          backgroundImage:
            'radial-gradient(circle at 80% 30%, rgba(139,92,246,0.35), transparent 45%), radial-gradient(circle at 90% 80%, rgba(56,221,248,0.18), transparent 40%)',
          color: '#F4F7FB',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 22, letterSpacing: 6, color: '#38DDF8' }}>
          AI ENGINEERING / COMPUTER VISION / AUTONOMOUS SYSTEMS
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>Engineering Intelligence.</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, color: '#A78BFA' }}>
            {"Building What's Next."}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 28, color: '#A3AEC0' }}>
          <span style={{ color: '#F4F7FB' }}>Mohammed Haris A P</span>
          <span>AI & Data Science Engineer</span>
        </div>
      </div>
    ),
    size,
  )
}
