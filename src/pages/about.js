import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import OutboundLink from 'components/outbound-link'
import Content from 'components/content'
import { SEO } from 'components/seo'

export const Head = () => <SEO titleAddendum="Обо мне" />

export default function AboutPage() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Content>
      <h1>Обо мне</h1>
      <p>
        Меня зовут {site.siteMetadata.title}. Я занимаюсь веб-разработкой. Вы
        можете посмотреть, где я учился и работал, в моём профиле на{' '}
        <OutboundLink href="https://www.linkedin.com/in/ermakovich/">
          LinkedIn
        </OutboundLink>
        . Возможно, вы также захотите взглянуть на мои профили на{' '}
        <OutboundLink href="https://github.com/ermakovich">GitHub</OutboundLink>{' '}
        и{' '}
        <OutboundLink href="https://stackoverflow.com/users/434402/s-ermakovich">
          StackOverflow
        </OutboundLink>
        .
      </p>

      <p>
        В данный момент я предлагаю{' '}
        <Link to="/website-development-services">разработку веб-сайтов</Link>{' '}
        для малого бизнеса и профессионалов.
      </p>

      <p>
        Иногда я пишу в{' '}
        <OutboundLink href="https://twitter.com/ki_duk">твиттер</OutboundLink>.
        Вы также можете посмотреть мои фото и видео в{' '}
        <OutboundLink href="https://www.instagram.com/ki_duk">
          инстаграме
        </OutboundLink>{' '}
        и{' '}
        <OutboundLink href="https://www.youtube.com/channel/UCoBmiyN8_K-spSY8V-EizJQ">
          ютубе
        </OutboundLink>
        . Также иногда я{' '}
        <OutboundLink href="https://www.goodreads.com/user/show/14034539-siarhei-yermakovi">
          читаю
        </OutboundLink>{' '}
        книги :)
      </p>
    </Content>
  )
}
