import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import { globalHistory } from '@reach/router'

import InternalLink from 'components/internal-link'
import UnstyledList from 'components/unstyled-list'
import mq from 'components/media-queries'
import IconButton from 'components/icon-button'

import HamburgerIcon from './hamburger-icon'
import CloseIcon from './close-icon'

const Root = styled.div`
  margin-bottom: 1.45em;
`

const Content = styled.div`
  margin: 0 auto;
  padding: 1em 1em;
  display: flex;
  align-items: center;
  min-height: 100px;
`

const Menu = styled.menu`
  margin: 0;
  margin-left: 2em;
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
    border-bottom: 1px solid gray;
    padding: 0 1em;

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

const MenuLink = styled(InternalLink)`
  padding: 10px;
  margin: 2px;
  color: var(--color-primary) !important;
  background: transparent;
  border-radius: 3px;
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
  right: 1em;
  top: 1.5em;
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

  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      setIsMenuOpen(false)
    })
  }, [])

  function handleHamburgerIconClick() {
    setIsMenuOpen(true)
  }

  function handleCloseIconClick() {
    setIsMenuOpen(false)
  }

  return (
    <Root>
      <Content>
        <InternalLink to="/" title="Главная">
          <StaticImage
            src="../../images/avatar.jpg"
            alt="Logo"
            loading="eager"
            layout="fixed"
            width={36}
            height={36}
            style={{ borderRadius: '0.3em', zIndex: 0 }}
          />
        </InternalLink>
        <Menu className={isMenuOpen ? 'open' : ''}>
          <MenuItems>
            <MenuItem>
              <MenuLink
                to="/about/"
                activeClassName="active"
                partiallyActive={true}
              >
                Обо мне
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                to="/posts/"
                activeClassName="active"
                partiallyActive={true}
              >
                Записи
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                to="/resume/"
                activeClassName="active"
                partiallyActive={true}
              >
                Резюме
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink
                to="/contacts/"
                activeClassName="active"
                partiallyActive={true}
              >
                Контакты
              </MenuLink>
            </MenuItem>
          </MenuItems>
          <CloseMenuButton
            aria-label="Close menu"
            onClick={handleCloseIconClick}
          >
            <CloseIcon width={24} height={24} />
          </CloseMenuButton>
        </Menu>
        <Main />
        <Right>
          <HamburgerMenuButton
            aria-label="Open menu"
            onClick={handleHamburgerIconClick}
          >
            <HamburgerIcon width={24} height={34} />
          </HamburgerMenuButton>
        </Right>
      </Content>
    </Root>
  )
}
