import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

import InternalLink from 'components/internal-link'
import UnstyledList from 'components/unstyled-list'

const Layout = styled.div`
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
`

const MenuItems = styled(UnstyledList)`
  flex: none;
  display: flex;
  flex-flow: wrap;
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

export default function Header() {
  return (
    <Layout>
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
        <Menu>
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
            {/* <MenuItem>
                <MenuLink to="/photos/" activeClassName="active">
                  Photos
                </MenuLink>
              </MenuItem> */}
          </MenuItems>
        </Menu>
        <Main />
        <Right />
      </Content>
    </Layout>
  )
}
