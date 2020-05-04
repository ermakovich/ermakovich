import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import Img from 'components/progressive-image'
import ThemeConsumer from 'components/theme'

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
  const { sunIcon, moonIcon } = useStaticQuery(graphql`
    query {
      sunIcon: file(
        relativePath: {
          eq: "layouts/header/dark-theme-toggle/sun-with-face.png"
        }
      ) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      moonIcon: file(
        relativePath: {
          eq: "layouts/header/dark-theme-toggle/moon-with-face.png"
        }
      ) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <ThemeConsumer>
      {({ isDark, setIsDark }) => (
        <Root
          onClick={() => setIsDark(!isDark)}
          title={`Toggle to ${isDark ? 'light' : 'dark'} theme`}
        >
          <Img fixed={(isDark ? sunIcon : moonIcon).childImageSharp.fixed} />
        </Root>
      )}
    </ThemeConsumer>
  )
}
