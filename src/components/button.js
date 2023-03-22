import styled from 'styled-components'

export default styled.button.attrs((props) => ({
  className: 'button',
}))`
  background: var(--color-link);
  margin: 10px;
  padding: 0.7em 2em;
  text-align: center;
  color: white;
  border-radius: 0.4em;
  outline: none;
  border: none;
  text-decoration: none;
  display: inline-block;

  &:hover,
  &:active {
    background: var(--color-link-active);
  }

  @media (prefers-color-scheme: dark) {
    background: rgb(98, 146, 255);

    &:active,
    &:hover {
      background: rgb(133, 168, 255);
    }
  }
`
