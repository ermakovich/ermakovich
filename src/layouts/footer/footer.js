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
        <TextSystem>
          <small>
            Сайт построен с помощью{' '}
            <OutboundLink href="https://www.gatsbyjs.com">Gatsby</OutboundLink>{' '}
            🚀 и опубликован на{' '}
            <OutboundLink href="https://www.netlify.com">Netlify</OutboundLink>.
            <br />
            Исходный код доступен на{' '}
            <OutboundLink href="https://github.com/ermakovich/ermakovich">
              GitHub
            </OutboundLink>
            .
            <br />
            <br />© {new Date().getFullYear()} {site.siteMetadata.title}
          </small>
        </TextSystem>
      </Content>
    </Root>
  )
}
