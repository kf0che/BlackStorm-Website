export default function GlobalSVGDefs() {
  return (
    <svg
      style={{ width: 0, height: 0, position: 'absolute', overflow: 'hidden' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bsLogoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F8EF7" />
          <stop offset="100%" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
    </svg>
  )
}
