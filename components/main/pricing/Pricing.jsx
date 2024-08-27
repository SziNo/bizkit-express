import initTranslations from '@/app/i18n'
import dynamic from 'next/dynamic'

const PricingPlanContainer = dynamic(() => import('./PricingPlanContainer'), {
  ssr: false,
})

const Pricing = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['pricing'])
  const pricingHeaderArr = t('pricing:PricingHeader').split(' ')

  return (
    <section className='flex flex-col max-w-7xl mx-auto mt-10' id='pricing'>
      <h2 className='text-center text-3xl md:text-6xl font-bold mb-4 px-2 max-w-[100vw] sm:max-w-full break-words'>
        {pricingHeaderArr.slice(0, 1).join(' ')}{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          {pricingHeaderArr.slice(1).join(' ')}
        </span>
      </h2>

      <p
        className='max-w-6xl mx-auto text-base font-semibold leading-6 text-gray-700 dark:text-gray-300 px-4'
        style={{ whiteSpace: 'pre-line' }}
      >
        {t('pricing:PricingParagraph').replace(/\\n/g, '\n')}
      </p>

      <PricingPlanContainer />
    </section>
  )
}

export default Pricing
