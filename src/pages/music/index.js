import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
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
      <Helmet title={`${site.siteMetadata.title} - Music`} />
      <Content>
        <h1>Music</h1>
        <p>
          I started playing guitar at school, and with some breaks I play till
          now. I also attended vocal signing school for couple years.
        </p>
        <p>
          Sometimes I write my own songs, but most of the time I play and record
          other’s. And from time to time I upload them to my{' '}
          <OutboundLink href="https://soundcloud.com/kiduk">
            SoundCloud
          </OutboundLink>{' '}
          and{' '}
          <OutboundLink href="https://www.youtube.com/playlist?list=PL_27v5WWVQwTEItNMELxkWZ9SzYrx_aGj">
            YouTube
          </OutboundLink>
          .
        </p>

        <p>
          <iframe
            title="soundcloud"
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/688600567&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </p>
        <p>
          <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/jAnQao2oH9A"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </p>
      </Content>
    </>
  )
}
