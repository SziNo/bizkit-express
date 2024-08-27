'use client'

import { useTranslation } from 'react-i18next'
import HoverBorderGradient from '../ui/hover-border-gradient'
import {
  FaTicketAlt,
  FaMapSigns,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'

const ButtonsContainer = ({ location = 'hero' }) => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 justify-start items-center text-xs sm:text-sm text-center tracking-wide uppercase'>
      {location === 'hero' ? (
        <>
          <HoverBorderGradient
            ariaLabel='Navigate to pricing section'
            containerClassName='w-auto py-1 sm:py-[5px] px-4 sm:px-6 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
            className='flex items-center text-xs sm:text-sm tracking-wider text-center'
            decoratorClassName='rounded-full'
            as='Link'
            href='/#pricing'
          >
            {t('buttons-container:BookingButtonLabel1')}
          </HoverBorderGradient>

          <HoverBorderGradient
            ariaLabel='Open online form in a new tab'
            containerClassName='w-auto py-1 sm:py-[5px] px-4 sm:px-6 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
            className='flex items-center text-xs sm:text-sm tracking-wider text-center'
            decoratorClassName='rounded-full'
            as='a'
            href='https://tally.so/r/mDNo6N'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('buttons-container:BookingButtonLabel2')}
          </HoverBorderGradient>
        </>
      ) : location === 'about' ? (
        <>
          <HoverBorderGradient
            ariaLabel='Navigate to Templates page'
            containerClassName='w-auto py-1 sm:py-[5px] px-4 sm:px-6 rounded-full'
            className='flex items-center gap-2 text-xs sm:text-sm tracking-wider text-center'
            decoratorClassName='rounded-full'
            as='Link'
            href='/templates'
          >
            {t('buttons-container:BookingButtonLabel4')}
            <FaMapSigns size={20} className='text-primary' />
          </HoverBorderGradient>

          <HoverBorderGradient
            ariaLabel='Open online form in a new tab'
            containerClassName='w-auto py-1 sm:py-[5px] px-4 sm:px-6 rounded-full'
            className='flex items-center gap-2 text-xs sm:text-sm tracking-wider text-center'
            decoratorClassName='rounded-full'
            as='a'
            href='https://tally.so/r/mDNo6N'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('buttons-container:BookingButtonLabel3')}
            <FaTicketAlt size={20} className='text-primary' />
          </HoverBorderGradient>
        </>
      ) : (
        <>
          <HoverBorderGradient
            ariaLabel='Navigate back to Home page'
            containerClassName='w-auto py-1 sm:py-[5px] px-4 sm:px-6 rounded-full'
            className='flex items-center gap-2 text-xs sm:text-sm tracking-wider text-center'
            decoratorClassName='rounded-full'
            as='Link'
            href='/'
          >
            <FaChevronLeft size={16} className='text-primary' />
            {t('buttons-container:BookingButtonLabel5')}
          </HoverBorderGradient>

          <HoverBorderGradient
            ariaLabel='Open online form in a new tab'
            containerClassName='w-auto py-1 sm:py-[5px] px-4 sm:px-6 rounded-full'
            className='flex items-center gap-2 text-xs sm:text-sm tracking-wider text-center'
            decoratorClassName='rounded-full'
            as='a'
            href='https://tally.so/r/mDNo6N'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('buttons-container:BookingButtonLabel6')}
            <FaChevronRight size={16} className='text-primary' />
          </HoverBorderGradient>
        </>
      )}
    </div>
  )
}

export default ButtonsContainer
