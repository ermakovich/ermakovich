import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import OutboundLink from 'components/outbound-link'
import Content from 'components/content'
import TextSystem from 'components/text-system'

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
        <p>Партнеры:</p>
        <p>
          <OutboundLink href="https://kontur.ru?p=f34110&SUBID=footer">
            Контур — экосистема для бизнеса
          </OutboundLink>
        </p>
        <p>
          <OutboundLink href="https://www.reg.ru?rlink=reflink-19873129">
            рег.ру — домены по выгодным ценам
          </OutboundLink>
        </p>

        <br />

        <TextSystem>
          <small>
            Сайт построен с помощью{' '}
            <OutboundLink href="https://www.gatsbyjs.com" rel="nofollow">
              Gatsby
            </OutboundLink>{' '}
            🚀 и опубликован на{' '}
            <OutboundLink href="https://www.netlify.com" rel="nofollow">
              Netlify
            </OutboundLink>
            .
            <br />
            Исходный код доступен на{' '}
            <OutboundLink href="https://github.com/ermakovich/ermakovich">
              GitHub
            </OutboundLink>
            .
            <br />
            <br />© {new Date().getFullYear()} {site.siteMetadata.title}
            <br />
            <small>
              Данный сайт не использует инструменты для отслеживания
              пользовательской активности 🙅‍♂️
            </small>
          </small>
        </TextSystem>
      </Content>
    </Root>
  )
}
