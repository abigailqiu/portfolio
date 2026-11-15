import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getProject, neighbours } from '../data/projects'
import type { Caption, Framed } from '../data/projects'
import { NotFound } from './NotFound'
import { Magnetic } from '../components/Magnetic'
import { Media } from '../components/Media'
import styles from './ProjectPage.module.css'

function CaptionTag({ c }: { c: Caption }) {
  return <span className={`hand ${styles.caption} ${c.tone === 'light' ? styles.captionLight : ''}`}>{c.text}</span>
}

function Frame({ f, className = '' }: { f: Framed; className?: string }) {
  const style: CSSProperties = {
    height: f.aspect ? undefined : f.height,
    aspectRatio: f.aspect,
    transform: f.tilt ? `rotate(${f.tilt}deg)` : undefined,
    boxShadow: f.shadow === false ? 'none' : undefined,
  }
  return (
    <div className={`${styles.frame} ${f.tilt ? styles.frameTilt : ''} ${className}`} style={style}>
      <Media media={f.media} className={styles.frameMedia} fit={f.fit ?? 'cover'} />
      {f.caption && <CaptionTag c={f.caption} />}
    </div>
  )
}

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
          </div>
          <h1 className={styles.h1}>{p.title}</h1>
          <p className={styles.summary}>{p.summary}</p>
        </div>
        {p.facts && (
          <aside className={styles.facts}>
            <span className="tape" aria-hidden="true" />
            {p.facts.map((f) => (
              <div key={f.label} className={styles.fact}>
                <span className={styles.factKey}>{f.label}</span>
                <span className={styles.factVal}>
                  {f.value}
                  {f.links?.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className={styles.factLink}>
                      {l.label}
                    </a>
                  ))}
                </span>
              </div>
            ))}
          </aside>
        )}
      </header>

      <section className={`container ${styles.heroWrap}`}>
        <motion.div layoutId={`cover-${p.slug}`} className={styles.heroWrapInner}>
          <Media
            media={p.hero ?? p.cover}
            swatch={p.swatch}
            className={styles.heroMedia}
            style={{ height: p.heroHeight }}
            interactive
          />
          {p.heroCaption && <CaptionTag c={p.heroCaption} />}
          {p.heroNote && <span className={`hand ${styles.heroNote}`}>{p.heroNote}</span>}
        </motion.div>
      </section>

      <section className={`container ${styles.body}`}>
        <div className={styles.narrative}>
          {p.sections.map((s, i) => (
            <div key={s.heading ?? i} className={styles.block}>
              {s.heading && <h2 className={styles.h2}>{s.heading}</h2>}
              {s.body && <p className={styles.para}>{s.body}</p>}
              {s.lines && (
                <p className={styles.para}>
                  {s.lines.map((l) => (
                    <span key={l} style={{ display: 'block' }}>
                      {l}
                    </span>
                  ))}
                </p>
              )}
              {s.media && <Frame f={s.media} />}
            </div>
          ))}
        </div>
        {p.side && (
          <div className={styles.sideCol}>
            {p.side.map((item, i) =>
              item.type === 'media' ? (
                <Frame key={i} f={item} />
              ) : (
                <div key={i} className={styles.marginNote}>
                  <span className="tape" aria-hidden="true" />
                  <p className={`hand ${styles.marginTitle}`}>{item.title}</p>
                  {item.body && <p className={styles.marginBody}>{item.body}</p>}
                  {item.bullets && (
                    <ul className={styles.marginList}>
                      {item.bullets.map((b) => (
                        <li key={b.lead}>
                          <strong>{b.lead}</strong> {b.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ),
            )}
          </div>
        )}
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
