import initTranslations from '@/app/i18n'
import { ProsAndCons } from '../helpers/ProsAndcons'
import ButtonsContainer from '../helpers/ButtonsContainer'

const About = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['about'])
  const aboutUsHeaderArr = t('about:AboutUsHeader').split(' ')

  return (
    <article
      id='introduction'
      className='max-w-7xl mx-auto flex flex-col justify-center items-start bg-muted/50 border rounded-lg m-4 py-6'
    >
      <section className='w-full max-w-full px-4 flex flex-col justify-center gap-2'>
        <ProsAndCons locale={locale} />

        <div className='flex flex-col justify-between pt-4 mt-4 border-t dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] break-words'>
          <h2 className='text-center text-3xl md:text-6xl font-bold pb-3 sm:pb-6'>
            <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
              {aboutUsHeaderArr.slice(0, 1).join(' ')}{' '}
            </span>
            {aboutUsHeaderArr.slice(1).join(' ')}
          </h2>

          <p
            className='sm:text-xl font-medium leading-normal my-4 max-w-6xl mx-auto'
            style={{ whiteSpace: 'pre-line' }}
          >
            {t('about:AboutUsParagraph').replace(/\\n/g, '\n')}
          </p>
        </div>

        <div className='flex justify-center items-center'>
          <ButtonsContainer location='about' />
        </div>
      </section>
    </article>
  )
}

export default About
