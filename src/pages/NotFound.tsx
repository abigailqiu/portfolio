import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="container" style={{ padding: '140px 40px 160px', display: 'flex', flexDirection: 'column', gap: 20 }}>
      <p className="hand" style={{ fontSize: 28, color: 'var(--cobalt)' }}>hm.</p>
      <h1 style={{ fontSize: 72, lineHeight: 1 }}>that page isn't here.</h1>
      <p style={{ fontSize: 20, color: 'var(--ink-2)' }}>
        It might be something I haven't made yet.{' '}
        <Link to="/" style={{ borderBottom: '2px dashed var(--ink)' }}>
          back home
        </Link>
      </p>
    </section>
  )
}
