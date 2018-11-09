import React from 'react'
import PropTypes from 'prop-types'

import LayoutBase from './layout-base'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <LayoutBase>
    <Header />
    {children}
  </LayoutBase>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
