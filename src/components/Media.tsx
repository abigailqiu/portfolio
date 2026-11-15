import { lazy, Suspense } from 'react'
import type { MediaRef } from '../data/projects'

const StlViewer = lazy(() => import('./StlViewer').then((m) => ({ default: m.StlViewer })))

type Props = {
  media?: MediaRef
  /** fallback label when no media yet */
  note?: string
  swatch?: string
  className?: string
  imgClassName?: string
  /** STL: allow drag (project page) */
  interactive?: boolean
  /** object-fit for images/video */
  fit?: 'cover' | 'contain'
  style?: React.CSSProperties
}

/** Renders an image, muted looping video, or spinning STL — or a labelled placeholder. */
export function Media({ media, note, swatch, className, imgClassName, interactive, fit = 'cover', style }: Props) {
  if (!media) {
    return (
      <div className={className} style={{ background: swatch, ...style }}>
        <span className="placeholder" style={{ fontSize: 24 }}>
          [{note ?? 'image'}]
        </span>
      </div>
    )
  }
  if (media.kind === 'stl') {
    return (
      <div className={className} style={{ background: media.background ?? swatch, ...style }}>
        <Suspense fallback={null}>
          <StlViewer src={media.src} color={media.color} interactive={interactive} />
        </Suspense>
      </div>
    )
  }
  if (media.kind === 'video') {
    return (
      <div className={className} style={{ background: swatch, ...style }}>
        <video
          src={media.src}
          poster={media.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={imgClassName}
          style={{ width: '100%', height: '100%', objectFit: fit, display: 'block' }}
        />
      </div>
    )
  }
  return (
    <div className={className} style={{ background: swatch, ...style }}>
      <img
        src={media.src}
        alt={media.alt ?? ''}
        loading="lazy"
        className={imgClassName}
        style={{ width: '100%', height: '100%', objectFit: fit, objectPosition: media.position ?? 'center', display: 'block' }}
      />
    </div>
  )
}
