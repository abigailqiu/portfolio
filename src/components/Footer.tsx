import { site } from '../data/site'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.h2}>
          <a href={`mailto:${site.email}`} className={styles.email}>
            email me
          </a>
        </h2>
        <div className={styles.row}>
          <div className={styles.links}>
            {site.links.map((l) => (
              <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {l.label}
              </a>
            ))}
          </div>
          <p className={`hand ${styles.note}`}>{site.footerNote}</p>
        </div>
      </div>
    </footer>
  )
}
