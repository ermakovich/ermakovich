import styled from 'styled-components'

import OutboundLink from '../../components/outbound-link'
import UnstyledList from '../../components/unstyled-list'
import media from '../../components/utils/media'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 35em;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 0;
`

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
