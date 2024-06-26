import * as React from 'react'

function HamburgerIcon({
  width,
  height,
  ...props
}: React.PropsWithChildren<React.SVGAttributes<SVGSVGElement>>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 17 12"
      {...props}
    >
      <defs>
        <path
          id="a"
          d="M.85 6.8a.85.85 0 110-1.7h15.3a.85.85 0 010 1.7H.85zm0-5.1a.85.85 0 110-1.7h15.3a.85.85 0 010 1.7H.85zm0 10.2a.85.85 0 010-1.7h15.3a.85.85 0 010 1.7H.85z"
        />
      </defs>
      <use fill="currentColor" xlinkHref="#a" />
    </svg>
  )
}

export default HamburgerIcon
