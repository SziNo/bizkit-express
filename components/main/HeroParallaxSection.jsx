import { HeroParallax } from '../ui/hero-parallax'
import { parallaxProducts } from '@/lib/constants'

const HeroParallaxSection = () => {
  return (
    <section id='hero' className='max-w-7xl mx-auto'>
      <HeroParallax products={parallaxProducts} />
    </section>
  )
}

export default HeroParallaxSection
