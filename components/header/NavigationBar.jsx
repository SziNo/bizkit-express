'use client'

import { useTranslation } from 'react-i18next'
import * as React from 'react'
import CustomLink from '../helpers/CustomLink'
import Logo from './Logo'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { socialLinks } from '@/lib/constants'

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {children}
            </div>
            <p className='text-xs font-small h-full pl-1'>{title}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'

const NavigationBar = () => {
  const { t } = useTranslation()

  return (
    <NavigationMenu>
      <NavigationMenuList className='flex md:pr-4'>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='px-2'>
            {t('navbar:SocialMediaButton')}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className='grid gap-3 p-6 w-[170px] md:w-[430px] lg:w-[500px] grid-cols-1 md:grid-cols-[.5fr_1fr]'>
              <div className='hidden md:flex md:row-span-3'>
                <NavigationMenuLink
                  className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                  href='/'
                  asChild
                >
                  <div className='flex flex-col'>
                    <Logo />
                    <h3 className='text-xs text-center mt-4 font-medium'>
                      BizKit Express
                    </h3>
                  </div>
                </NavigationMenuLink>
              </div>
              <ul className='grid grid-cols-1 md:grid-cols-2 md:gap-2'>
                {socialLinks.map((link, index) => (
                  <ListItem
                    key={index}
                    title={link.name}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-1'
                  >
                    <div className='text-primary'>{link.icon}</div>
                  </ListItem>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList className='hidden lg:flex md:space-x-4 sticky z-50'>
        <NavigationMenuItem>
          <CustomLink href='/#features' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('navbar:FeaturesButton')}
            </NavigationMenuLink>
          </CustomLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <CustomLink href='/#steps' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('navbar:StepsButton')}
            </NavigationMenuLink>
          </CustomLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <CustomLink href='/#faq' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('navbar:FAQButton')}
            </NavigationMenuLink>
          </CustomLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <CustomLink href='/#pricing' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('navbar:PricingButton')}
            </NavigationMenuLink>
          </CustomLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <CustomLink href='/#contact' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('navbar:ContactButton')}
            </NavigationMenuLink>
          </CustomLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <CustomLink href='/templates' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {t('navbar:TemplatesButton')}
            </NavigationMenuLink>
          </CustomLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default NavigationBar
