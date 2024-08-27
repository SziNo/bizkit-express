import CustomLink from '../helpers/CustomLink'
import { footerNavigations } from '@/lib/constants'

const Footer = () => {
  return (
    <footer className='border-t-[1px] flex justify-between items-center py-4 px-2 md:px-8 md:text-xl'>
      <div className='text-xs md:text-sm'>@ 2024 BizKit Express.</div>
      <div className='flex gap-2 md:gap-3 text-gray-600 dark:text-gray-400 text-xs md:text-sm font-semibold'>
        {footerNavigations.map((nav, index) => (
          <CustomLink key={index} href={nav.href} className='hover:underline'>
            {nav.text}
          </CustomLink>
        ))}
      </div>
    </footer>
  )
}

export default Footer
