import { Hero } from '../components/Hero'
import { Marquee } from '../components/Marquee'
import { WorkGrid } from '../components/WorkGrid'
import { About } from '../components/About'

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <WorkGrid />
      <About />
    </>
  )
}
