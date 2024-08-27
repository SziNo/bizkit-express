import { Outfit } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Toaster } from 'sonner'
import initTranslations from '../i18n'
import TranslationsProvider from '@/components/TranslationsProvider'
import i18nConfig from '@/i18nConfig'
import { dir } from 'i18next'
import { i18Namespaces } from '@/lib/constants'
import Navbar from '@/components/header/Navbar'
import Footer from '@/components/footer/Footer'
import ConsentModal from '@/components/helpers/ConsentModal'
import { ScrollToTop } from '@/components/helpers/ScrollToTop'
import './globals.css'

const font = Outfit({ subsets: ['latin'] })

export const metadata = {
  metadataBase: 'https://www.bizkitexpress.com',
  title: {
    default: 'BizKit Express - Affordable Web Design Services',
    template: '%s | BizKit Express',
  },
  description:
    'BizKit Express offers affordable responsive web designs along with services as part of our comprehensive business kits for small businesses and solopreneurs. Our services include SEO optimization, website security, web hosting with domain registration, website speed optimization, and accessibility.',
  icons: {
    icon: [
      {
        url: 'https://res.cloudinary.com/dc0nkgrxz/image/upload/f_auto,q_auto,w_32,h_32/v1712544549/Work/BizKit%20Express/Logos/be-logo_pciosg.ico',
        href: 'https://res.cloudinary.com/dc0nkgrxz/image/upload/f_auto,q_auto,w_32,h_32/v1712544549/Work/BizKit%20Express/Logos/be-logo_pciosg.ico',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bizkitexpress',
    creator: '@bizkitexpress',
  },
  openGraph: {
    title: 'BizKit Express',
    description:
      'BizKit Express offers affordable, responsive web designs and services. They are part of our business kits for small businesses and solopreneurs.',
    url: 'https://www.bizkitexpress.com',
    image:
      'https://res.cloudinary.com/dc0nkgrxz/image/upload/v1712542291/Work/BizKit%20Express/Logos/bizkit-express-logo2_mtqqae.jpg',
    site_name: 'BizKit Express',
  },
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({ params: { locale }, children }) {
  const { resources } = await initTranslations(locale, i18Namespaces)

  return (
    <html lang={locale} dir={dir(locale)} className='!scroll-smooth'>
      <body className={`flex flex-col min-h-screen ${font.className}`}>
        <TranslationsProvider
          locale={locale}
          namespaces={i18Namespaces}
          resources={resources}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className='flex-1'>{children}</main>
            <Footer />
            <ConsentModal />
            <ScrollToTop />
            <Toaster />
          </ThemeProvider>
        </TranslationsProvider>
      </body>
    </html>
  )
}
