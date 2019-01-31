import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import InternalLink from 'components/internal-link'

import { Layout, Avatar, Header, More } from './index/_styles'

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
