import React from 'react'
import styled from 'styled-components'

import OutboundLink from 'components/outbound-link'
import Content from 'components/content'

const Root = styled.footer`
  margin: 4em 0;
  text-align: center;
`
export default function Footer() {
  return (
    <Root>
      <Content>
        <small>
          This website is built using{' '}
          <OutboundLink href="https://www.gatsbyjs.com">Gatsby</OutboundLink> 🚀
          and hosted on{' '}
          <OutboundLink href="https://www.netlify.com">Netlify</OutboundLink>.
          <br />
          Source code is available on{' '}
          <OutboundLink href="https://github.com/ermakovich/ermakovich">
            GitHub
          </OutboundLink>
          <br />
          <br />© {new Date().getFullYear()} Siarhei Yermakovich
        </small>
      </Content>
    </Root>
  )
}
