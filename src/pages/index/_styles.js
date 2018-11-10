import styled from 'styled-components'

import Img from 'components/progressive-image'

export const Layout = styled.div`
  margin: 7em auto;
  max-width: 20em;
  padding: 0px 1.0875em 1.45em;
  padding-top: 0;
  text-align: center;
`

export const Avatar = styled(Img)`
  border-radius: 50%;
  font-size: 2em;
`

export const Header = styled.h1`
  font-weight: normal;
`

export const More = styled.p`
  font-size: 1.2em;
`
