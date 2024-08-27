import initTranslations from '@/app/i18n'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { imageSliders } from '@/lib/constants'
import StaticImageBackground from '../helpers/StaticImageBackground'

const QuestionsAndAnswers = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['qa', 'steps'])
  const qaHeaderArr = t('qa:QAHeader').split(' ')

  return (
    <section className='max-w-7xl mx-auto' id='faq'>
      <StaticImageBackground
        className=''
        alt='FAQ image of some buscuitmen, some with question mark, some without it, and a huge question mark'
        image={imageSliders[2]}
        overlayClassName='bg-white/90 dark:bg-black/90'
      >
        <div className='flex flex-1 flex-col items-center z-50'>
          <h2 className='text-center text-3xl md:text-6xl font-bold py-4 md:py-8 px-2 max-w-[100vw] sm:max-w-full break-words'>
            {qaHeaderArr.slice(0, 1).join(' ')}{' '}
            <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
              {qaHeaderArr.slice(1).join(' ')}
            </span>
          </h2>

          <Accordion
            type='single'
            collapsible
            className='grid grid-cols-1 w-full sm:w-[70%] text-[#001427] dark:text-[#edf2f4] p-4 md:p-8'
          >
            {Array.from({ length: 11 }, (_, i) => {
              const translateQuestion = `qa:QAQuestion${i + 1}`
              const translateAnswer = `qa:QAAnswer${i + 1}`

              return (
                <AccordionItem
                  key={`item-${i + 1}`}
                  value={`item-${i + 1}`}
                  className={`${i !== 10 ? 'border-b' : ''}`}
                >
                  <AccordionTrigger>{t(translateQuestion)}</AccordionTrigger>
                  <AccordionContent
                    className='text-gray-700 dark:text-gray-300'
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {i === 0 ? (
                      <>
                        {t(translateAnswer).replace(/\\n/g, '\n')}
                        <br />
                        <br />
                        <a
                          href='https://stripe.com/en-hu/global'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='underline font-bold'
                        >
                          {t('steps:StripeGlobalAvailabilityText')}
                        </a>
                        <br />
                        <a
                          href='https://support.stripe.com/questions/prohibited-and-restricted-restricted-business-list-faqs'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='font-bold underline'
                        >
                          {t('steps:StripeRestrictedBusinessList')}
                        </a>
                      </>
                    ) : (
                      t(translateAnswer)
                    )}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </StaticImageBackground>
    </section>
  )
}

export default QuestionsAndAnswers
