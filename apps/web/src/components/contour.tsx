/**
 * Topographic contour primitives for the find-your-footing landing page.
 *
 * The product is about "orientation" and "the field", so the page uses a quiet
 * cartographic language: flat hairline contour strokes, no fills, no glow, no
 * heavy shadow. All paths are generated deterministically (pure functions of
 * the layer index) so server-rendered and client-rendered markup match and the
 * SVG is safe to render from a Server Component.
 */

type ContourOptions = {
  width: number;
  height: number;
  /** Vertical position of the line as a fraction of the height (0 to 1). */
  yFrac: number;
  /** Amplitude of the primary wave in viewBox units. */
  amp: number;
  /** Frequency of the primary wave across the width. */
  freq: number;
  /** Phase offset in radians. */
  phase: number;
};

/** Build a smooth, organic contour line as an SVG path string. */
function buildContourPath({
  width,
  height,
  yFrac,
  amp,
  freq,
  phase,
}: ContourOptions): string {
  const steps = 64;
  const base = height * yFrac;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const x = t * width;
    // Layered sines give the line a natural, non-mechanical undulation.
    const wave =
      Math.sin(t * Math.PI * 2 * freq + phase) * amp +
      Math.sin(t * Math.PI * 2 * freq * 1.7 + phase * 1.3) * amp * 0.4 +
      Math.sin(t * Math.PI * 2 * freq * 0.5 + phase * 0.5) * amp * 0.6;
    const y = base + wave;
    d += `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d.trim();
}

const FIELD_WIDTH = 1440;
const FIELD_HEIGHT = 900;

// Distribute contour lines across the field. Amplitude and frequency vary per
// layer so the relief reads as terrain rather than ruled lines.
const FIELD_LAYERS = Array.from({ length: 14 }, (_, i) => {
  const t = i / 13;
  return {
    yFrac: 0.1 + t * 0.82,
    amp: 22 + (i % 5) * 9 + t * 14,
    freq: 1.4 + ((i * 5) % 6) * 0.35,
    phase: (i * 0.83) % (Math.PI * 2),
    i,
  };
});

/** Full-bleed topographic field used as the hero atmosphere. */
export function ContourField({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox={`0 0 ${FIELD_WIDTH} ${FIELD_HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <g className="mc-contour-drift">
        {FIELD_LAYERS.map(({ yFrac, amp, freq, phase, i }) => {
          const d = buildContourPath({
            width: FIELD_WIDTH,
            height: FIELD_HEIGHT,
            yFrac,
            amp,
            freq,
            phase,
          });
          // Emphasize the mid-field (the lived-in center) and fade the edges.
          const centerWeight = 1 - Math.abs(yFrac - 0.5) * 1.6;
          const alpha = Math.max(0.04, 0.05 + centerWeight * 0.12);
          const stroke = i % 2 === 0 ? "var(--accent)" : "var(--brand)";
          return (
            <path
              key={i}
              d={d}
              stroke={stroke}
              strokeOpacity={alpha}
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
        {/* Orientation rest point at the center of the field. */}
        <ellipse
          cx={FIELD_WIDTH * 0.5}
          cy={FIELD_HEIGHT * 0.5}
          rx={150}
          ry={70}
          stroke="var(--accent)"
          strokeOpacity={0.18}
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
        <ellipse
          cx={FIELD_WIDTH * 0.5}
          cy={FIELD_HEIGHT * 0.5}
          rx={92}
          ry={42}
          stroke="var(--brand)"
          strokeOpacity={0.16}
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
        <circle
          cx={FIELD_WIDTH * 0.5}
          cy={FIELD_HEIGHT * 0.5}
          r={3}
          fill="var(--brand)"
          fillOpacity={0.4}
        />
      </g>
    </svg>
  );
}

type GlyphForm = "basin" | "ridge" | "peak";

const GLYPH_FORMS: Record<
  GlyphForm,
  { cx: number; cy: number; rings: Array<[number, number]>; rotate: number }
> = {
  // A low basin: rest and orientation.
  basin: {
    cx: 40,
    cy: 46,
    rings: [
      [36, 22],
      [28, 17],
      [20, 12],
      [12, 7],
    ],
    rotate: 6,
  },
  // A ridge: an active middle ground to explore.
  ridge: {
    cx: 40,
    cy: 36,
    rings: [
      [36, 24],
      [28, 18],
      [20, 12],
      [11, 6],
    ],
    rotate: -8,
  },
  // A peak: the deepest, most deliberate point of support.
  peak: {
    cx: 40,
    cy: 30,
    rings: [
      [30, 26],
      [22, 19],
      [14, 12],
      [7, 6],
    ],
    rotate: 4,
  },
};

/** A small landform glyph for a single trail waypoint. */
export function ContourGlyph({
  form,
  className,
}: {
  form: GlyphForm;
  className?: string;
}) {
  const { cx, cy, rings, rotate } = GLYPH_FORMS[form];
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      <g transform={`rotate(${rotate} 40 40)`}>
        {rings.map(([rx, ry], i) => (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={rx}
            ry={ry}
            stroke={i % 2 === 0 ? "var(--accent)" : "var(--brand)"}
            strokeOpacity={0.32 - i * 0.05}
            strokeWidth={1}
          />
        ))}
        <circle cx={cx} cy={cy} r={2} fill="var(--brand)" fillOpacity={0.45} />
      </g>
    </svg>
  );
}

/** A low horizon used at the foot of the closing section. */
export function ContourHorizon({ className }: { className?: string }) {
  const width = 1440;
  const height = 360;
  const lines = [
    { yFrac: 0.62, amp: 10, freq: 2.2, phase: 0.4 },
    { yFrac: 0.72, amp: 14, freq: 1.7, phase: 1.1 },
    { yFrac: 0.84, amp: 20, freq: 1.3, phase: 1.9 },
  ];
  return (
    <svg
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      aria-hidden="true"
    >
      <g className="mc-contour-drift">
        {lines.map((line, i) => (
          <path
            key={i}
            d={buildContourPath({ width, height, ...line })}
            stroke={i % 2 === 0 ? "var(--accent)" : "var(--brand)"}
            strokeOpacity={0.12 + i * 0.03}
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <circle
          cx={width * 0.78}
          cy={height * 0.4}
          r={46}
          stroke="var(--brand)"
          strokeOpacity={0.1}
          strokeWidth={1}
        />
      </g>
    </svg>
  );
}
