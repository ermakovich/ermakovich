import React from 'react'
import PropTypes from 'prop-types'

import LayoutBase from './layout-base'
import Header from './header/header'
import Footer from './footer/footer'
import './layout.css'

const Layout = ({ children, pageContext }) => (
  <LayoutBase>
    {pageContext.layout !== 'intro' && <Header />}
    {children}
    {pageContext.layout !== 'intro' && <Footer />}
  </LayoutBase>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
