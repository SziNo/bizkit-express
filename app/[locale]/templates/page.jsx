import initTranslations from '@/app/i18n'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import ButtonsContainer from '@/components/helpers/ButtonsContainer'
import { flexibleTemplates, exclusiveTemplates } from '@/lib/constants'

export const metadata = () => {
  return {
    title: 'Templates',
  }
}

const page = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ['templates', 'navbar'])

  return (
    <section className='max-w-7xl mx-auto flex flex-col p-4'>
      <h2 className='text-center text-2xl md:text-4xl font-bold mb-4 break-words'>
        {t('navbar:TemplatesButton')}
      </h2>

      <h3 className='text-xl md:text-2xl font-semibold my-4 px-4 md:px-6 break-words'>
        {t('templates:ExclusiveTemplateTitle')}
      </h3>

      <p
        className='max-w-6xl text-gray-700 dark:text-gray-300 font-medium px-4 md:px-6 break-words'
        style={{ whiteSpace: 'pre-line' }}
      >
        {t('template:ExclusiveTemplateParagraph').replace(/\\n/g, '\n')}
      </p>

      <HoverEffect array={exclusiveTemplates} />

      <h3 className='text-xl md:text-2xl font-semibold my-4 px-4 md:px-6 break-words'>
        {t('templates:FlexibleTemplateTitle')}
      </h3>

      <p
        className='max-w-6xl text-gray-700 dark:text-gray-300 font-medium px-4 md:px-6 break-words'
        style={{ whiteSpace: 'pre-line' }}
      >
        {t('template:FlexibleTemplateParagraph').replace(/\\n/g, '\n')}
      </p>

      <HoverEffect array={flexibleTemplates} />

      <div className='flex justify-center'>
        <ButtonsContainer location='template' />
      </div>
    </section>
  )
}

export default page
