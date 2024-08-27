import initTranslations from '@/app/i18n'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { serviceList } from '@/lib/constants'

export const Services = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['features'])
  const translatedHeaderArr = t('features:ServicesHeader').split(' ')

  return (
    <article className='px-2 sm:py-4'>
      <div className='grid gap-8 place-items-center'>
        <div>
          <h2 className='text-center text-3xl md:text-5xl font-bold mb-4 md:mb-8 px-2 max-w-[100vw] sm:max-w-full break-words'>
            <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
              {translatedHeaderArr.slice(0, 1).join(' ')}{' '}
            </span>
            {translatedHeaderArr.slice(1).join(' ')}
          </h2>

          <div className='grid sm:grid-cols-2 gap-2 sm:gap-4'>
            {serviceList.map(({ icon }, index) => {
              const translatedCardHeader = `ServicesCardHeader${index + 1}`
              const translatedCardParagraph = `ServicesCardParagraph${
                index + 1
              }`

              return (
                <Card key={index} className='sm:py-2 lg:py-6'>
                  <CardHeader className='flex md:flex-row justify-start items-start gap-4'>
                    <div className='mt-2 bg-primary/90 p-1 rounded-2xl'>
                      {icon}
                    </div>
                    <div className=''>
                      <CardTitle className='py-2 sm:tracking-wide break-words'>
                        {t(`features:${translatedCardHeader}`)}
                      </CardTitle>
                      <CardDescription className='text-md text-gray-700 dark:text-gray-300 font-medium my-2 break-words'>
                        {t(`features:${translatedCardParagraph}`)}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>

        {/* <div className='hidden relative w-full h-full lg:flex'>
          <Image
            src='https://res.cloudinary.com/dc0nkgrxz/image/upload/f_auto,q_auto,w_700/v1711321510/Work/BizKit%20Express/FeaturesAndServices/bizkit-qa_cx9eej.jpg'
            alt='A fictional but friendly biscuitman working on a laptop'
            fill
            sizes='100vw'
            className='object-contain'
          />
        </div> */}
      </div>
    </article>
  )
}
