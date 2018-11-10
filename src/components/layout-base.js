import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

const LayoutBase = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        avatar: file(relativePath: { eq: "images/avatar.jpg" }) {
          childImageSharp {
            fixed(width: 96, height: 96) {
              src
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Hi, I’m Siarhei Yermakovich. Want to know more?',
            },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href: data.avatar.childImageSharp.fixed.src,
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        {children}
      </>
    )}
  />
)

LayoutBase.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutBase
