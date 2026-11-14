import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/site'
import { Magnetic } from './Magnetic'
import { Squiggle } from './Squiggle'
import { Spark } from './Doodles'
import styles from './Nav.module.css'

export function Nav() {
  const { pathname } = useLocation()
  const home = pathname === '/'
  const anchor = (id: string) => (home ? `#${id}` : `/#${id}`)

  return (
    <nav className={`container ${styles.nav}`} aria-label="Primary">
      <Link to="/" className={`display ${styles.brand}`}>
        <Spark />
        {site.name}
      </Link>
      <div className={styles.links}>
        {home ? (
          <>
            <a href={anchor('work')} className="squiggle">
              work
              <Squiggle />
            </a>
            <a href={anchor('about')} className="squiggle">
              about
              <Squiggle />
            </a>
            <a href={anchor('contact')} className="squiggle">
              contact
              <Squiggle />
            </a>
            <Magnetic strength={8}>
              <a href={`mailto:${site.email}`} className="btn btn--ink">
                say hi →
              </a>
            </Magnetic>
          </>
        ) : (
          <Magnetic strength={8}>
            <Link to="/#work" className="btn btn--sm">
              <span aria-hidden="true">←</span> all work
            </Link>
          </Magnetic>
        )}
      </div>
    </nav>
  )
}
