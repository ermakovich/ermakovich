import styled from 'styled-components'

import fileLinkSvgThemeLight from './file-link-theme-light.svg'
import fileLinkSvgThemeDark from './file-link-theme-dark.svg'

export default styled.a`
  background-image: url('${fileLinkSvgThemeLight}');
  background-position: center right;
  background-repeat: no-repeat;
  background-size: 0.857em;
  padding-right: 1em;

  @media (prefers-color-scheme: dark) {
    background-image: url('${fileLinkSvgThemeDark}');
  }
`
