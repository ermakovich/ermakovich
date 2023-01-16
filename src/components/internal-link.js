import React from 'react'
import Link from './link'

export default function InternalLink({ to, children, ...props }) {
  return (
    <Link href={to} {...props}>
      {children}
    </Link>
  )
}
