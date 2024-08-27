'use client'

import { useTranslation } from 'react-i18next'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import CustomLink from '../helpers/CustomLink'
import LanguageChanger from './LanguageChanger'

const ActionButtons = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='lg:hidden flex'>
        <Sheet>
          <SheetTrigger aria-label='toggle navigation menu' className=''>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <section className='flex flex-col gap-4 mt-10'>
                <div className='flex justify-center text-lg'>
                  <LanguageChanger />
                </div>

                <div className='flex justify-center text-lg'>
                  <ModeToggle />
                </div>

                <SheetClose className='flex justify-center text-lg' asChild>
                  <CustomLink href='/#features'>
                    {t('navbar:FeaturesButton')}
                  </CustomLink>
                </SheetClose>

                <SheetClose className='flex justify-center text-lg' asChild>
                  <CustomLink href='/#steps'>
                    {t('navbar:StepsButton')}
                  </CustomLink>
                </SheetClose>

                <SheetClose className='flex justify-center text-lg' asChild>
                  <CustomLink href='/#faq'>{t('navbar:FAQButton')}</CustomLink>
                </SheetClose>

                <SheetClose className='flex justify-center text-lg' asChild>
                  <CustomLink href='/#pricing'>
                    {t('navbar:PricingButton')}
                  </CustomLink>
                </SheetClose>

                <SheetClose className='flex justify-center text-lg' asChild>
                  <CustomLink href='/#contact'>
                    {t('navbar:ContactButton')}
                  </CustomLink>
                </SheetClose>

                <SheetClose className='flex justify-center text-lg' asChild>
                  <CustomLink href='/templates'>
                    {t('navbar:TemplatesButton')}
                  </CustomLink>
                </SheetClose>
              </section>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <div className='hidden lg:flex md:items-center md:gap-4'>
        <LanguageChanger />
        <ModeToggle />

        {/* <Button className='text-sm' size='sm' variant='outline'>
          Sign in
        </Button>

        <Button className='text-sm' size='sm'>
          Get Started
        </Button> */}
      </div>
    </>
  )
}

export default ActionButtons
