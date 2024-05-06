import styled from 'styled-components'

import linkExternalSvgThemeLight from './link-external-theme-light.svg'
import linkExternalSvgThemeDark from './link-external-theme-dark.svg'

export default styled.a`
  background-image: url('${linkExternalSvgThemeLight}');
  background-position: center right;
  background-repeat: no-repeat;
  background-size: 0.857em;
  padding-right: 1em;

  @media (prefers-color-scheme: dark) {
    background-image: url('${linkExternalSvgThemeDark}');
  }
`
