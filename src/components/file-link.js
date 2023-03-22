import styled from 'styled-components'

import Link from './link'
import fileLinkSvg from './file-link.svg'

export default styled(Link)`
  background-image: url('${fileLinkSvg}');
  background-position: center right;
  background-repeat: no-repeat;
  background-size: 0.857em;
  padding-right: 1em;
`
