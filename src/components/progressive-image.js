import styled from 'styled-components'
import Img from 'gatsby-image'

export default styled(Img)`
  ${'' /* applying blur to preview in gatsby-image */} img[src^=data] {
    filter: blur(0.2em);
  }
`
