import { cn } from '@/lib/utils'
import Image from 'next/image'

const StaticImageBackground = ({
  image,
  alt,
  children,
  overlay = true,
  priority = false,
  overlayClassName,
  className,
}) => {
  return (
    <div
      className={cn(
        'overflow-hidden h-full max-w-full relative flex',
        className
      )}
      style={{
        perspective: '1000px',
      }}
    >
      {children}
      {overlay && (
        <div className={cn('absolute inset-0 z-40', overlayClassName)} />
      )}
      <div className='image h-full w-full absolute inset-0 aspect-w-16 aspect-h-9'>
        <Image
          src={image}
          alt={alt}
          fill
          sizes='100vw'
          className='object-cover'
          priority={priority}
          unoptimized={true}
        />
      </div>
    </div>
  )
}

export default StaticImageBackground
