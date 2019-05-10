import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import InternalLink from 'components/internal-link'
import UnstyledList from 'components/unstyled-list'

import DarkThemeToggle from './dark-theme-toggle/dark-theme-toggle'

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

const Avatar = styled(Img)`
  border-radius: 0.3em;
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

  & + & {
    margin-left: 1em;
  }

  ${MenuItems} {
    margin-left: 1em;

    &::before {
      content: '↳';
      margin-right: 0.5em;
    }
  }
`

const MenuLink = styled(InternalLink)`
  &.active {
    font-weight: bold;
  }
`

const Main = styled.div`
  flex: 1;
`

const Right = styled.div`
  flex: none;
`

const Header = ({ isIntro }) => (
  <StaticQuery
    query={graphql`
      query {
        avatar: file(relativePath: { eq: "images/avatar.jpg" }) {
          childImageSharp {
            fixed(width: 36, height: 36) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Content>
          {!isIntro && (
            <>
              <GatsbyLink to="/">
                <Avatar fixed={data.avatar.childImageSharp.fixed} alt="photo" />
              </GatsbyLink>
              <Menu>
                <MenuItems>
                  <MenuItem>
                    <MenuLink to="/about/" activeClassName="active">
                      About
                    </MenuLink>
                  </MenuItem>
                  <MenuItem>
                    <MenuLink to="/posts/" activeClassName="active">
                      Posts
                    </MenuLink>
                  </MenuItem>
                  {/* <MenuItem>
                <MenuLink to="/photos/" activeClassName="active">
                  Photos
                </MenuLink>
              </MenuItem> */}
                </MenuItems>
              </Menu>
            </>
          )}
          <Main />
          <Right>
            <DarkThemeToggle />
          </Right>
        </Content>
      </Layout>
    )}
  />
)

export default Header
