'use client'

import { useTranslation } from 'react-i18next'
import { CardBody, CardContainer, CardItem } from '../ui/3d-card'
import { CopyToClipboard } from './CopyToClipboard'
import { socialLinks } from '@/lib/constants'
import { FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'

const ThreeDCard = () => {
  const { t } = useTranslation()

  return (
    <CardContainer className=''>
      <CardBody className='w-auto sm:w-[30rem] h-auto rounded-xl p-6 flex flex-col relative group/card dark:hover:shadow-2xl border dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1]'>
        <CardItem
          as='h3'
          translateZ='30'
          className='text-center text-xl sm:text-2xl font-bold text-neutral-600 dark:text-white self-center'
        >
          {t('contact:3dCardTitle')}
        </CardItem>
        <CardItem
          as='p'
          translateZ='30'
          className='text-gray-700 dark:text-gray-300 text-sm font-semibold max-w-sm my-2 md:mb-6 text-center self-center'
        >
          {t('contact:3dCardDescription')}
        </CardItem>
        <CardItem translateZ='40' className='w-full mt-4'>
          <div className='relative h-40 sm:h-48 md:h-60'>
            <Image
              src='https://res.cloudinary.com/dc0nkgrxz/image/upload/f_auto/v1712601619/Work/BizKit%20Express/Contact/be-logo_tqgzjs.png'
              alt='BizKit Express Logo which depicts a locomotive'
              fill
              sizes='100vw'
              className='object-cover rounded-xl group-hover/card:shadow-xl'
              unoptimized={true}
            />
          </div>
        </CardItem>

        <CardItem
          translateZ='30'
          className='w-full flex flex-col items-center text-sm mt-4 md:mt-6'
        >
          <CardItem className='flex item-center gap-1 px-4 py-2 text-xs md:text-sm'>
            <div>
              <FaEnvelope className='text-primary mt-[2px]' size={16} />
            </div>
            <CopyToClipboard>info@bizkitexpress.com</CopyToClipboard>
          </CardItem>

          <CardItem className='w-full'>
            <ul className='flex items-center justify-center gap-2 mt-6'>
              {socialLinks.map((link, index) => (
                <li key={index} title={link.name}>
                  <a
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center justify-center text-white transition-all duration-200 bg-gray-700 rounded-full w-9 h-9 p-2 hover:bg-primary'
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </CardItem>
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}

export default ThreeDCard
