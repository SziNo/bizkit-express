import CustomLink from '../helpers/CustomLink'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='flex justify-center hover:scale-95 transform transition-transform'>
      <CustomLink href='/'>
        <div className='relative w-12 h-12'>
          <Image
            src='https://res.cloudinary.com/dc0nkgrxz/image/upload/f_auto,q_auto,w_60/v1712544553/Work/BizKit%20Express/Logos/be-logo_qycokd.png'
            alt='BizKit Express Logo'
            fill
            sizes='100vw'
            className='object-contain rounded-lg'
            priority={true}
            unoptimized={true}
          />
        </div>
      </CustomLink>
    </div>
  )
}

export default Logo
