import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import ThemeConsumer from 'components/theme'

import './layout.css'

function LayoutBase({ children }) {
  const { site, favicon } = useStaticQuery(graphql`
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
  `)

  return (
    <>
      <ThemeConsumer>
        {({ isDark }) => (
          <Helmet
            title={site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: site.siteMetadata.description,
              },
            ]}
            link={[
              {
                rel: 'shortcut icon',
                type: 'image/png',
                href: favicon.childImageSharp.fixed.src,
              },
            ]}
            htmlAttributes={{ lang: 'en', theme: isDark && 'dark' }}
          />
        )}
      </ThemeConsumer>
      {children}
    </>
  )
}

LayoutBase.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutBase
