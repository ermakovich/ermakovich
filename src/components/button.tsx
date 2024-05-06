import styled from 'styled-components'

export default styled.button.attrs((props) => ({
  className: 'btn',
}))`
  background: rgba(0, 0, 0, 0.1);
  color: var(--color-primary);
  border: 0.1em solid var(--color-primary);
  margin: 10px;
  padding: 0.7em 2em;
  text-align: center;
  border-radius: 0.4em;
  text-decoration: none;
  display: inline-block;

  @media (prefers-color-scheme: dark) {
    background: rgba(255, 255, 255, 0.1);
    /* border: 2px solid var(--color-primary); */
  }
`
