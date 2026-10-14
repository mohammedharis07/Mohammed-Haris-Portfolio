import type { ProjectIllustration } from '@/data/projects'
import { cn } from '@/lib/utils'

type Props = { className?: string; title: string }

const mono = { fontFamily: 'var(--font-geist-mono), monospace' }

function GridDefs({ id }: { id: string }) {
  return (
    <defs>
      <pattern id={`${id}-grid`} width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M24 0H0V24" fill="none" stroke="rgb(255 255 255 / 0.05)" strokeWidth="1" />
      </pattern>
      <linearGradient id={`${id}-accent`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#8B5CF6" />
        <stop offset="1" stopColor="#38DDF8" />
      </linearGradient>
      <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stopColor="#8B5CF6" stopOpacity="0.28" />
        <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
      </radialGradient>
    </defs>
  )
}

export function DroneIllustration({ className, title }: Props) {
  const rotors = [
    [130, 100],
    [270, 100],
    [130, 200],
    [270, 200],
  ]
  return (
    <svg viewBox="0 0 600 340" role="img" aria-label={title} className={cn('h-full w-full', className)}>
      <GridDefs id="drone" />
      <rect width="600" height="340" fill="#0B1020" />
      <rect width="600" height="340" fill="url(#drone-grid)" />
      <circle cx="200" cy="150" r="170" fill="url(#drone-glow)" />

      {/* navigation path */}
      <path
        d="M330 300 C 400 260, 420 200, 470 170 S 540 90, 560 60"
        fill="none"
        stroke="#38DDF8"
        strokeWidth="1.5"
        className="anim-dash"
      />
      {[
        [330, 300, 'WP-01'],
        [470, 170, 'WP-02'],
        [560, 60, 'DROP'],
      ].map(([x, y, l]) => (
        <g key={l as string}>
          <rect x={(x as number) - 5} y={(y as number) - 5} width="10" height="10" fill="none" stroke="#5EEAD4" />
          <text x={(x as number) + 10} y={(y as number) + 4} fill="#5EEAD4" fontSize="10" style={mono}>
            {l}
          </text>
        </g>
      ))}

      {/* drone frame */}
      <g stroke="#A3AEC0" strokeWidth="2" fill="none">
        <line x1="130" y1="100" x2="270" y2="200" />
        <line x1="270" y1="100" x2="130" y2="200" />
      </g>
      {rotors.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="38" fill="none" stroke="rgb(139 92 246 / 0.5)" strokeWidth="1" />
          <ellipse cx={x} cy={y} rx="34" ry="5" fill="rgb(56 221 248 / 0.25)" className="anim-pulse" />
          <circle cx={x} cy={y} r="6" fill="#101827" stroke="#38DDF8" strokeWidth="1.5" />
        </g>
      ))}
      <rect x="172" y="128" width="56" height="44" rx="6" fill="#101827" stroke="url(#drone-accent)" strokeWidth="2" />
      <circle cx="200" cy="150" r="7" fill="none" stroke="#8B5CF6" strokeWidth="2" />
      <circle cx="200" cy="150" r="2.5" fill="#38DDF8" />

      {/* ToF beam */}
      <path d="M200 172 L178 300 L222 300 Z" fill="rgb(94 234 212 / 0.06)" stroke="rgb(94 234 212 / 0.35)" strokeDasharray="3 4" />

      {/* callouts */}
      <g style={mono} fontSize="10" fill="#A3AEC0">
        <line x1="228" y1="135" x2="330" y2="80" stroke="rgb(255 255 255 / 0.25)" />
        <text x="334" y="78">IMU · 6-DOF</text>
        <line x1="172" y1="135" x2="60" y2="40" stroke="rgb(255 255 255 / 0.25)" />
        <text x="20" y="34">GPS · GNSS FIX</text>
        <line x1="210" y1="260" x2="60" y2="290" stroke="rgb(255 255 255 / 0.25)" />
        <text x="20" y="304">ToF / ULTRASONIC</text>
        <text x="334" y="96" fill="#8B5CF6">VIO + GPS → POSE</text>
      </g>

      <g style={mono} fontSize="9" fill="rgb(163 174 192 / 0.6)">
        <text x="20" y="18">X 0.000 / Y 0.000 / Z 12.4</text>
        <text x="470" y="330">ROS · MISSION PLAN</text>
      </g>
    </svg>
  )
}

