'use client'

import { useTranslation } from 'react-i18next'
import { AnimatedTooltip } from '../ui/animated-tooltip'
import { animatedTooltips } from '@/lib/constants'
import { AiFillStar } from 'react-icons/ai'

export const TooltipSection = () => {
  const { t } = useTranslation()

  return (
    <section className='max-w-2xl mx-auto rounded-lg w-full h-auto flex flex-col justify-center items-center mt-2 px-2'>
      <div className='w-full flex items-center justify-center gap-4 sm:gap-6'>
        <div className='flex items-center justify-center'>
          <AnimatedTooltip items={animatedTooltips} />
        </div>

        <div className='flex flex-col justify-center ml-1'>
          <ul className='flex items-center'>
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>
                <AiFillStar size={18} className='text-yellow-500' />
              </li>
            ))}
          </ul>
          <p className='text-start text-xs md:text-base font-bold tracking-wide max-w-lg break-words'>
            <span className='bg-primary text-white rounded-sm py-[1px] px-[1px] sm:px-[3px]'>
              {t('hero-parallax:TooltipParagraph')}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
