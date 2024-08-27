'use client'

import { useTranslation } from 'react-i18next'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const PlanTypeRadioButtons = ({ planType, handlePlanType }) => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col sm:flex-row sm:items-center ml-2 sm:ml-4 md:ml-6'>
      <Label htmlFor='plan-period' className='font-bold text-[1rem] underline'>
        {t('pricing:PlanPeriod')}
      </Label>
      <RadioGroup
        id='plan-period'
        defaultValue={planType}
        className='flex flex-col sm:flex-row sm:items-center p-4'
      >
        <div className='flex items-center space-x-2'>
          <RadioGroupItem
            value='monthly'
            id='r1'
            onClick={handlePlanType}
            name='monthly'
          />
          <Label htmlFor='r1' className='cursor-pointer'>
            {t('pricing:PriceContainerMonthly')}
          </Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem
            value='yearly'
            id='r2'
            onClick={handlePlanType}
            name='yearly'
          />
          <Label htmlFor='r2' className='cursor-pointer'>
            {t('pricing:PriceContainerYearly')}
          </Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem
            value='lifetime'
            id='r3'
            onClick={handlePlanType}
            name='lifetime'
          />
          <Label htmlFor='r3' className='cursor-pointer'>
            {t('pricing:PriceContainerLifetime')}
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}

export default PlanTypeRadioButtons
