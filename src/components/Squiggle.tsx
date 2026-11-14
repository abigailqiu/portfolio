/** Hand-drawn underline that draws in on hover (parent needs class "squiggle"). */
export function Squiggle({ color = 'var(--tomato)' }: { color?: string }) {
  return (
    <svg viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M1 5c8-5 14-5 22 0s14 5 22 0 14-5 22 0 14 5 22 0 6-3 10-1"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        pathLength="200"
      />
    </svg>
  )
}
