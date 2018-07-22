import styled from 'styled-components'
import Img from 'gatsby-image'

export default styled(Img)`
  ${'' /* applying blur to preview in gatsby-image */} img:first-of-type {
    filter: blur(0.2em);
  }
`
