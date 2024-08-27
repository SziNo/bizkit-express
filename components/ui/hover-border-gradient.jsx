import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CustomLink from '../helpers/CustomLink'

export function HoverBorderGradient({
  children,
  containerClassName,
  decoratorClassName,
  className,
  as: Tag = 'button',
  duration = 1,
  clockwise = true,
  ariaLabel = 'HTML Element',
  ...props
}) {
  const [hovered, setHovered] = useState(false)
  const [direction, setDirection] = useState('TOP')

  const rotateDirection = (currentDirection) => {
    const directions = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT']
    const currentIndex = directions.indexOf(currentDirection)
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length
    return directions[nextIndex]
  }

  const movingMap = {
    TOP: 'radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
    LEFT: 'radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
    BOTTOM:
      'radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
    RIGHT:
      'radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)',
  }

  const highlight =
    'radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)'

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState))
      }, duration * 1000)
      return () => clearInterval(interval)
    }
  }, [hovered])

  return (
    <>
      {Tag === 'Link' ? (
        <CustomLink {...props} aria-label={ariaLabel}>
          <div
            onMouseEnter={(event) => {
              setHovered(true)
            }}
            onMouseLeave={() => setHovered(false)}
            className={`relative flex content-center bg-[#B5C0D0] dark:bg-[#31363F] text-[#31363F] dark:text-[#FEFBF6] transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-1 decoration-clone w-fit hover:scale-95 ${containerClassName}`}
          >
            <div
              className={`w-auto z-10 p-2 rounded-[inherit] font-semibold uppercase ${className}`}
            >
              {children}
            </div>
            <motion.div
              className='flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]'
              style={{
                filter: 'blur(2px)',
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
              initial={{ background: movingMap[direction] }}
              animate={{
                background: hovered
                  ? [movingMap[direction], highlight]
                  : movingMap[direction],
              }}
              transition={{ ease: 'linear', duration: duration ?? 1 }}
            />
            <div
              className={`bg-[#FEFBF6] dark:bg-[#31363F] absolute z-1 flex-none inset-[2px] ${decoratorClassName}`}
            />
          </div>
        </CustomLink>
      ) : (
        <Tag
          aria-label={ariaLabel}
          onMouseEnter={(event) => {
            setHovered(true)
          }}
          onMouseLeave={() => setHovered(false)}
          className={`relative flex content-center bg-[#B5C0D0] dark:bg-[#31363F] text-[#31363F] dark:text-[#FEFBF6] transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-1 decoration-clone w-fit hover:scale-95 ${containerClassName}`}
          {...props}
        >
          <div
            className={`w-auto z-10 p-2 rounded-[inherit] font-semibold uppercase ${className}`}
          >
            {children}
          </div>
          <motion.div
            className='flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]'
            style={{
              filter: 'blur(2px)',
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
            initial={{ background: movingMap[direction] }}
            animate={{
              background: hovered
                ? [movingMap[direction], highlight]
                : movingMap[direction],
            }}
            transition={{ ease: 'linear', duration: duration ?? 1 }}
          />
          <div
            className={`bg-[#FEFBF6] dark:bg-[#31363F] absolute z-1 flex-none inset-[2px] ${decoratorClassName}`}
          />
        </Tag>
      )}
    </>
  )
}

export default HoverBorderGradient
