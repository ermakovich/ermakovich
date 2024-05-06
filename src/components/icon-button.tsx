import styled from 'styled-components'

export default styled.button.attrs((props) => ({
  className: 'btn',
}))`
  background: none;
  padding: 0.5em;
  text-align: center;
  color: var(--color-primary);
  border: none;
  display: inline-block;
`
