import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

const LayoutBase = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            {
              rel: 'shortcut icon',
              type: 'image/png',
              href:
                'http://gravatar.com/avatar/0e82c1d212ddd6697333a244e36f04d3?s=96',
            },
          ]}
        />
        {children}
      </>
    )}
  />
)

LayoutBase.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutBase
