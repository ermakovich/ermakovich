import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { GatsbyImage } from 'gatsby-plugin-image'
import InternalLink from 'components/internal-link'

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
  const { avatar } = useStaticQuery(graphql`
    {
      avatar: file(relativePath: { eq: "images/avatar.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 200, height: 200, layout: FIXED)
        }
      }
    }
  `)

  return (
    <Layout>
      <GatsbyImage
        image={avatar.childImageSharp.gatsbyImageData}
        alt="Photo"
        style={{
          margin: '0 auto',
          borderRadius: '50%',
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
