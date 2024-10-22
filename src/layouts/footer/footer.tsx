import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import OutboundLink from 'components/outbound-link'
import Content from 'components/content'
import TextSystem from 'components/text-system'
import LocalDate from 'components/date'

const date = new Date()

const Root = styled.footer`
  margin: 8em 0 4em 0;
  text-align: center;
`
export default function Footer() {
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
    <Root>
      <Content>
        <TextSystem>
          <small>
            Сайт построен с помощью{' '}
            <OutboundLink
              href="https://www.gatsbyjs.com"
              rel="nofollow"
              target="_blank"
            >
              Gatsby
            </OutboundLink>{' '}
            🚀 и опубликован на{' '}
            <OutboundLink
              href="https://www.netlify.com"
              rel="nofollow"
              target="_blank"
            >
              Netlify
            </OutboundLink>
            .
            <br />
            Исходный код доступен на{' '}
            <OutboundLink
              href="https://github.com/ermakovich/ermakovich"
              target="_blank"
            >
              GitHub
            </OutboundLink>
            .
            <br />
            <br />
            <small>
              Сайт обновлен: <LocalDate value={date} />
            </small>
            <br />
            <br />©{' '}
            <time dateTime={date.getFullYear().toString()}>
              {date.getFullYear()}
            </time>{' '}
            {site.siteMetadata.title}
            <br />
            <small>
              Данный сайт не использует инструменты для отслеживания
              пользовательской активности 🙅‍♂️
            </small>
          </small>
        </TextSystem>

        <p>
          <OutboundLink href="https://wsse.ru">
            WSSE - быстрые и надежные сайты
          </OutboundLink>
        </p>
      </Content>
    </Root>
  )
}
