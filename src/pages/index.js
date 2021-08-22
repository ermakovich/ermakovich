import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Img from 'components/progressive-image'
import InternalLink from 'components/internal-link'

const Layout = styled.div`
  margin: 7em auto;
  max-width: 20em;
  padding: 0px 1.0875em 1.45em;
  padding-top: 0;
  text-align: center;
`

const Avatar = styled(Img)`
  box-shadow: 0 0 5px 0;
  border-radius: 50%;
`

const Header = styled.h1`
  font-weight: normal;
`

const More = styled.p`
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
      <Avatar fixed={avatar.childImageSharp.fixed} alt="Photo" />
      <Header>
        Hi, I’m <strong>Siarhei Yermakovich</strong>
      </Header>
      <More>
        <InternalLink to="/about/">Ok, show me more</InternalLink>
      </More>
    </Layout>
  )
}
