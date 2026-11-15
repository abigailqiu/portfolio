import { site } from '../data/site'
import styles from './Marquee.module.css'

// Each group is long enough to fill a wide screen on its own, and the track
// scrolls exactly one group's width, so the loop has no visible seam.
const REPEATS = 4

export function Marquee() {
  const group = Array.from({ length: REPEATS }, () => site.marquee).flat()
  return (
    <div className={styles.strip} aria-hidden="true">
      <div className={styles.track}>
        {[0, 1].map((g) => (
          <div key={g} className={styles.group}>
            {group.map((t, i) => (
              <span key={i} className={styles.item}>
                {t}
                <span className={styles.sep}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
