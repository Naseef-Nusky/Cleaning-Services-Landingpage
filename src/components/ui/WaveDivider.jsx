export function WaveDividerBottom({ fill = '#ffffff' }) {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative block h-16 w-full sm:h-20 lg:h-24"
        aria-hidden
      >
        <path
          d="M0,64 C360,120 720,0 1080,48 C1260,72 1380,88 1440,80 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}

export function WaveDividerTop({ fill = '#ffffff' }) {
  return (
    <div className="pointer-events-none absolute top-0 left-0 w-full -translate-y-px overflow-hidden leading-none">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative block h-16 w-full rotate-180 sm:h-20 lg:h-24"
        aria-hidden
      >
        <path
          d="M0,64 C360,120 720,0 1080,48 C1260,72 1380,88 1440,80 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  )
}
