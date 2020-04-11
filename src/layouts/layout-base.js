import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import ThemeConsumer from 'components/theme'

import './layout.css'

const LayoutBase = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
        favicon: file(relativePath: { eq: "images/avatar.jpg" }) {
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
        <ThemeConsumer>
          {({ isDark }) => (
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: data.site.siteMetadata.description,
                },
              ]}
              link={[
                {
                  rel: 'shortcut icon',
                  type: 'image/png',
                  href: data.favicon.childImageSharp.fixed.src,
                },
              ]}
              htmlAttributes={{ lang: 'en', theme: isDark && 'dark' }}
            />
          )}
        </ThemeConsumer>
        {children}
      </>
    )}
  />
)

LayoutBase.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutBase
