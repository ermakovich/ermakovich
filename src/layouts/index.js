import React from 'react'
import PropTypes from 'prop-types'

import LayoutBase from './layout-base'
import Header from './header/header'
import './layout.css'

const Layout = ({ children, pageContext }) => (
  <LayoutBase>
    {pageContext.layout !== 'wedding' && (
      <Header isIntro={pageContext.layout === 'intro'} />
    )}
    {children}
  </LayoutBase>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
