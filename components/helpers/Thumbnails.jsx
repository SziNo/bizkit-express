'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { images } from '@/lib/constants'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function Thumbnails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <section className='my-8'>
      <div className='px-4'>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className='w-full sm:w-3/4'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-[160px] md:h-[400px] w-full items-center justify-center'>
                <a href={image.src} target='_blank' rel='noopener noreferrer'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes='100vw'
                    className='block h-full w-full object-contain'
                    unoptimized={true}
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className='thumbs mt-3 h-32 w-full rounded-lg'
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <button className='flex h-full w-full items-center justify-center'>
                <div className='block h-full w-full'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes='100vw'
                    className='object-cover'
                    unoptimized={true}
                  />
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
