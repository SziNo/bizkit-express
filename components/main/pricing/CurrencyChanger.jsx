'use client'

import { useTranslation } from 'react-i18next'
import { Label } from '@/components/ui/label'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import Flag from 'react-world-flags'

const CurrencyChanger = ({ currency, setCurrency }) => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col sm:flex-row sm:items-center mb-3 sm:mb-0'>
      <Label
        htmlFor='currency-selector'
        className='font-bold text-[1rem] ml-2 underline'
      >
        {t('pricing:PreferredCurrency')}
      </Label>
      <DropdownMenu id='currency-selector'>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            className='min-w-16 max-w-20 flex gap-1 m-2'
          >
            <Flag
              code={
                currency === 'EUR' ? 'EU' : currency === 'GBP' ? 'gb' : 'us'
              }
              alt={
                currency === 'EUR'
                  ? 'Euro'
                  : currency === 'GBP'
                  ? 'Pound Sterling'
                  : 'US Dollar'
              }
              className='max-w-[20px]'
            />
            {currency}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => setCurrency('EUR')}>
            <div className='flex items-center gap-2 max-w-[20px]'>
              <Flag code='EU' alt='Euro' />
              Euro
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setCurrency('GBP')}>
            <div className='flex items-center gap-2 max-w-[20px]'>
              <Flag code='gb' alt='Pound Sterling' />
              GBP
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setCurrency('USD')}>
            <div className='flex items-center gap-2 max-w-[20px]'>
              <Flag code='us' alt='US Dollar' />
              USD
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default CurrencyChanger
