'use client'

import { useTranslation } from 'react-i18next'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import CustomLink from '@/components/helpers/CustomLink'

const StepCard = ({ step, inView }) => {
  const { t } = useTranslation()
  const translateHeader = `StepDescriptionHeader${step.id}`
  const translateDescription = `StepDescriptionParagraph${step.id}`

  return (
    <VerticalTimelineElement
      visible={inView}
      contentStyle={{
        background: '#6420AA',
        color: '#fefae0',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #6420AA' }}
      iconStyle={{ background: step.iconBg }}
      icon={step.icon}
      iconClassName='text-[#fefae0]'
    >
      <div>
        <h3 className='text-2xl font-bold mb-4'>
          {t(`steps:${translateHeader}`)}
        </h3>
        <p className='text-lg font-semibold'>
          {step.id === 1 ? (
            <>
              {t(`steps:${translateDescription}/A`)}{' '}
              <CustomLink href='/#faq' className='underline font-bold'>
                {t('navbar:FAQButton')}
              </CustomLink>{' '}
              {t(`steps:${translateDescription}/B`)}{' '}
              <CustomLink href='/templates' className='underline font-bold'>
                {t('navbar:TemplatesButton')}
              </CustomLink>{' '}
              {t(`steps:${translateDescription}/C`)}{' '}
              <a
                href='https://tally.so/r/mDNo6N'
                target='_blank'
                rel='noopener noreferrer'
                className='underline font-bold'
              >
                {t('steps:OrderFormLink')}
              </a>{' '}
              {t(`steps:${translateDescription}/D`)}
            </>
          ) : step.id === 4 ? (
            <>
              {t(`steps:${translateDescription}`)}
              <br />
              <br />
              <a
                href='https://stripe.com/en-hu/global'
                target='_blank'
                rel='noopener noreferrer'
                className='font-bold underline'
              >
                {t('steps:StripeGlobalAvailabilityText')}
              </a>
              <br />
              <a
                href='https://support.stripe.com/questions/prohibited-and-restricted-restricted-business-list-faqs'
                target='_blank'
                rel='noopener noreferrer'
                className='font-bold underline'
              >
                {t('steps:StripeRestrictedBusinessList')}
              </a>
            </>
          ) : (
            t(`steps:${translateDescription}`)
          )}
        </p>
      </div>
    </VerticalTimelineElement>
  )
}

export default StepCard
