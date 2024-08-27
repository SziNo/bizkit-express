export default function sitemap() {
  const baseUrl = 'https://www.bizkitexpress.com'
  const locales = ['cn', 'de', 'es', 'fr', 'kr', 'jp', 'it', 'pl', 'pt']

  const urls = [
    { url: baseUrl },
    { url: `${baseUrl}/templates` },
    { url: `${baseUrl}/privacy` },
    { url: `${baseUrl}/terms` },
  ]

  // Generate locale-specific URLs for home and templates
  const localeHomeUrls = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
  }))

  const localeTemplateUrls = locales.map((locale) => ({
    url: `${baseUrl}/${locale}/templates`,
  }))

  return [...urls, ...localeHomeUrls, ...localeTemplateUrls]
}
