interface CompassProps {
  className?: string;
}

// 12 bearing ticks generated once at module load (deterministic, SSR-safe).
// Angle 0° points up = North. Major ticks land on the four cardinals.
const TICKS = Array.from({ length: 12 }, (_, i) => {
  const degrees = i * 30 - 90;
  const rad = (degrees * Math.PI) / 180;
  const isCardinal = i % 3 === 0;
  const outer = 150;
  const inner = isCardinal ? 130 : 140;
  return {
    x1: 200 + outer * Math.cos(rad),
    y1: 200 + outer * Math.sin(rad),
    x2: 200 + inner * Math.cos(rad),
    y2: 200 + inner * Math.sin(rad),
    isCardinal,
  };
});

const CARDINALS = [
  { label: "N", x: 200, y: 118, anchor: "middle" as const },
  { label: "E", x: 282, y: 204, anchor: "middle" as const },
  { label: "S", x: 200, y: 290, anchor: "middle" as const },
  { label: "W", x: 118, y: 204, anchor: "middle" as const },
];

/**
 * Compass — an orientation instrument: three concentric rings (the product's
 * Orientation / Field / Resonance rings) and a needle that drifts and settles
 * but never locks. "Splash 'Em Out won't point you anywhere; it helps you notice your
 * own north."
 */
export function Compass({ className }: CompassProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="A compass instrument. Its needle settles between north and east. Three concentric rings surround it."
    >
      <title>The Splash 'Em Out compass</title>
      <defs>
        <radialGradient id="mc-disc" cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="var(--background)" />
          <stop offset="100%" stopColor="var(--muted)" />
        </radialGradient>
      </defs>

      {/* Disc + outer bezel */}
      <circle
        cx="200"
        cy="200"
        r="184"
        fill="url(#mc-disc)"
        stroke="var(--border)"
        strokeWidth="1"
      />

      {/* Faint crosshair hairlines for instrument feel */}
      <line
        x1="200"
        y1="32"
        x2="200"
        y2="368"
        stroke="var(--border)"
        strokeWidth="0.75"
        opacity="0.5"
      />
      <line
        x1="32"
        y1="200"
        x2="368"
        y2="200"
        stroke="var(--border)"
        strokeWidth="0.75"
        opacity="0.5"
      />

      {/* The three rings — Orientation (inner), Field (mid), Resonance (outer) */}
      <circle
        cx="200"
        cy="200"
        r="150"
        fill="none"
        stroke="var(--border)"
        strokeWidth="1"
      />
      <circle
        cx="200"
        cy="200"
        r="108"
        fill="none"
        stroke="var(--border)"
        strokeWidth="1"
        strokeDasharray="2 6"
      />
      <circle
        cx="200"
        cy="200"
        r="64"
        fill="none"
        stroke="var(--border)"
        strokeWidth="1"
      />

      {/* Bearing ticks */}
      <g stroke="var(--muted-foreground)" strokeWidth="1">
        {TICKS.map((tick, i) => (
          <line
            key={i}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            strokeWidth={tick.isCardinal ? 1.5 : 1}
            opacity={tick.isCardinal ? 0.8 : 0.45}
          />
        ))}
      </g>

      {/* Cardinal letters */}
      <g
        className="font-sans"
        fill="var(--muted-foreground)"
        fontSize="13"
        fontWeight={600}
        letterSpacing="0.18em"
      >
        {CARDINALS.map((c) => (
          <text
            key={c.label}
            x={c.x}
            y={c.y}
            textAnchor={c.anchor}
            dominantBaseline="middle"
          >
            {c.label}
          </text>
        ))}
      </g>

      {/* "Your north" marker — a small violet lozenge at the top */}
      <rect
        x="194"
        y="44"
        width="12"
        height="12"
        rx="2"
        transform="rotate(45 200 50)"
        fill="var(--accent)"
        opacity="0.85"
      />

      {/* Whole disc drifts very gently */}
      <g className="mc-compass-disc">
        {/* Needle — symmetric about center so fill-box rotation pivots cleanly */}
        <g className="mc-compass-needle">
          {/* North half — clay signal */}
          <polygon points="200,80 212,200 188,200" fill="var(--brand)" />
          {/* South half — plum ink */}
          <polygon
            points="200,320 212,200 188,200"
            fill="var(--foreground)"
            opacity="0.78"
          />
        </g>
      </g>

      {/* Hub */}
      <circle cx="200" cy="200" r="9" fill="var(--foreground)" />
      <circle cx="200" cy="200" r="3.5" fill="var(--background)" />
    </svg>
  );
}
