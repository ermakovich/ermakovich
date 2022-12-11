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
        Меня зовут {site.siteMetadata.title}. Более{' '}
        {new Date().getFullYear() - 2006} лет я занимаюсь веб-разработкой. Вы
        можете посмотреть где я учился и работал в моем профиле на{' '}
        <OutboundLink href="https://www.linkedin.com/in/ermakovich/">
          LinkedIn
        </OutboundLink>
        .
      </p>
      <p>
        В 2015 году я решил покинуть офис и начал работать удаленно в
        распределенной международной команде с главным офисом в Калифорнии, США.
        В течении 2015-2020 годов мы запустили несколько проектов с различным
        успехом.
      </p>
      <p>
        В 2020 году я решил прекратить работу на полную занятость и переключился
        на персональные проекты. Возможно вы захотите взглянуть на мои профили
        на{' '}
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
        для малого бизнеса и индивидуалов.
      </p>

      <p>
        Иногда я пишу в{' '}
        <OutboundLink href="https://twitter.com/ki_duk">твиттер</OutboundLink>.
        Вы также можете посмотреть мои фото и видео в{' '}
        <OutboundLink href="https://www.instagram.com/ki_duk">
          инстаграмме
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
