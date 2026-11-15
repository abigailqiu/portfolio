import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { Media } from './Media'
import styles from './WorkGrid.module.css'

export function WorkGrid() {
  return (
    <section id="work" className={`container ${styles.section}`}>
      <div className={styles.head}>
        <h2 className={styles.h2}>things I've worked on</h2>
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
                <Media media={p.cover} swatch={p.swatch} className={styles.cover} fit={p.cover.kind === 'stl' ? 'contain' : 'cover'} />
              </motion.div>
              <div className={styles.meta}>
                <span className="tag" style={{ background: p.tagBg }}>
                  {p.tag}
                </span>
                {p.year && <span className={styles.year}>{p.year}</span>}
              </div>
              <h3 className={styles.h3}>{p.title}</h3>
              <span className={styles.open}>
                open <span aria-hidden="true">→</span>
              </span>
            </Link>
          </motion.div>
        ))}

      </div>
    </section>
  )
}
