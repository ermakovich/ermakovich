import React, { useState } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import Content from 'components/content'
import UnstyledList from 'components/unstyled-list'
import mq from 'components/media-queries'
import IconButton from 'components/icon-button'

import HamburgerIcon from './hamburger-icon.inline.svg'
import CloseIcon from './close-icon.inline.svg'

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
    position: fixed;
    z-index: 1;
    background: var(--background-color);
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 0.1rem solid gray;
    padding: 0 1rem;

    &:not(.open) {
      display: none;
    }
  }
`

const MenuItems = styled(UnstyledList)`
  flex: none;
  display: flex;

  @media (${mq.xs}) {
    flex-direction: column;
  }
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

const Right = styled.div`
  flex: none;
`

const CloseMenuButton = styled(IconButton)`
  position: absolute;
  right: 1rem;
  top: 1.5rem;
  display: none;

  @media (${mq.xs}) {
    display: initial;
  }
`

const HamburgerMenuButton = styled(IconButton)`
  display: none;

  @media (${mq.xs}) {
    display: initial;
  }
`

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleHamburgerIconClick() {
    setIsMenuOpen(true)
  }

  function handleCloseIconClick() {
    setIsMenuOpen(false)
  }

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
      <Menu className={isMenuOpen ? 'open' : ''}>
        <MenuItems>
          <MenuItem>
            <MenuLink href="/about/">Обо мне</MenuLink>
          </MenuItem>
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
        <CloseMenuButton aria-label="Close menu" onClick={handleCloseIconClick}>
          <CloseIcon width="24" height="24" />
        </CloseMenuButton>
      </Menu>
      <Main />
      <Right>
        <HamburgerMenuButton
          aria-label="Open menu"
          onClick={handleHamburgerIconClick}
        >
          <HamburgerIcon width="24" height="34" />
        </HamburgerMenuButton>
      </Right>
    </Root>
  )
}
