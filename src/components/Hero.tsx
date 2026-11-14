import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { site } from '../data/site'
import { Magnetic } from './Magnetic'
import { Arrow, Portrait, Star, Wave } from './Doodles'
import styles from './Hero.module.css'

export function Hero() {
  const reduced = useReducedMotion()
  const [i, setI] = useState(0)

  useEffect(() => {
    if (reduced) return
    const t = setInterval(() => setI((n) => (n + 1) % site.identities.length), 2600)
    return () => clearInterval(t)
  }, [reduced])

  const word = site.identities[i]

  return (
    <header id="top" className={`container ${styles.hero}`}>
      <div className={styles.copy}>
        <p className={`hand ${styles.kicker}`}>hi, I'm</p>
        <h1 className={styles.title}>
          <span className={styles.name}>{site.displayName}</span>
          <span className={styles.line}>
            <span className={styles.lineLabel}>a</span>
            <span className={styles.wordSlot} aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.em
                  key={word}
                  className={styles.word}
                  initial={{ y: '0.6em', opacity: 0, rotateX: -40 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: '-0.6em', opacity: 0, rotateX: 40 }}
                  transition={{ duration: 0.38, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  {word}
                </motion.em>
              </AnimatePresence>
            </span>
          </span>
        </h1>
        <p className={styles.lede}>
          {site.heroSentence.map((line, i) => (
            <span key={i} style={{ display: 'block' }}>
              {line}
            </span>
          ))}
        </p>
        <div className={styles.ctas}>
          <Magnetic>
            <a href="#work" className="btn btn--primary">
              see work
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#about" className="btn">
              about me
            </a>
          </Magnetic>
        </div>

        {/* handwritten annotations */}
        <span className={`hand ${styles.noteFrom}`}>
          {site.annotations.from}
          <Arrow style={{ transform: 'rotate(-120deg) scaleX(-1)', marginLeft: 6 }} />
        </span>
      </div>

      <div className={styles.art}>
        <div className={styles.portraitCard}>
          <span className="tape" aria-hidden="true" />
          <Portrait />
          <span className={`hand ${styles.portraitNote}`}>[your illustration / photo goes here]</span>
        </div>
        <Star style={{ position: 'absolute', top: 10, left: -10 }} />
        <Wave style={{ position: 'absolute', bottom: 20, right: -20 }} />
        <span className={`hand ${styles.noteMaking}`}>{site.annotations.reading}</span>
      </div>
    </header>
  )
}
