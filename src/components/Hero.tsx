import { site } from '../data/site'
import { Magnetic } from './Magnetic'
import { Star, Wave } from './Doodles'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <header id="top" className={`container ${styles.hero}`}>
      <div className={styles.copy}>
        <p className={`hand ${styles.kicker}`}>hi, I'm</p>
        <h1 className={styles.title}>
          <span className={styles.name}>{site.displayName}</span>
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
      </div>

      <div className={styles.art}>
        <div className={styles.portraitCard}>
          <img src="/work/profile.jpg" alt="Abigail Qiu" className={styles.portraitImg} />
        </div>
        <Star style={{ position: 'absolute', top: 10, left: -10 }} />
        <Wave style={{ position: 'absolute', bottom: 3, right: -14, width: 84 }} />
      </div>
    </header>
  )
}
