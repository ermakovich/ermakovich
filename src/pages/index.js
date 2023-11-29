import React from 'react'
import styled from 'styled-components'
import { Link, graphql, useStaticQuery } from 'gatsby'

import { StaticImage } from 'gatsby-plugin-image'
import { SEO } from 'components/seo'
import Button from 'components/button'

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
          loading="eager"
          style={{
            width: '10rem',
            height: '10rem',
            margin: '0 auto',
            borderRadius: '50%',
            boxShadow: '0 0 .3rem 0',
            zIndex: 0,
          }}
        />
        <Header>Привет, я {site.siteMetadata.title.split(' ')[0]} 👋</Header>
        <More>
          <Button as={Link} to="/about">
            Продолжить 👉
          </Button>
        </More>
      </Layout>
    </LayoutWrapper>
  )
}
