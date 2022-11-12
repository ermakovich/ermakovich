import React from 'react'
import PropTypes from 'prop-types'

import LayoutBase from './layout-base'
import Header from './header/header'
import Footer from './footer/footer'
import './layout.css'

const Layout = ({ children, pageContext }) => (
  <LayoutBase>
    <Header isIntro={pageContext.layout === 'intro'} />
    {children}
    <Footer />
  </LayoutBase>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
