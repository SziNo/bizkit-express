'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import i18nConfig from '@/i18nConfig'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Flag from 'react-world-flags'

export default function LanguageChanger() {
  const { i18n } = useTranslation()
  const currentLocale = i18n.language
  const router = useRouter()
  const currentPathname = usePathname()

  const handleChange = (newLocale) => {
    // set cookie for next-i18n-router
    const days = 30
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = date.toUTCString()
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname)
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
    }

    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='min-w-16 flex gap-1'>
          <Flag
            code={currentLocale === 'en' ? 'gb' : currentLocale}
            alt={
              currentLocale === 'en'
                ? 'GB flag'
                : `${currentLocale.toUpperCase()} flag`
            }
            className='max-w-[20px]'
          />
          {currentLocale}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='max-h-[12rem] overflow-y-auto'>
        <DropdownMenuItem onSelect={() => handleChange('en')}>
          <div className='flex items-center gap-2 max-w-[20px]'>
            <Flag code='gb' alt='GB flag' />
            English
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleChange('de')}>
          <div className='flex items-center gap-2 max-w-[20px]'>
            <Flag code='de' alt='DE flag' />
            Deutsch
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleChange('es')}>
          <div className='flex items-center gap-2 max-w-[20px]'>
            <Flag code='es' alt='ES flag' />
            Español
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleChange('fr')}>
          <div className='flex items-center gap-2 max-w-[20px]'>
            <Flag code='fr' alt='FR flag' />
            Français
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleChange('kr')}>
          <div className='flex items-center gap-2 max-w-[20px]'>
            <Flag code='kr' alt='KR flag' />
            Hangugeo
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleChange('jp')}>
          <div className='flex items-center gap-2 max-w-[20px]'>
            <Flag code='jp' alt='JP flag' />
            Nihongo
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleChange('it')}>
          <div className='flex items-center gap-2 max-w-[20px]'>
            <Flag code='it' alt='IT flag' />
            Italiano
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleChange('pl')}>
          <div className='flex items-center gap-2 max-w-[20px]'>
            <Flag code='pl' alt='PL flag' />
            Polski
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleChange('pt')}>
          <div className='flex items-center gap-2 max-w-[20px]'>
            <Flag code='pt' alt='PT flag' />
            Português
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleChange('cn')}>
          <div className='flex items-center gap-2 max-w-[20px]'>
            <Flag code='cn' alt='CN flag' />
            Zhōngwén
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
