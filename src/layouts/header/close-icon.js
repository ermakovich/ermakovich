import * as React from 'react'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 18 17" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
      >
        <path
          d="M.022 0l14.205 14.205"
          transform="translate(-179 -613) translate(163 597) translate(17.5 17.5)"
        />
        <path
          d="M.022 0l14.205 14.205"
          transform="translate(-179 -613) translate(163 597) translate(17.5 17.5) matrix(-1 0 0 1 14.65 0)"
        />
      </g>
    </svg>
  )
}

export default CloseIcon
