export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/privacy',
          '/terms',
          '/templates',
          ...['cn', 'de', 'es', 'fr', 'kr', 'jp', 'it', 'pl', 'pt'].map(
            (lang) => `/${lang}/privacy`
          ),
          ...['cn', 'de', 'es', 'fr', 'kr', 'jp', 'it', 'pl', 'pt'].map(
            (lang) => `/${lang}/terms`
          ),
          ...['cn', 'de', 'es', 'fr', 'kr', 'jp', 'it', 'pl', 'pt'].map(
            (lang) => `/${lang}/templates`
          ),
        ],
      },
    ],
    sitemap: 'https://www.bizkitexpress.com/sitemap.xml',
  }
}
