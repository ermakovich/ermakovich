import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InternalLink from 'components/internal-link'
import Img from 'components/progressive-image'

export const Layout = styled.div`
  margin: 7em auto;
  max-width: 20em;
  padding: 0px 1.0875em 1.45em;
  padding-top: 0;
  text-align: center;
`

export const Avatar = styled(Img)`
  font-size: 2em;
  border-radius: 50%;
`

export const Header = styled.h1`
  font-weight: normal;
`

export const More = styled.p`
  font-size: 1.2em;
`

const IndexPage = ({ data }) => (
  <Layout>
    <Avatar fixed={data.avatar.childImageSharp.fixed} alt="photo" />
    <Header>
      Hi, I’m <strong>Siarhei Yermakovich</strong>
    </Header>
    <More>
      Want to know <InternalLink to="/about/">more</InternalLink>?
    </More>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    avatar: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query {
    avatar: file(relativePath: { eq: "images/avatar.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
