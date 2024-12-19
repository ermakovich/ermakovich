import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import Content from 'components/content'
import UnstyledList from 'components/unstyled-list'
import mq from 'components/media-queries'

const menuItemBorderRadius = '.2rem'

const Root = styled(Content)`
  display: flex;
  align-items: center;
  min-height: 6rem;
`

const Menu = styled.menu`
  margin: 0;
  margin-left: 2rem;
  padding-left: 0;
  display: flex;

  @media (${mq.xs}) {
    margin-left: 1rem;
  }
`

const MenuItems = styled(UnstyledList)`
  flex: none;
  display: flex;
`

const MenuItem = styled.li`
  margin-bottom: 0;
`

const MenuLink = styled.a`
  padding: 0.5rem;
  margin: 0.2rem;
  color: var(--color-primary) !important;
  background: transparent;
  border-radius: ${menuItemBorderRadius};
  display: inline-block;
  text-decoration: none;
  font-weight: 500;

  @media (${mq.xs}) {
    padding: 0.3rem;
    margin: 0.1rem;
  }

  &:active,
  &:hover {
    background-color: rgba(98, 146, 255, 0.2);
  }

  &.active {
    background-color: rgba(98, 146, 255, 0.1);
  }
`

const Main = styled.div`
  flex: 1;
`

export default function Header() {
  return (
    <Root>
      <a href="/" title="Главная">
        <StaticImage
          src="../../images/avatar.jpg"
          alt="Logo"
          loading="eager"
          layout="fixed"
          width={105}
          style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: menuItemBorderRadius,
            zIndex: 0,
          }}
        />
      </a>
      <Menu>
        <MenuItems>
          <MenuItem>
            <MenuLink href="/posts/">Записи</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/resume/">Резюме</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/contacts/">Контакты</MenuLink>
          </MenuItem>
        </MenuItems>
      </Menu>
      <Main />
    </Root>
  )
}
