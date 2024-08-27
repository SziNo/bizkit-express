import dynamic from 'next/dynamic'
import 'react-vertical-timeline-component/style.min.css'

const HeroParallaxSection = dynamic(() =>
  import('@/components/main/HeroParallaxSection')
)
const About = dynamic(() => import('@/components/main/About'))
const Features = dynamic(() => import('@/components/main/features/Features'))
const Pricing = dynamic(() => import('@/components/main/pricing/Pricing'))
const Testimonials = dynamic(() => import('@/components/main/Testimonials'))
const QuestionsAndAnswers = dynamic(() =>
  import('@/components/main/QuestionsAndAnswers')
)
const Steps = dynamic(() => import('@/components/main/steps/Steps'))
const Portfolio = dynamic(() => import('@/components/main/Portfolio'))
const ContactWithEmail = dynamic(() =>
  import('@/components/main/contact/ContactWithEmail')
)

const Home = ({ params: { locale } }) => {
  return (
    <>
      <HeroParallaxSection />
      <Testimonials locale={locale} />
      <About locale={locale} />
      <Portfolio locale={locale} />
      <Features locale={locale} />
      <Steps />
      <QuestionsAndAnswers locale={locale} />
      <Pricing locale={locale} />
      <ContactWithEmail locale={locale} />
    </>
  )
}

export default Home
