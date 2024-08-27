import initTranslations from '@/app/i18n'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import { testimonials } from '@/lib/constants'

const Testimonials = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['testimonials'])
  const testimonialsHeaderArr = t('testimonials:TestimonialsHeader').split(' ')

  return (
    <section className='max-w-7xl mx-auto py-4' id='testimonials'>
      <div className='px-4 sm:px-6 lg:px-8 max-w-full'>
        <div className='flex flex-col items-center'>
          <h2 className='text-center text-3xl md:text-6xl font-bold pt-2 md:pt-8 max-w-[100vw] sm:max-w-full break-words'>
            {testimonialsHeaderArr.slice(0, 2).join(' ')}{' '}
            <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
              {testimonialsHeaderArr.slice(2, 4).join(' ')}{' '}
            </span>
            {testimonialsHeaderArr.slice(4).join(' ')}
          </h2>

          <div className='relative mt-10 mb-4 md:order-2'>
            <div className='absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6'>
              <div
                className='w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter'
                style={{
                  background:
                    'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
                }}
              />
            </div>

            <ul className='relative grid max-w-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto md:max-w-none lg:gap-10'>
              {testimonials.map(({ image, name, position, comment }) => (
                <li
                  className='flex flex-col overflow-hidden shadow-xl rounded-lg border'
                  key={name}
                >
                  <div className='flex flex-col justify-between flex-1 bg-primary-foreground dark:bg-secondary p-4 lg:p-6'>
                    <div className='flex-1'>
                      <ul className='flex items-center'>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <li key={i}>
                            <AiFillStar size={22} className='text-yellow-500' />
                          </li>
                        ))}
                      </ul>

                      <blockquote className='flex-1 mt-6'>
                        <p className='text-lg leading-relaxed'>{comment}</p>
                      </blockquote>
                    </div>

                    <div className='flex items-center mt-6'>
                      <div className='relative flex-shrink-0 h-12 w-12'>
                        <Image
                          src={image}
                          alt={`${name}'s avatar`}
                          fill
                          sizes='100vw'
                          className='object-cover rounded-full'
                          unoptimized={true}
                        />
                      </div>
                      <div className='ml-4'>
                        <p className='text-base font-bold font-pj'>{name}</p>
                        <p className='mt-0.5 text-sm font-pj text-gray-600 dark:text-gray-400'>
                          {position}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
