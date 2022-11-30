import React from 'react'
import styled from 'styled-components'

import { StaticImage } from 'gatsby-plugin-image'
import InternalLink from 'components/internal-link'
import { SEO } from 'components/seo'

export const Head = () => <SEO />

const Layout = styled.div`
  margin: 7em auto;
  max-width: 20em;
  padding: 0px 1.0875em 1.45em;
  padding-top: 0;
  text-align: center;
`

const Header = styled.h1`
  font-weight: normal;
`

const More = styled.p`
  font-size: 1.2em;
`

export default function IndexPage() {
  return (
    <Layout>
      <StaticImage
        src="../images/avatar.jpg"
        alt="Photo"
        width={200}
        height={200}
        loading="eager"
        style={{
          margin: '0 auto',
          borderRadius: '50%',
          boxShadow: '0 0 5px 0',
          zIndex: 0,
        }}
      />
      <Header>
        Hi, I’m <strong>Siarhei Yermakovich</strong>
      </Header>
      <More>
        <InternalLink to="/about/">Ok, show me more</InternalLink>
      </More>
    </Layout>
  )
}
