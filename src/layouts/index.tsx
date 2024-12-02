import React from 'react'

import LayoutBase from './layout-base'
import Header from './header/header'
import Footer from './footer/footer'
import './layout.css'

const Layout = ({ children, pageContext }) => (
  <LayoutBase>
    <Header />
    {children}
    <Footer />
  </LayoutBase>
)

export default Layout
