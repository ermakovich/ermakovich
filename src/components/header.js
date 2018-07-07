import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

// import InternalLink from './internal-link'

const Layout = styled.div`
  margin-bottom: 1.45em;
`

const Content = styled.div`
  margin: 0 auto;
  padding: 1em 1em;
  display: flex;
  align-items: center;
`

const Avatar = styled.img`
  width: 2em;
  height: 2em;
  border-radius: 0.3em;
`

// const Menu = styled.menu`
//   margin: 0;
//   margin-left: 1em;
//   padding-left: 0;
// `
//
// const MenuItems = styled.ul`
//   margin-left: 0;
//   margin-bottom: 0;
//   display: flex;
//   flex-flow: wrap;
// `
//
// const MenuItem = styled.li`
//   list-style: none;
//   margin-bottom: 0;
//
//   & + & {
//     margin-left: 1em;
//   }
//
//   ${MenuItems} {
//     margin-left: 1em;
//
//     &::before {
//       content: '↳';
//       margin-right: 0.5em;
//     }
//   }
// `
//
// const MenuLink = styled(InternalLink)`
//   &.active {
//   }
// `

const Header = () => (
  <Layout>
    <Content>
      <GatsbyLink to="/">
        <Avatar src="http://gravatar.com/avatar/0e82c1d212ddd6697333a244e36f04d3?s=96" />
      </GatsbyLink>
      {/* <Menu>
        <MenuItems>
          <MenuItem>
            <MenuLink to="/about" activeClassName="active">
              About
            </MenuLink>
            <MenuItems>
              <MenuItem>
                <InternalLink to="/about/work" activeClassName="active">
                  Work
                </InternalLink>
              </MenuItem>
            </MenuItems>
          </MenuItem>
        </MenuItems>
      </Menu> */}
    </Content>
  </Layout>
)

export default Header
