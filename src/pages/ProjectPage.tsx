import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProject, neighbours } from '../data/projects'
import { NotFound } from './NotFound'
import { Magnetic } from '../components/Magnetic'
import { Media } from '../components/Media'
import styles from './ProjectPage.module.css'

export function ProjectPage() {
  const { slug } = useParams()
  const p = getProject(slug)
  if (!p) return <NotFound />
  const { prev, next } = neighbours(p.slug)

  return (
    <article>
      <header className={`container ${styles.head}`}>
        <div className={styles.titleBlock}>
          <div className={styles.metaRow}>
            <span className="tag" style={{ background: p.tagBg }}>
              {p.tag}
            </span>
            <span className={styles.year}>{p.year}</span>
          </div>
          <h1 className={styles.h1}>{p.title}</h1>
          <p className={styles.summary}>{p.summary}</p>
        </div>
        <aside className={styles.facts}>
          <span className="tape" aria-hidden="true" />
          <div className={styles.fact}>
            <span className={styles.factKey}>role</span>
            <span className={styles.factVal}>{p.facts.role}</span>
          </div>
          <div className={styles.fact}>
            <span className={styles.factKey}>tools</span>
            <span className={styles.factVal}>{p.facts.tools.join(', ')}</span>
          </div>
          <div className={styles.fact}>
            <span className={styles.factKey}>time</span>
            <span className={styles.factVal}>{p.facts.time}</span>
          </div>
          {p.facts.links.length > 0 && (
            <div className={styles.fact}>
              <span className={styles.factKey}>links</span>
              <span className={styles.factVal}>
                {p.facts.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className={styles.factLink}>
                    {l.label}
                  </a>
                ))}
              </span>
            </div>
          )}
        </aside>
      </header>

      <section className={`container ${styles.heroWrap}`}>
        <motion.div layoutId={`cover-${p.slug}`} className={styles.heroWrapInner}>
          <Media
            media={p.hero ?? p.cover}
            note="hero photo or short video loop"
            swatch={p.swatch}
            className={styles.heroMedia}
            interactive
          />
          {p.heroNote && <span className={`hand ${styles.heroNote}`}>{p.heroNote}</span>}
        </motion.div>
      </section>

      <section className={`container ${styles.body}`}>
        <div className={styles.narrative}>
          {p.sections.map((s) => (
            <div key={s.heading} className={styles.block}>
              <h2 className={styles.h2}>{s.heading}</h2>
              <p className={styles.para}>{s.body}</p>
              {(s.media || s.mediaNote) && (
                <Media
                  media={s.media}
                  note={s.mediaNote}
                  className={`${styles.inlineMedia} ${s.media ? styles.inlineMediaFilled : ''}`}
                  fit="contain"
                />
              )}
            </div>
          ))}
        </div>
        <div className={styles.sideCol}>
          {p.gallery?.map((g, i) => (
            <div key={i} className={styles.galleryTilt} style={{ transform: `rotate(${i % 2 === 0 ? -1.5 : 1}deg)` }}>
              <Media media={g.media} note={g.note} swatch={g.swatch} className={styles.galleryItem} />
            </div>
          ))}
          {p.marginNote && (
            <div className={styles.marginNote}>
              <span className="tape" aria-hidden="true" />
              <p className={`hand ${styles.marginTitle}`}>margin note</p>
              <p className={styles.marginBody}>{p.marginNote}</p>
            </div>
          )}
        </div>
      </section>

      <section className={styles.pager}>
        <div className={`container ${styles.pagerInner}`}>
          {prev && (
            <Magnetic strength={6} className={styles.pagerWrap}>
              <Link to={`/work/${prev.slug}`} className={styles.pagerLink}>
                <span className={styles.pagerLabel}>← previous</span>
                <span className={`display ${styles.pagerTitle}`}>{prev.title}</span>
              </Link>
            </Magnetic>
          )}
          {next && (
            <Magnetic strength={6} className={styles.pagerWrap}>
              <Link to={`/work/${next.slug}`} className={`${styles.pagerLink} ${styles.pagerRight}`}>
                <span className={styles.pagerLabel}>next →</span>
                <span className={`display ${styles.pagerTitle}`}>{next.title}</span>
              </Link>
            </Magnetic>
          )}
        </div>
      </section>
    </article>
  )
}
