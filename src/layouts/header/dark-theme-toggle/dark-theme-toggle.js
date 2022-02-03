import React, { useContext } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import { ThemeContext } from 'components/theme'

const Root = styled.button`
  cursor: pointer;
  font-size: 30px;
  border: 0;
  margin: 0;
  background: transparent;
  padding: 0;
  display: inline-flex;
`

export default function DarkThemeToggle() {
  const { isDark, setIsDark } = useContext(ThemeContext)

  return (
    <Root
      onClick={() => setIsDark(!isDark)}
      title={`Toggle to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? (
        <StaticImage
          src="sun-with-face.png"
          width={30}
          height={30}
          layout="fixed"
          loading="eager"
          placeholder="none"
        />
      ) : (
        <StaticImage
          src="moon-with-face.png"
          width={30}
          height={30}
          layout="fixed"
          loading="eager"
          placeholder="none"
        />
      )}
    </Root>
  )
}
