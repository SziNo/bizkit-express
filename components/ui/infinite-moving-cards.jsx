'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState, useRef } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { monogramMaker } from '@/lib/constants'

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)

  useEffect(() => {
    addAnimation()
  }, [])

  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        )
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item) => (
          <li
            className='w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]'
            style={{
              background:
                'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
            }}
            key={item.name}
          >
            <blockquote className='flex flex-col h-full'>
              <div
                aria-hidden='true'
                className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
              />

              <p className='flex flex-1 relative z-20 text-sm leading-[1.6] font-normal'>
                {item.quote}
              </p>

              <div className='relative z-20 mt-6 flex gap-2 items-center'>
                <Avatar>
                  <AvatarImage src={item.imageSrc} alt={item.name} />
                  <AvatarFallback>{monogramMaker(item.name)}</AvatarFallback>
                </Avatar>
                <div className='flex flex-col'>
                  <span className=' text-sm leading-[1.6] italic'>
                    {item.name}
                  </span>
                  <span className=' text-sm leading-[1.6] text-gray-400 font-normal'>
                    {item.title}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
