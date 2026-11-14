import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { Media } from './Media'
import styles from './WorkGrid.module.css'

export function WorkGrid() {
  return (
    <section id="work" className={`container ${styles.section}`}>
      <div className={styles.head}>
        <h2 className={styles.h2}>things I've been making</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((p, idx) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: (idx % 3) * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Link
              to={`/work/${p.slug}`}
              className={styles.card}
              style={{ ['--tilt' as string]: `${p.tilt}deg` }}
            >
              <motion.div layoutId={`cover-${p.slug}`} className={styles.coverWrap}>
                <Media media={p.cover} note={p.imageNote} swatch={p.swatch} className={styles.cover} />
              </motion.div>
              <div className={styles.meta}>
                <span className="tag" style={{ background: p.tagBg }}>
                  {p.tag}
                </span>
                <span className={styles.year}>{p.year}</span>
              </div>
              <h3 className={styles.h3}>{p.title}</h3>
              <p className={styles.blurb}>{p.blurb}</p>
              <span className={styles.open}>
                open <span aria-hidden="true">→</span>
              </span>
            </Link>
          </motion.div>
        ))}

        <div className={styles.next}>
          <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M20 8v24M8 20h24" />
          </svg>
          <span className="hand" style={{ fontSize: 26 }}>
            more to come
          </span>
        </div>
      </div>
    </section>
  )
}
