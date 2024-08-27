'use client'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import HoverBorderGradient from './hover-border-gradient'

export const HoverEffect = ({ className, array }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null)
  const { t } = useTranslation()

  return (
    <div
      className={cn(
        'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-10',
        className
      )}
    >
      {array.map(({ title, profileImage, hoverImage, projectUrl }, idx) => {
        return (
          <div
            key={idx}
            className='relative group block p-2 h-full w-full'
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className='absolute inset-0 h-full w-full bg-primary/15 block rounded-3xl'
                  layoutId='hoverBackground'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card
              profileImage={profileImage}
              hoverImage={hoverImage}
              title={title}
            >
              <CardTitle>{title}</CardTitle>
              <div>
                <HoverBorderGradient
                  ariaLabel='Link to demo project on Vercel'
                  containerClassName='w-auto mx-auto md:mx-0 py-[0.2rem] rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
                  className='flex items-center px-4 text-center text-xs tracking-wider'
                  decoratorClassName='rounded-xl'
                  as='a'
                  href={projectUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {t('templates:ButtonLabel')}
                </HoverBorderGradient>
                {/* <a
                  href={projectUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-block px-4 py-2 text-xs font-medium leading-6 text-center uppercase rounded shadow ripple hover:shadow-lg bg-primary text-white focus:outline-none hover:scale-95 hover:bg-primary/90 transform transition-transform duration-300'
                >
                  {t('templates:ButtonLabel')}
                </a> */}
              </div>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export const Card = ({
  className,
  children,
  profileImage,
  hoverImage,
  title,
}) => {
  return (
    <div
      className={cn(
        'group rounded-2xl h-full w-full p-4 overflow-hidden dark:bg-[#252422] bg-primary-foreground border border-primary/50 relative z-10 flex flex-col md:flex-row items-center',
        className
      )}
    >
      <div className='relative w-24 h-24 md:mr-2'>
        {/* Front image, visible by default and hidden on hover */}
        <Image
          src={profileImage}
          alt={`${title} Profile Image`}
          fill
          sizes='100vw'
          className='object-fit rounded absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0'
          unoptimized={true}
        />
        {/* Back image, hidden by default and shown on hover */}
        <Image
          src={hoverImage}
          alt={`${title} Hover Image`}
          fill
          sizes='100vw'
          className='object-cover rounded absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100'
          unoptimized={true}
        />
      </div>
      <div className='relative z-50 flex-grow'>
        <div className='p-4'>{children}</div>
      </div>
    </div>
  )
}
export const CardTitle = ({ className, children }) => {
  return (
    <h3
      className={cn(
        'text-lg text-center md:text-start font-bold tracking-wide mb-4 capitalize bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text',
        className
      )}
    >
      {children}
    </h3>
  )
}
// export const CardDescription = ({ className, children }) => {
//   return (
//     <p
//       className={cn(
//         'mt-4 text-[#9a8c98] tracking-wide leading-relaxed text-sm',
//         className
//       )}
//     >
//       {children}
//     </p>
//   )
// }
