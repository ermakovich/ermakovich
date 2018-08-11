import styled from 'styled-components'

import OutboundLink from '../../components/outbound-link'
import UnstyledList from '../../components/unstyled-list'
import media from '../../components/utils/media'

export const SocialLinks = UnstyledList.extend`
  text-align: center;

  @media ${media.mid} {
    columns: 4;
  }
`

export const SocialLinksItem = styled.li`
  & + & {
    margin-top: 1em;
  }
`

export const SocialLink = styled(OutboundLink)`
  display: inline-flex;
  font-size: 16px;
`

export const SocialIcon = styled.img`
  height: 1.5em;
  margin-right: 1em;
`
