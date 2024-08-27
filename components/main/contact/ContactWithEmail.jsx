import initTranslations from '@/app/i18n'
import LoadingComponent from '@/components/helpers/LoadingComponent'
import NewsletterContainer from '@/components/helpers/NewsletterContainer'
import dynamic from 'next/dynamic'

const ThreeDCard = dynamic(() => import('@/components/helpers/ThreeDCard'), {
  ssr: false,
  loading: () => <LoadingComponent />,
})
const ContactForm = dynamic(() => import('@/components/helpers/ContactForm'), {
  ssr: false,
  loading: () => <LoadingComponent />,
})

const ContactWithEmail = async ({ locale }) => {
  const { t } = await initTranslations(locale, ['contact'])
  const contactHeaderArr = t('contact:ContactHeader').split(' ')

  return (
    <section
      id='contact'
      className='max-w-7xl mx-auto bg-muted/50 border rounded-t-lg m-4 mb-0 pt-4'
    >
      <h2 className='text-center text-3xl md:text-6xl font-bold px-2 md:px-8 max-w-[100vw] sm:max-w-full break-words'>
        {contactHeaderArr.slice(0, 1).join(' ')}{' '}
        <span className='bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text'>
          {contactHeaderArr.slice(1).join(' ')}
        </span>
      </h2>

      <div className='flex flex-col lg:flex-row gap-4 lg:gap-0 p-1 my-4'>
        <div className='relative flex flex-col w-full lg:w-2/5 mx-auto'>
          <ThreeDCard />
        </div>
        <div className='relative w-full max-w-sm lg:w-2/5 mx-auto'>
          <ContactForm />
        </div>
      </div>

      <NewsletterContainer />
    </section>
  )
}

export default ContactWithEmail
