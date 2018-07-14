import styled from 'styled-components'

import OutboundLink from '../../components/outbound-link'
import UnstyledList from '../../components/unstyled-list'

export const SocialLinks = UnstyledList.extend`
  display: flex;
  flex-flow: wrap;
`

export const SocialLinksItem = styled.li`
  & + & {
    margin-left: 1em;
  }
`

export const SocialLink = styled(OutboundLink)`
  display: inline-block;
`

export const SocialIcon = styled.img`
  height: 1.5em;
`
