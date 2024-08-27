'use client'

import { useTranslation } from 'react-i18next'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import { useInView } from 'react-intersection-observer'
import { steps, imageSliders } from '@/lib/constants'
import StaticImageBackground from '@/components/helpers/StaticImageBackground'
import dynamic from 'next/dynamic'

const StepCard = dynamic(() => import('./StepCard'), { ssr: false })

const Steps = () => {
  const { t } = useTranslation()
  const { ref, inView } = useInView({
    threshold: 0,
  })
  const translatedHeaderArr = t('steps:StepsHeader').split(' ')

  return (
    <section ref={ref} className='max-w-7xl mx-auto my-8 md:my-16' id='steps'>
      <StaticImageBackground
        className=''
        alt='A huge buscitman explaining the process of the web development and design to other people in the office'
        image={imageSliders[1]}
        overlayClassName='bg-white/90 dark:bg-black/90'
      >
        <div className='flex flex-1 flex-col items-center z-50 py-4 sm:py-6'>
          <h2 className='text-center text-3xl md:text-6xl font-bold px-2 max-w-[100vw] sm:max-w-full break-words'>
            {translatedHeaderArr.slice(0, 3).join(' ')}{' '}
            <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
              {translatedHeaderArr.slice(3).join(' ')}
            </span>
          </h2>

          <div className='mt-10 md:mt-20 flex flex-col overflow-hidden'>
            <VerticalTimeline lineColor='#6420AA'>
              {steps.map((step) => (
                <StepCard key={`step-${step.id}`} step={step} inView={inView} />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </StaticImageBackground>
    </section>
  )
}

export default Steps
