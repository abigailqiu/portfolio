import type { CSSProperties } from 'react'

export function Star({ style, color = 'var(--mustard)', size = 64 }: { style?: CSSProperties; color?: string; size?: number }) {
  return (
    <svg style={style} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round">
      <path d="M32 6l6 18 18 6-18 6-6 18-6-18-18-6 18-6z" />
    </svg>
  )
}

export function Wave({ style, color = 'var(--cobalt)' }: { style?: CSSProperties; color?: string }) {
  return (
    <svg style={{ overflow: 'visible', ...style }} width="90" height="50" viewBox="0 0 90 50" aria-hidden="true" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round">
      <path d="M4 30c10-20 18-20 26 0s18 20 26 0 18-20 26 0" />
    </svg>
  )
}

export function Spark({ style, color = 'var(--ink)' }: { style?: CSSProperties; color?: string }) {
  return (
    <svg style={style} width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3l3.2 8.1 8.8.7-6.7 5.6 2.1 8.6L15 21.4 7.6 26l2.1-8.6L3 11.8l8.8-.7z" />
    </svg>
  )
}

/** Curly hand-drawn arrow, points right by default; rotate via style. */
export function Arrow({ style, color = 'var(--cobalt)' }: { style?: CSSProperties; color?: string }) {
  return (
    <svg style={style} width="70" height="44" viewBox="0 0 70 44" aria-hidden="true" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 36c14-14 26-24 40-24 10 0 16 6 22 10" />
      <path d="M56 12l10 10-13 3" />
    </svg>
  )
}

export function Portrait() {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" aria-hidden="true" fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="70" cy="62" r="34" />
      <path d="M46 56c3-16 14-26 24-26s21 10 24 26" />
      <path d="M58 64h.1M82 64h.1" />
      <path d="M60 78c6 6 14 6 20 0" />
      <path d="M36 128c4-20 18-30 34-30s30 10 34 30" />
      <path d="M100 30l8-8M110 46l12-2M28 36l-8-6" stroke="var(--tomato)" />
    </svg>
  )
}
