import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Link from 'components/link'
import OutboundLink from 'components/outbound-link'
import Content from 'components/content'

import githubIcon from './about/images/social-icons/github.svg'
import twitterIcon from './about/images/social-icons/twitter.svg'
import mediumIcon from './about/images/social-icons/medium.svg'
import stackoverflowIcon from './about/images/social-icons/stackoverflow.svg'
import linkedinIcon from './about/images/social-icons/linkedin.svg'
import youtubeIcon from './about/images/social-icons/youtube.svg'
import instagramIcon from './about/images/social-icons/instagram.svg'
import soundcloudIcon from './about/images/social-icons/soundcloud.svg'
import goodreadsIcon from './about/images/social-icons/goodreads.svg'

import bettyPhoto from './about/images/betty.jpg'
import ashkaPhoto from './about/images/ashka.jpg'
import withKatePhoto from './about/images/with-kate.jpg'

import {
  SocialLinks,
  SocialLinksItem,
  SocialLink,
  SocialIcon,
} from './about/_styles'

const socialLinks = [
  {
    name: 'github',
    title: 'GitHub',
    url: 'https://github.com/ermakovich',
    icon: githubIcon,
  },
  {
    name: 'twitter',
    title: 'Twitter',
    url: 'https://twitter.com/ki_duk',
    icon: twitterIcon,
  },
  {
    name: 'medium',
    title: 'Medium',
    url: 'https://medium.com/@ki_duk',
    icon: mediumIcon,
  },
  {
    name: 'stackoverflow',
    title: 'Stackoverflow',
    url: 'https://stackoverflow.com/users/434402/s-ermakovich',
    icon: stackoverflowIcon,
  },
  {
    name: 'linkedin',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ermakovich/',
    icon: linkedinIcon,
  },
  {
    name: 'youtube',
    title: 'YouTube',
    url: 'https://www.youtube.com/channel/UCoBmiyN8_K-spSY8V-EizJQ',
    icon: youtubeIcon,
  },
  {
    name: 'soundcloud',
    title: 'SoundCloud',
    url: 'https://soundcloud.com/kiduk',
    icon: soundcloudIcon,
  },
  {
    name: 'instagram',
    title: 'Instagram',
    url: 'https://www.instagram.com/ki_duk',
    icon: instagramIcon,
  },
  {
    name: 'goodreads',
    title: 'Goodreads',
    url: 'https://www.goodreads.com/user/show/14034539-siarhei-yermakovi',
    icon: goodreadsIcon,
  },
]

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
          My name is Siarhei Yermakovich. I’m a front-end engineer living in{' '}
          <OutboundLink href="https://en.wikipedia.org/wiki/Minsk">
            Minsk
          </OutboundLink>
          , Belarus. Currently working on open source and personal projects.
          Previously I was leading front-end efforts in a bunch of internet
          startups, such as{' '}
          <OutboundLink href="https://verifiable.com">Verifiable</OutboundLink>,{' '}
          <OutboundLink href="https://dock.io">Dock</OutboundLink>,{' '}
          <OutboundLink href="https://remote.com">Remote</OutboundLink>, and
          some others. Aside from work I love to record cover songs and enjoying
          nature.
        </p>

        <p>
          Together with my wife <Link href={withKatePhoto}>Kate</Link> we are
          happy owners of two cats –{' '}
          <OutboundLink href="https://instagram.com/betty_ashka/">
            Betty and her daughter Ashka
          </OutboundLink>
          .
        </p>

        <p>You can find me on:</p>
        <SocialLinks>
          {socialLinks.map((socialLink) => (
            <SocialLinksItem key={socialLink.name}>
              <SocialLink href={socialLink.url}>
                <SocialIcon src={socialLink.icon} alt={socialLink.name} />
              </SocialLink>
            </SocialLinksItem>
          ))}
        </SocialLinks>
      </Content>
    </>
  )
}
