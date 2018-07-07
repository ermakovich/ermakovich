import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Link from '../components/link'

import githubIcon from './about/images/social-icons/github.svg'
import twitterIcon from './about/images/social-icons/twitter.svg'
import mediumIcon from './about/images/social-icons/medium.svg'
import stackoverflowIcon from './about/images/social-icons/stackoverflow.svg'
import linkedinIcon from './about/images/social-icons/linkedin.svg'
import youtubeIcon from './about/images/social-icons/youtube.svg'
import soundcloudIcon from './about/images/social-icons/soundcloud.svg'

import bettyPhoto from './about/images/betty.jpg'
import withKatePhoto from './about/images/with-kate.jpg'

import {
  SocialLinks,
  SocialLinksItem,
  SocialLink,
  SocialIcon,
} from './about/_styles'

const socialLinks = [
  { name: 'github', url: 'https://github.com/ermakovich', icon: githubIcon },
  { name: 'twitter', url: 'https://twitter.com/ki_duk', icon: twitterIcon },
  { name: 'medium', url: 'https://medium.com/@ki_duk', icon: mediumIcon },
  {
    name: 'stackoverflow',
    url: 'https://stackoverflow.com/users/434402/s-ermakovich',
    icon: stackoverflowIcon,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/ermakovich/',
    icon: linkedinIcon,
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/channel/UCoBmiyN8_K-spSY8V-EizJQ',
    icon: youtubeIcon,
  },
  {
    name: 'soundcloud',
    url: 'https://soundcloud.com/kiduk',
    icon: soundcloudIcon,
  },
]

const AboutPage = () => (
  <Layout>
    <Helmet title="About Siarhei Yermakovich" />
    <h1>About</h1>
    <p>
      My name is Siarhei Yermakovich. I’m a developer living in{' '}
      <Link href="https://en.wikipedia.org/wiki/Minsk" rel="nofollow">
        Minsk
      </Link>, Belarus. I work for internet startups{' '}
      <Link href="https://dock.io">Dock</Link> and{' '}
      <Link href="https://remote.com">Remote</Link>. When not doing this I’m
      recording cover songs and enjoing nature. I do outdoor workouts regularly
      when it’s not too cold outside.
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
            <SocialIcon
              src={socialLink.icon}
              alt={socialLink.name}
              rel="nofollow"
            />
          </SocialLink>
        </SocialLinksItem>
      ))}
    </SocialLinks>
  </Layout>
)

export default AboutPage
