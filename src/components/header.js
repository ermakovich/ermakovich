import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import InternalLink from './internal-link'
import UnstyledList from './unstyled-list'

const Layout = styled.div`
  margin-bottom: 1.45em;
`

const Content = styled.div`
  margin: 0 auto;
  padding: 1em 1em;
  display: flex;
  align-items: center;
`

const Avatar = styled(Img)`
  border-radius: 0.3em;
`

const Menu = styled.menu`
  margin: 0;
  margin-left: 2em;
  padding-left: 0;
`

const MenuItems = styled(UnstyledList)`
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

const Header = () => (
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
        </Content>
      </Layout>
    )}
  />
)

export default Header
