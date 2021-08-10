import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import OutboundLink from 'components/outbound-link'
import Content from 'components/content'

export default function AboutPage() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet title={`${site.siteMetadata.title} - About`} />
      <Content>
        <h1>About</h1>
        <p>
          My name is Siarhei Yermakovich. I’m a{' '}
          <Link to="/programming">programmer</Link>, hobby{' '}
          <Link to="/music">musician</Link>, and beginning{' '}
          <OutboundLink href="https://www.youtube.com/playlist?list=PL_27v5WWVQwQJY_eFhhMaqXHakMTh5dNT">
            beekeeper
          </OutboundLink>
          . Today I mostly live in a small village 80km away from{' '}
          <OutboundLink href="https://en.wikipedia.org/wiki/Minsk">
            Minsk
          </OutboundLink>
          , Belarus.
        </p>

        <p>
          I’m a happy owner of two cats –{' '}
          <OutboundLink href="https://instagram.com/betty_ashka/">
            Betty and her daughter Ashka
          </OutboundLink>
          .
        </p>

        <p>
          Sometimes I post to{' '}
          <OutboundLink href="https://twitter.com/ki_duk">Twitter</OutboundLink>
          . You can also check for my photos and videos on{' '}
          <OutboundLink href="https://www.instagram.com/ki_duk">
            Instagram
          </OutboundLink>{' '}
          and{' '}
          <OutboundLink href="https://www.youtube.com/channel/UCoBmiyN8_K-spSY8V-EizJQ">
            YouTube
          </OutboundLink>
          . Also sometimes I{' '}
          <OutboundLink href="https://www.goodreads.com/user/show/14034539-siarhei-yermakovi">
            read
          </OutboundLink>{' '}
          books :)
        </p>
      </Content>
    </>
  )
}
