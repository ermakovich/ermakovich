import styled from 'styled-components'

import Link from './link'
import linkExternalSvg from './link-external.svg'

export default styled(Link)`
  background-image: url('${linkExternalSvg}');
  background-position: center right;
  background-repeat: no-repeat;
  background-size: 0.857em;
  padding-right: 1em;
`
