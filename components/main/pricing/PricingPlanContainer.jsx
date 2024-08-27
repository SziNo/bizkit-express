'use client'

import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { pricingPlans } from '@/lib/constants'
import CurrencyChanger from './CurrencyChanger'
import PlanTypeRadioButtons from './PlanTypeRadioButtons'
import PricingPlanCard from './PricingPlanCard'

const PricingPlanContainer = () => {
  const { t } = useTranslation()
  const [planType, setPlanType] = useState('monthly')
  const [currency, setCurrency] = useState('EUR')

  const handlePlanType = (e) => {
    setPlanType(e.target.value)
  }

  return (
    <section>
      <div className='flex flex-col sm:flex-row sm:items-center justify-center m-4 pt-4'>
        <CurrencyChanger currency={currency} setCurrency={setCurrency} />
        <PlanTypeRadioButtons
          planType={planType}
          handlePlanType={handlePlanType}
        />
      </div>

      {planType === 'monthly' ? (
        <p className='sm:text-center text-[#001427] dark:text-[#edf2f4] font-bold tracking-wide my-3 px-4 max-w-sm sm:max-w-full break-words'>
          {t('pricing:MonthlyParagraph')}
        </p>
      ) : planType === 'yearly' ? (
        <p className='sm:text-center text-[#001427] dark:text-[#edf2f4] font-bold tracking-wide my-3 px-4 max-w-sm sm:max-w-full break-words'>
          {t('pricing:YearlyParagraph')}
        </p>
      ) : (
        <p className='sm:text-center text-[#001427] dark:text-[#edf2f4] font-bold tracking-wide my-3 px-4 max-w-sm sm:max-w-full break-words'>
          {t('pricing:LifetimeParagraph')}
        </p>
      )}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4'>
        {pricingPlans.map((plan, index) => (
          <PricingPlanCard
            key={plan.title}
            plan={plan}
            index={index}
            planType={planType}
            currency={currency}
          />
        ))}
      </div>
    </section>
  )
}

export default PricingPlanContainer
