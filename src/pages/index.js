import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

import { StaticImage } from 'gatsby-plugin-image'
import InternalLink from 'components/internal-link'
import { SEO } from 'components/seo'

export const Head = () => <SEO />

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
`

const Layout = styled.div`
  margin: auto;
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
    <LayoutWrapper>
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
        <Header>Привет, я {site.siteMetadata.title.split(' ')[0]} 👋</Header>
        <More>
          <InternalLink to="/about/">Продолжить 👉</InternalLink>
        </More>
      </Layout>
    </LayoutWrapper>
  )
}
