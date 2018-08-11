import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Link from '../components/link'
import OutboundLink from '../components/outbound-link'

import githubIcon from './about/images/social-icons/github.svg'
import twitterIcon from './about/images/social-icons/twitter.svg'
import mediumIcon from './about/images/social-icons/medium.svg'
import stackoverflowIcon from './about/images/social-icons/stackoverflow.svg'
import linkedinIcon from './about/images/social-icons/linkedin.svg'
import youtubeIcon from './about/images/social-icons/youtube.svg'
import soundcloudIcon from './about/images/social-icons/soundcloud.svg'
import goodreadsIcon from './about/images/social-icons/goodreads.svg'

import bettyPhoto from './about/images/betty.jpg'
import withKatePhoto from './about/images/with-kate.jpg'

import {
  SocialLinks,
  SocialLinksItem,
  SocialLink,
  SocialIcon,
} from './about/_styles'

const socialLinks = [
  { name: 'github', title: 'GitHub', url: 'https://github.com/ermakovich', icon: githubIcon },
  { name: 'twitter', title: 'Twitter', url: 'https://twitter.com/ki_duk', icon: twitterIcon },
  { name: 'medium', title: 'Medium', url: 'https://medium.com/@ki_duk', icon: mediumIcon },
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
    name: 'goodreads',
    title: 'Goodreads',
    url: 'https://www.goodreads.com/user/show/14034539-siarhei-yermakovi',
    icon: goodreadsIcon,
  },
]

const AboutPage = () => (
  <Layout>
    <Helmet title="About Siarhei Yermakovich" />
    <h1>About</h1>
    <p>
      My name is Siarhei Yermakovich. I’m a developer living in{' '}
      <OutboundLink href="https://en.wikipedia.org/wiki/Minsk">
        Minsk
      </OutboundLink>, Belarus. I work for internet startups{' '}
      <OutboundLink href="https://dock.io">Dock</OutboundLink> and{' '}
      <OutboundLink href="https://remote.com">Remote</OutboundLink>. When not
      doing this I’m recording cover songs and enjoying nature. I do outdoor
      workouts regularly when it’s not too cold outside.
    </p>

    <p>
      Together with my wife <Link href={withKatePhoto}>Kate</Link> we are happy
      owners of a small funny cat <Link href={bettyPhoto}>Betty</Link>.
    </p>

    <p>You can find me on:</p>
    <SocialLinks>
      {socialLinks.map(socialLink => (
        <SocialLinksItem key={socialLink.name}>
          <SocialLink href={socialLink.url}>
            <SocialIcon src={socialLink.icon} alt={socialLink.name} />
          </SocialLink>
        </SocialLinksItem>
      ))}
    </SocialLinks>
  </Layout>
)

export default AboutPage
