import initTranslations from '@/app/i18n'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

const FeatureCard = async ({ feature, index, locale }) => {
  const { t } = await initTranslations(locale, ['features'])
  const translatedCardHeader = `FeaturesCardHeader${index + 1}`
  const translatedCardParagraph = `FeaturesCardParagraph${index + 1}`

  return (
    <Card className='grid grid-rows-[auto,1fr,auto] sm:grid-rows-[1fr,1fr,auto]'>
      <CardHeader className='w-[100%] sm:w-full break-words'>
        <CardTitle className='sm:tracking-wide'>
          {t(`features:${translatedCardHeader}`)}
        </CardTitle>
      </CardHeader>

      <CardContent className='text-gray-700 dark:text-gray-300 font-medium'>
        {t(`features:${translatedCardParagraph}`)}
      </CardContent>

      <CardFooter>
        <div className='relative w-[200px] lg:w-[250px] h-48 mx-auto'>
          <Image
            src={feature.image}
            alt={`${feature.name} card image`}
            fill
            sizes='100vw'
            className='object-cover rounded-lg'
            unoptimized={true}
          />
        </div>
      </CardFooter>
    </Card>
  )
}

export default FeatureCard
