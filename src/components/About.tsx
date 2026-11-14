import { site } from '../data/site'
import styles from './About.module.css'

export function About() {
  return (
    <section id="about" className={`container ${styles.section}`}>
      <div className={styles.noteCol}>
        <div className={styles.note}>
          <span className="tape" aria-hidden="true" />
          <p className={`hand ${styles.noteTitle}`}>currently</p>
          <ul className={styles.list}>
            {site.currently.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.copy}>
        <h2 className={styles.h2}>about</h2>
        {site.about.map((para, i) => (
          <p key={i} className={styles.para}>
            {para}
          </p>
        ))}
        <div className={styles.skills}>
          {site.skills.map((s) => (
            <span key={s} className="pill">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
