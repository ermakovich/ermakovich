import React, { useContext } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

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
    <Root
      onClick={() => setIsDark(!isDark)}
      title={`Toggle to ${isDark ? 'light' : 'dark'} theme`}
    >
      <BackgroundImage
        fixed={(isDark ? sunIcon : moonIcon).childImageSharp.fixed}
      />
    </Root>
  )
}
