import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

import InternalLink from 'components/internal-link'

export const Layout = styled.div`
  margin: 7em auto;
  max-width: 20em;
  padding: 0px 1.0875em 1.45em;
  padding-top: 0;
  text-align: center;
`

export const Avatar = styled(BackgroundImage)`
  border-radius: 50%;
  overflow: hidden;
`

export const Header = styled.h1`
  font-weight: normal;
`

export const More = styled.p`
  font-size: 1.2em;
`

export default function IndexPage() {
  const { avatar } = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "images/avatar.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Avatar fixed={avatar.childImageSharp.fixed} />
      <Header>
        Hi, I’m <strong>Siarhei Yermakovich</strong>
      </Header>
      <More>
        <InternalLink to="/about/">Ok, show me more</InternalLink>
      </More>
    </Layout>
  )
}
