import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import LayoutBase from './layout-base'
import Header from './header'
import './layout.css'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 35em;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children }) => (
  <LayoutBase>
    <Header />
    <Wrapper>
      {children}
    </Wrapper>
  </LayoutBase>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
