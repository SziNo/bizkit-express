'use client'

import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import ButtonsContainer from '../helpers/ButtonsContainer'
import { TooltipSection } from '../helpers/TooltipSection'

const Header = () => {
  const { t } = useTranslation()
  const heroHeaderArr = t('hero-parallax:HeroHeader').split(' ')

  return (
    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-[90vh] max-w-6xl mx-auto flex flex-col justify-center items-center text-center px-2 sm:px-4 z-10 break-words'>
      <h1 className='text-2xl md:text-6xl tracking-wide font-bold text-primary max-w-[100vw]'>
        {heroHeaderArr.slice(0, 3).join(' ')}{' '}
        <span className='text-black dark:text-white'>
          {heroHeaderArr.slice(3, 5).join(' ')}{' '}
        </span>
        {heroHeaderArr.slice(5, 7).join(' ')}{' '}
        <span className='text-black dark:text-white'>
          {heroHeaderArr.slice(7, 11).join(' ')}{' '}
        </span>
        {heroHeaderArr.slice(11).join(' ')}
      </h1>

      <p className='text-lg md:text-2xl font-medium mt-2 tracking-tight'>
        {t('hero-parallax:HeroParagraph')}
      </p>

      <div className='my-2 sm:my-4'>
        <ButtonsContainer />
      </div>

      <div className='my-2 sm:my-4'>
        <TooltipSection />
      </div>
    </div>
  )
}

const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      key={product.title}
      className='group/product h-[14rem] w-[20rem] lg:h-[20rem] lg:w-[30rem] relative flex-shrink-0'
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        fill
        sizes='100vw'
        className='object-cover object-fit'
        priority={true}
        unoptimized={true}
      />
      <h2 className='absolute bottom-4 left-4 opacity-0 text-white'>
        {product.title}
      </h2>
    </motion.div>
  )
}

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 3)
  const secondRow = products.slice(3, 6)
  const thirdRow = products.slice(6, 9)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-50, 1000]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 0.85]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-600, -20]),
    springConfig
  )

  return (
    <div
      ref={ref}
      className='relative flex flex-col min-h-[100vh] max-h-[300vh] overflow-hidden antialiased [perspective:1000px] [transform-style:preserve-3d]'
    >
      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className='mt-[84vh] sm:mt-[74vh] flex flex-col'
      >
        <motion.div className='flex items-center flex-row-reverse space-x-reverse mb-6 lg:mb-12 space-x-10'>
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className='flex items-center flex-row mb-6 lg:mb-12 space-x-10 '>
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className='flex items-center flex-row-reverse space-x-reverse space-x-10'>
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
