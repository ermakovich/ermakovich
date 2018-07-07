import React from 'react'

import LayoutBase from '../components/layout-base'
import InternalLink from '../components/internal-link'

import { Layout, Avatar, Header, More } from './index/_styles'

const IndexPage = () => (
  <LayoutBase>
    <Layout>
      <Avatar src="http://gravatar.com/avatar/0e82c1d212ddd6697333a244e36f04d3?s=300" />
      <Header>
        Hi, I’m <strong>Siarhei Yermakovich</strong>
      </Header>
      <More>
        Want to know <InternalLink to="/about/">more</InternalLink>?
      </More>
    </Layout>
  </LayoutBase>
)

export default IndexPage
