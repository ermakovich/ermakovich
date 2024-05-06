import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Content from 'components/content'
import { SEO } from 'components/seo'

export const Head = () => (
  <SEO titleAddendum="Контакты" description="Контакты для связи со мной." />
)

export default function ContactsPage() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `)

  return (
    <Content>
      <h1>Контакты для связи</h1>
      <p>
        Почта:{' '}
        <a href="mailto:s.ermakovich@gmail.com">{site.siteMetadata.email}</a>
      </p>
      <p>
        Телеграм:{' '}
        <a href="https://t.me/ermakovich2022" target="_blank" rel="noreferrer">
          @ermakovich2022
        </a>
      </p>
      <p>г. Санкт-Петербург</p>
    </Content>
  )
}
