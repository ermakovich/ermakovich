import React from 'react'
import styled from 'styled-components'

import ThemeConsumer from 'components/theme'

import sunIcon from './sun-with-face.png'
import moonIcon from './moon-with-face.png'

const Root = styled.button`
  cursor: pointer;
  font-size: 30px;
  border: 0;
  margin: 0;
  background: transparent;
  padding: 0;
  display: inline-flex;

  img {
    width: 1em;
    height: 1em;
  }
`

const DarkThemeToggle = () => (
  <ThemeConsumer>
    {({ isDark, setIsDark }) => (
      <Root
        onClick={() => setIsDark(!isDark)}
        title={`${isDark ? 'Dark' : 'Light'} theme`}
      >
        <img src={isDark ? sunIcon : moonIcon} />
      </Root>
    )}
  </ThemeConsumer>
)

export default DarkThemeToggle
