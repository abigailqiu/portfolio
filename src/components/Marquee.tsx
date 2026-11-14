import { site } from '../data/site'
import styles from './Marquee.module.css'

export function Marquee() {
  const items = [...site.marquee, ...site.marquee]
  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.track}>
        {items.map((t, i) => (
          <span key={i} className={styles.item}>
            {t}
            <span className={styles.sep}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
