import styled from 'styled-components'

import OutboundLink from 'components/outbound-link'
import UnstyledList from 'components/unstyled-list'
import media from 'components/utils/media'
import { system as systemColor } from 'components/utils/colors'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 35em;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 0;
`

export const SocialLinks = styled(UnstyledList)`
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
  height: 4em;
  border: 1px solid ${systemColor};
  border-radius: 3px;
  background: white;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SocialIcon = styled.img`
  height: 1.5em;
`
