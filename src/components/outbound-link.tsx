import styled from 'styled-components'
import React from 'react'

import LinkExternalSvg from './link-external.inline.svg'

const Link = styled.a`
  white-space: nowrap;
`

export default function OutboundLink({ children, ...props }) {
  return (
    <Link {...props}>
      {children} <LinkExternalSvg width="0.85em" />
    </Link>
  )
}
