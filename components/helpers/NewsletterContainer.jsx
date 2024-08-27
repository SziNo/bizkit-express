'use client'

import { useTranslation } from 'react-i18next'
import HoverBorderGradient from '../ui/hover-border-gradient'
import { BackgroundBeams } from '../ui/background-beams'

const NewsletterContainer = () => {
  const { t } = useTranslation()

  return (
    <div className='h-auto w-full bg-neutral-950 relative flex flex-col items-center justify-center py-6'>
      <div className='max-w-2xl mx-auto flex flex-col justify-center items-center gap-4 p-4 z-10 break-words'>
        <h1 className='relative text-2xl md:text-4xl tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold'>
          {t('contact:NewsletterHeader')}
        </h1>

        <p
          className='text-gray-200 max-w-2xl mx-auto my-2 text-sm sm:text-base text-center relative'
          style={{ whiteSpace: 'pre-line' }}
        >
          {t('contact:NewsletterParagraph')}
        </p>

        <div className='w-2/3 sm:w-1/2 flex items-center justify-center text-center'>
          <HoverBorderGradient
            ariaLabel='Register for the newsletter in a new tab'
            containerClassName='w-full py-[0.2rem] mt-2 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
            className='relative flex items-center space-x-2 text-sm sm:text-base font-semibold'
            decoratorClassName='rounded-xl'
            as='a'
            href='https://166b0707.sibforms.com/serve/MUIFACjaibMdKe4oph2ZOYmwL7wN8QSig4CfWg_E7jLju50QzHrpQwDEhCYwG7d8ePFNiSiT0J1vmIVXg66HRvveVy9V2kUoX6Nubkh9PONrrZCEXzrnQ-XcUmGNcpwg45D50vxGkjdUW4ZOANCm8obYh6mQr6i8DCOzvnUWnQ70ZhaxIYRDSFTMq1cNTXIqoUtrMfbBufOPnED2'
            target='_blank'
            rel='noopener noreferrer'
          >
            {t('contact:NewsletterButton')}
          </HoverBorderGradient>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  )
}

export default NewsletterContainer
