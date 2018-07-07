import styled from 'styled-components'

export const SocialLinks = styled.ul`
  display: flex;
  flex-flow: wrap;
  margin-left: 0;
`

export const SocialLinksItem = styled.li`
  list-style: none;

  & + & {
    margin-left: 1em;
  }
`

export const SocialLink = styled.a`
  display: inline-block;
`

export const SocialIcon = styled.img`
  height: 1.5em;
`
