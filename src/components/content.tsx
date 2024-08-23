import styled from 'styled-components'

// represents centered block of content with restricted max width and minimum paddings
const Content = styled.div`
  margin: 0 auto;
  max-width: 35em;
  padding: 0 1em;
  word-break: break-word;
`

export const LargeContent = styled(Content)`
  @media not print {
    max-width: 39em;
    padding: 3em;
    margin: 1em auto;
  }

  @media screen and (max-width: 51em) {
    margin: 1em;
    padding: 1em;
  }
`

export default Content
