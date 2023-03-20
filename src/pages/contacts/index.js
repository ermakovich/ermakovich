import React from 'react'

import Content from 'components/content'
import { SEO } from 'components/seo'

export const Head = () => (
  <SEO titleAddendum="Контакты" description="Контакты для связи со мной." />
)

export default function ContactsPage() {
  return (
    <Content>
      <h1>Контакты для связи</h1>
      <p>
        Почта:{' '}
        <a href="mailto:s.ermakovich@gmail.com">s.ermakovich@gmail.com</a>
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
