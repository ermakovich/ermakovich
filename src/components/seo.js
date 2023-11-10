import React from 'react'
import { getSrc } from 'gatsby-plugin-image'

import { useSiteMetadata } from 'components/hooks/use-site-metadata'

export const SEO = ({
  title,
  description,
  pathname,
  children,
  titleAddendum,
  image,
  lang = 'ru',
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    favicon,
  } = useSiteMetadata()

  const seo = {
    title:
      (titleAddendum ? `${defaultTitle} - ${titleAddendum}` : title) ||
      defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }

  if (image) {
    seo.image = `${siteUrl}${image}`
  }

  return (
    <>
      <html lang={lang} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.image && (
        <>
          <meta name="image" content={seo.image} />
          <meta name="og:image" content={seo.image} />
          <meta name="twitter:image" content={seo.image} />
        </>
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <link rel="icon" type="image/jpeg" href={getSrc(favicon)} />
      {children}
    </>
  )
}
