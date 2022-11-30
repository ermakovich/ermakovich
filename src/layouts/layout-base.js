import React from 'react'
import PropTypes from 'prop-types'

import './layout.css'

function LayoutBase({ children }) {
  return <>{children}</>
}

LayoutBase.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutBase
