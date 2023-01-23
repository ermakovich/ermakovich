import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import Content from 'components/content'
import OutboundLink from 'components/outbound-link'
import { SEO } from 'components/seo'

export const Head = () => <SEO titleAddendum="Разработка сайтов" />

export default function AboutPage() {
  const [email, setEmail] = useState('n/a')

  // simple workaround for not exposing email statically on the page
  useEffect(() => {
    setEmail('s.ermakovich@gmail.com')
  }, [])

  return (
    <Content>
      <h1>Разработка веб-сайтов</h1>
      <p>
        Я предлагаю разработку веб-сайтов для малого бизнеса и профессионалов.
        Здесь и далее под <i>веб-сайтом</i> я подразумеваю{' '}
        <OutboundLink href="https://jamstack.org/">Jamstack</OutboundLink>{' '}
        веб-сайт.
      </p>
      <h3>Почему сто́ит заказать разработку веб-сайта у меня?</h3>
      <ul>
        <li>
          Большой опыт. До этого я руководил веб-разработкой в ряде стартапов,
          таких как{' '}
          <OutboundLink href="https://verifiable.com">Verifiable</OutboundLink>,{' '}
          <OutboundLink href="https://dock.io">Dock</OutboundLink>,{' '}
          <OutboundLink href="https://remote.com">Remote</OutboundLink>, а также
          работал в других IT-компаниях.
        </li>
        <li>Очень конкурентные цены за свои услуги и экспертизу.</li>
        <li>
          Я всегда стремлюсь к качественному выполнению работы и предъявляю к
          выполняемым проектам требования на соответствие веб-стандартам и
          лучшим практикам, с фокусом на доступность и быстродействие. К
          примеру, вы можете{' '}
          <OutboundLink href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fermakovich.ru">
            проверить
          </OutboundLink>{' '}
          мой веб-сайт на соответствие упомянутым выше критериям.
        </li>
      </ul>
      <h2>C чего начать?</h2>
      <p>
        Отправьте мне письмо на <a href={`mailto: ${email}`}>{email}</a>, либо
        любым другим удобным вам способом, указанным на странице{' '}
        <Link to="/about">обо мне</Link>. Дальнейшая коммуникация возможна через
        мессенджеры (Telegram, Slack и т.д.).
      </p>
    </Content>
  )
}
