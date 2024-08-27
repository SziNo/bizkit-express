import { features } from '@/lib/constants'
import FeatureCard from './FeatureCard'

const FeaturesContainer = ({ locale }) => {
  return (
    <article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6 p-2'>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          feature={feature}
          index={index}
          locale={locale}
        />
      ))}
    </article>
  )
}

export default FeaturesContainer
