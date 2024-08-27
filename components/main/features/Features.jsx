import initTranslations from '@/app/i18n'
import FeaturesContainer from './FeaturesContainer'
import { Services } from './Services'

const Features = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['features'])
  const translatedHeaderArr = t('features:FeaturesHeader').split(' ')

  return (
    <section
      className='max-w-7xl mx-auto flex flex-col items-center'
      id='features'
    >
      <h2 className='text-center text-3xl md:text-6xl font-bold py-4 px-2 max-w-[100vw] sm:max-w-full break-words'>
        {translatedHeaderArr.slice(0, 2).join(' ')}{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          {translatedHeaderArr.slice(2, 5).join(' ')}{' '}
        </span>{' '}
        {translatedHeaderArr.slice(5).join(' ')}
      </h2>

      <FeaturesContainer locale={locale} />
      <Services locale={locale} />
    </section>
  )
}

export default Features
