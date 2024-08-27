'use client'

import { useTranslation } from 'react-i18next'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { FaCheck } from 'react-icons/fa'
import HoverBorderGradient from '@/components/ui/hover-border-gradient'
import { calculateBasicPrice } from '@/lib/constants'

const PricingPlanCard = ({ plan, index, planType, currency }) => {
  const { t } = useTranslation()
  const pricePlanDescription = t(`pricing:PricePlanDescription${index + 1}`)
  const formattedTitle = plan.title.trim()

  const planFeatures = [
    t(`pricing:${formattedTitle}Feature1`),
    t(`pricing:${formattedTitle}Feature2`),
    t(`pricing:${formattedTitle}Feature3`),
    t(`pricing:${formattedTitle}Feature4`),
    t(`pricing:${formattedTitle}Feature5`),
    t(`pricing:${formattedTitle}Feature6`),
    t(`pricing:${formattedTitle}Feature7`),
    t(`pricing:${formattedTitle}Feature8`),
    t(`pricing:${formattedTitle}Feature9`),
  ].filter((planFeature) => !planFeature.startsWith(formattedTitle))

  const price =
    planType === 'monthly'
      ? plan.prices[currency].monthly
      : planType === 'yearly'
      ? plan.prices[currency].yearly
      : plan.prices[currency].lifetime

  const subscriptionType =
    planType === 'monthly'
      ? t('pricing:PerMonth')
      : planType === 'yearly'
      ? t('pricing:PerYear')
      : ''

  const linkType =
    planType === 'monthly'
      ? plan.urls[currency].monthly
      : planType === 'yearly'
      ? plan.urls[currency].yearly
      : plan.urls[currency].lifetime

  return (
    <Card className='relative h-full flex flex-col border border-var(--border) shadow-md p-1 md:p-3 rounded-3xl'>
      <CardHeader>
        <CardTitle className='text-lg md:text-xl font-semibold leading-5'>
          {plan.title}
        </CardTitle>
        {plan.mostPopular && (
          <p className='absolute top-0 right-6 md:right-8 -translate-y-1/2 bg-primary text-white px-3 py-0.5 text-xs font-semibold tracking-wide rounded-full shadow-md'>
            {t('pricing:BestValue')}
          </p>
        )}
        <Separator />
        <CardDescription className='h-[4.5rem] mt-4 text-gray-700 dark:text-gray-300 text-sm font-semibold'>
          {t(pricePlanDescription)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col justify-center p-3 sm:p-4 mt-2 sm:mt-0 border border-secondary-foreground rounded-lg'>
          <div className='flex items-end flex-wrap gap-2'>
            <p>
              <span className='text-2xl sm:text-4xl'>{price}</span>
              <span className='ml-1 text-xs sm:text-base'>
                {subscriptionType}
              </span>
            </p>
            <p className='text-base sm:text-lg text-gray-700 dark:text-gray-300 font-medium line-through'>
              {calculateBasicPrice(price)}
            </p>
          </div>

          <p className='text-sm text-gray-700 dark:text-gray-300 font-medium'>
            {t('pricing:TaxIncluded')}
          </p>
        </div>
      </CardContent>
      <CardFooter className='flex-1 flex-col items-start'>
        <HoverBorderGradient
          ariaLabel='Link to Stripe via payment links'
          containerClassName='w-full py-[0.2rem] rounded-full'
          className='flex items-center text-xs sm:text-sm tracking-wider text-center'
          decoratorClassName='rounded-full'
          as='a'
          href={linkType}
          target='_blank'
          rel='noopener noreferrer'
        >
          {planType === 'lifetime'
            ? t('pricing:PricingButtonAlternative')
            : t('pricing:PricingButton')}
        </HoverBorderGradient>

        <ul className='h-full mt-6 space-y-2 md:space-y-4'>
          {planFeatures.map((feature) => (
            <li
              key={feature}
              className='flex gap-2 text-sm font-medium leading-2 sm:leading-4 md:leading-5'
            >
              <div className='mt-[4px]'>
                <FaCheck color='green' size={13} />
              </div>
              {feature}
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  )
}

export default PricingPlanCard
