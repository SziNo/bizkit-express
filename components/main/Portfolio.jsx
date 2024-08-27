import initTranslations from '@/app/i18n'
import Thumbnails from '../helpers/Thumbnails'

const Portfolio = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['portfolio'])
  const portfolioHeaderArr = t('portfolio:PortfolioHeader').split(' ')

  return (
    <section className='max-w-7xl mx-auto mb-2 mt-8 md:mt-12'>
      <h2
        className='text-center text-3xl md:text-6xl font-bold px-2 max-w-[100vw] sm:max-w-full break-words'
        id='portfolio'
      >
        {portfolioHeaderArr.slice(0, 1).join(' ')}{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          {portfolioHeaderArr.slice(1).join(' ')}
        </span>
      </h2>

      <p
        className='max-w-6xl mx-auto text-base font-medium leading-6 text-gray-700 dark:text-gray-300 p-4'
        style={{ whiteSpace: 'pre-line' }}
      >
        {t('portfolio:PortfolioParagraph').replace(/\\n/g, '\n')}{' '}
        <a
          href='https://www.goodfirms.co/resources/web-design-research-small-business'
          target='_blank'
          rel='noopener noreferrer'
          className='font-medium underline'
        >
          {t('portfolio:PortfolioHere')}
        </a>
      </p>

      <div className='relative w-full'>
        <Thumbnails />
      </div>
    </section>
  )
}

export default Portfolio