export function SurveillanceIllustration({ className, title }: Props) {
  return (
    <svg viewBox="0 0 600 340" role="img" aria-label={title} className={cn('h-full w-full', className)}>
      <GridDefs id="cctv" />
      <rect width="600" height="340" fill="#070910" />
      <rect width="600" height="340" fill="url(#cctv-grid)" />

      {/* scene silhouettes */}
      <rect x="0" y="250" width="600" height="90" fill="#0B1020" />
      <path d="M0 250 L120 180 L240 180 L360 250" fill="#0E1526" />
      <rect x="420" y="120" width="140" height="130" fill="#0E1526" />
      <rect x="440" y="140" width="30" height="40" fill="#101827" />
      <rect x="500" y="140" width="30" height="40" fill="#101827" />

      {/* person */}
      <g fill="#1A2338">
        <circle cx="220" cy="128" r="18" />
        <rect x="198" y="150" width="44" height="80" rx="12" />
        <rect x="204" y="226" width="14" height="40" rx="5" />
        <rect x="222" y="226" width="14" height="40" rx="5" />
        <rect x="240" y="168" width="48" height="10" rx="4" transform="rotate(-12 240 168)" />
      </g>
      {/* object */}
      <rect x="282" y="148" width="34" height="12" rx="2" fill="#26304A" />

      {/* detection boxes */}
      <g fill="none" strokeWidth="2">
        <rect x="186" y="100" width="72" height="172" stroke="#38DDF8" />
        <rect x="274" y="138" width="50" height="32" stroke="#8B5CF6" />
        <rect x="430" y="132" width="110" height="56" stroke="rgb(94 234 212 / 0.6)" strokeDasharray="4 4" />
      </g>
      <g style={mono} fontSize="10">
        <rect x="186" y="86" width="74" height="14" fill="#38DDF8" />
        <text x="190" y="96" fill="#070910">PERSON</text>
        <rect x="274" y="124" width="74" height="14" fill="#8B5CF6" />
        <text x="278" y="134" fill="#F4F7FB">HAZARD?</text>
        <text x="430" y="126" fill="#5EEAD4">REGION</text>
      </g>

      {/* scan line */}
      <rect x="0" y="0" width="600" height="2" fill="rgb(56 221 248 / 0.25)" className="anim-pulse" />

      {/* HUD */}
      <g style={mono} fontSize="10" fill="#A3AEC0">
        <circle cx="26" cy="24" r="4" fill="#F87171" className="anim-pulse" />
        <text x="36" y="28">REC · CAM 03</text>
        <text x="460" y="28">YOLO · INFERENCE</text>
        <text x="20" y="324">FRAME 001842</text>
        <text x="460" y="324">OPENCV PIPELINE</text>
      </g>
      <g stroke="rgb(244 247 251 / 0.5)" strokeWidth="2" fill="none">
        <path d="M12 52V40H24" />
        <path d="M588 52V40H576" />
        <path d="M12 290V302H24" />
        <path d="M588 290V302H576" />
      </g>
    </svg>
  )
}

export function GestureIllustration({ className, title }: Props) {
  const pts: [number, number][] = [
    [180, 280],
    [140, 240], [118, 205], [102, 175], [90, 148],
    [165, 190], [160, 140], [157, 108], [155, 80],
    [195, 188], [200, 135], [203, 100], [206, 70],
    [222, 196], [234, 150], [242, 120], [248, 95],
    [242, 212], [262, 180], [274, 160], [284, 140],
  ]
  const chains = [
    [0, 1, 2, 3, 4],
    [0, 5, 6, 7, 8],
    [5, 9, 10, 11, 12],
    [9, 13, 14, 15, 16],
    [13, 17, 18, 19, 20],
    [0, 17],
  ]
  return (
    <svg viewBox="0 0 600 340" role="img" aria-label={title} className={cn('h-full w-full', className)}>
      <GridDefs id="gest" />
      <rect width="600" height="340" fill="#0B1020" />
      <rect width="600" height="340" fill="url(#gest-grid)" />
      <circle cx="190" cy="180" r="150" fill="url(#gest-glow)" />
      <g stroke="#38DDF8" strokeWidth="1.5" fill="none" opacity="0.8">
        {chains.map((c) => (
          <polyline key={c.join('-')} points={c.map((i) => pts[i].join(',')).join(' ')} />
        ))}
      </g>
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 5 : 3.5} fill={i % 4 === 0 ? '#8B5CF6' : '#F4F7FB'} />
      ))}
      <rect x="70" y="50" width="240" height="250" fill="none" stroke="rgb(139 92 246 / 0.6)" strokeDasharray="4 4" />
      <text x="70" y="42" fill="#8B5CF6" fontSize="10" style={mono}>
        HAND · OPEN PALM
      </text>

      <path d="M320 175 H380" stroke="#5EEAD4" strokeWidth="1.5" className="anim-dash" />
      <text x="322" y="165" fill="#5EEAD4" fontSize="9" style={mono}>
        CNN → CMD
      </text>

      <rect x="392" y="110" width="180" height="130" rx="8" fill="#101827" stroke="rgb(255 255 255 / 0.1)" />
      <rect x="408" y="126" width="148" height="56" rx="4" fill="#0B1020" />
      <rect x="408" y="198" width="148" height="3" rx="1.5" fill="rgb(255 255 255 / 0.1)" />
      <rect x="408" y="198" width="70" height="3" rx="1.5" fill="url(#gest-accent)" />
      <g fill="#A3AEC0">
        <path d="M436 214 l-10 6 10 6z" />
        <path d="M446 214 l-10 6 10 6z" />
        <path d="M512 214 l10 6 -10 6z" />
        <path d="M522 214 l10 6 -10 6z" />
      </g>
      <circle cx="480" cy="220" r="12" fill="url(#gest-accent)" />
      <path d="M476 214 l10 6 -10 6z" fill="#070910" />
      <text x="408" y="100" fill="#A3AEC0" fontSize="10" style={mono}>
        MEDIA · PLAY / PAUSE
      </text>
    </svg>
  )
}

