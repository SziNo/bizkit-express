import initTranslations from '@/app/i18n'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { Separator } from '../ui/separator'

export const ProsAndCons = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['about'])
  const translatedHeaderArr = t('about:ProAndConsHeader').split(' ')

  return (
    <section className='w-full flex flex-col justify-center rounded-lg gap-4'>
      <h2 className='text-center text-3xl md:text-5xl font-bold mb-4 sm:mb-10 max-w-[100vw] sm:max-w-full break-words'>
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          {translatedHeaderArr.slice(0, 7).join(' ')}{' '}
        </span>
        {translatedHeaderArr.slice(7).join(' ')}
      </h2>

      <div className='flex flex-col gap-3 sm:flex-row w-full'>
        <div className='flex flex-col justify-center items-center sm:w-1/2'>
          <h3 className='self-center sm:self-start font-bold mb-3 uppercase tracking-wider'>
            {t('about:ProsTitle')}:
          </h3>
          <ul className='flex flex-col gap-1 flex-1 max-w-xl break-words'>
            {Array.from({ length: 8 }, (_, index) => {
              const proParagraph = `about:ProParagraph${index + 1}`

              return (
                <li
                  key={index}
                  className='flex flex-col items-start gap-1 mt-1'
                >
                  <div className='flex gap-1'>
                    <div className='mr-2 mt-[6px]'>
                      <FaCheck size={16} className='text-green-500' />
                    </div>
                    <p className='text-start'>{t(proParagraph)}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        <Separator className='sm:hidden my-4' />

        <div className='flex flex-col justify-center items-center sm:w-1/2 border-l-0 sm:border-l-2 pl-0 sm:pl-6'>
          <h3 className='self-center sm:self-start font-bold mb-3 uppercase tracking-wider'>
            {t('about:ConsTitle')}:
          </h3>
          <ul className='flex flex-col gap-1 flex-1 max-w-xl break-words'>
            {Array.from({ length: 4 }, (_, index) => {
              const conParagraph = `about:ConParagraph${index + 1}`

              return (
                <li
                  key={index}
                  className='flex flex-col items-start gap-1 mt-1'
                >
                  <div className='flex gap-1'>
                    <div className='mr-2 mt-[6px]'>
                      <FaTimes size={20} className='text-red-500' />
                    </div>
                    <p className='text-start'>{t(conParagraph)}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
