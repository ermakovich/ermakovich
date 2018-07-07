import React from 'react'
import PropTypes from 'prop-types'

import LayoutBase from './layout-base'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <LayoutBase>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 600,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </LayoutBase>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