export function ManagementIllustration({ className, title }: Props) {
  const rows = [0, 1, 2, 3, 4]
  return (
    <svg viewBox="0 0 600 340" role="img" aria-label={title} className={cn('h-full w-full', className)}>
      <GridDefs id="mgmt" />
      <rect width="600" height="340" fill="#0B1020" />
      <rect width="600" height="340" fill="url(#mgmt-grid)" />
      <rect x="40" y="36" width="520" height="268" rx="8" fill="#101827" stroke="rgb(255 255 255 / 0.08)" />
      <rect x="40" y="36" width="110" height="268" rx="8" fill="#0D1424" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x="56"
          y={70 + i * 28}
          width={i === 0 ? 78 : 64}
          height="10"
          rx="3"
          fill={i === 0 ? 'url(#mgmt-accent)' : 'rgb(255 255 255 / 0.1)'}
        />
      ))}
      <text x="56" y="56" fill="#F4F7FB" fontSize="10" style={mono}>
        RECORDS
      </text>

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={170 + i * 126} y="56" width="112" height="56" rx="6" fill="#0B1020" stroke="rgb(255 255 255 / 0.06)" />
          <rect x={182 + i * 126} y="70" width="40" height="6" rx="2" fill="rgb(163 174 192 / 0.4)" />
          <rect x={182 + i * 126} y="86" width={60 - i * 10} height="12" rx="2" fill={['#8B5CF6', '#38DDF8', '#5EEAD4'][i]} opacity="0.85" />
        </g>
      ))}

      {rows.map((r) => (
        <g key={r}>
          <rect x="170" y={130 + r * 30} width="372" height="22" rx="3" fill={r % 2 ? 'transparent' : 'rgb(255 255 255 / 0.025)'} />
          <circle cx="184" cy={141 + r * 30} r="6" fill="rgb(139 92 246 / 0.35)" />
          <rect x="198" y={138 + r * 30} width="90" height="6" rx="2" fill="rgb(244 247 251 / 0.35)" />
          <rect x="304" y={138 + r * 30} width="60" height="6" rx="2" fill="rgb(163 174 192 / 0.25)" />
          {[0, 1, 2, 3, 4, 5, 6].map((d) => (
            <rect
              key={d}
              x={384 + d * 20}
              y={135 + r * 30}
              width="12"
              height="12"
              rx="2"
              fill={(r + d) % 5 === 0 ? 'rgb(255 255 255 / 0.08)' : 'rgb(94 234 212 / 0.55)'}
            />
          ))}
        </g>
      ))}
      <text x="384" y="124" fill="#A3AEC0" fontSize="9" style={mono}>
        ATTENDANCE · WEEK
      </text>
    </svg>
  )
}

export function ProjectIllustrationView({
  kind,
  title,
  className,
}: {
  kind: ProjectIllustration
  title: string
  className?: string
}) {
  switch (kind) {
    case 'drone':
      return <DroneIllustration title={title} className={className} />
    case 'surveillance':
      return <SurveillanceIllustration title={title} className={className} />
    case 'gesture':
      return <GestureIllustration title={title} className={className} />
    case 'management':
      return <ManagementIllustration title={title} className={className} />
  }
}
