import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import Content from 'components/content'
import OutboundLink from 'components/outbound-link'
import { SEO } from 'components/seo'

export const Head = () => (
  <SEO titleAddendum="Website development servicessts" />
)

export default function AboutPage() {
  const [email, setEmail] = useState('n/a')

  // simple workaround for not exposing email statically on the page
  useEffect(() => {
    setEmail('s.ermakovich@gmail.com')
  }, [])

  return (
    <Content>
      <h1>Website development services</h1>
      <p>
        As a <Link to="/programming">programmer</Link> with over{' '}
        {new Date().getFullYear() - 2006} years of experience, I offer website
        development services for small businesses and individuals. Here and
        further by <i>website</i> I mean{' '}
        <OutboundLink href="https://jamstack.org/">Jamstack</OutboundLink>{' '}
        website.
      </p>

      <h4>Why order website development from me?</h4>
      <ul>
        <li>
          I have huge experience in website development. Previously I was
          leading front-end efforts in a bunch of internet startups, such as{' '}
          <OutboundLink href="https://verifiable.com">Verifiable</OutboundLink>,{' '}
          <OutboundLink href="https://dock.io">Dock</OutboundLink>,{' '}
          <OutboundLink href="https://remote.com">Remote</OutboundLink>, and
          some others.
        </li>
        <li>I offer very competitive prices for my work and expertise.</li>
        <li>
          I’m passionate about quality. In my work I stick to web standarts and
          best practices, focusing on accessibility and performance. I use
          auditing tools like{' '}
          <OutboundLink href="https://developers.google.com/web/tools/lighthouse/">
            Lighthouse
          </OutboundLink>{' '}
          and others to ensure this. For example you can{' '}
          <OutboundLink href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fermakovich.name">
            check
          </OutboundLink>{' '}
          my website in{' '}
          <OutboundLink href="https://developers.google.com/speed/pagespeed/insights">
            PageSpeed
          </OutboundLink>{' '}
          to see how it scores.
        </li>
      </ul>

      <h4>How do I work?</h4>
      <ol>
        <li>
          Send me your initial inquiry at{' '}
          <a href={`mailto: ${email}`}>{email}</a>, or via any other service of
          your choice mentioned on the{' '}
          <Link to="/programming">programming</Link> page. Further communication
          can be done via messengers (Telegram, Slack, etc.).
        </li>
        <li>
          I provide feedback and estimation based on requirements and designs
          that you give me. If you don’t have designs yet – no problem, I have a
          person who can help with designs.
        </li>
        <li>
          If we agree on all the aspects, then I send you a contract agreement
          PDF, which you need to print, sign, and send to my postal address.
          Alternatively we can organize work via{' '}
          <OutboundLink href="https://www.upwork.com">Upwork</OutboundLink>. In
          this case contract agreement is not needed, but the platform will take
          it’s fee (10-20%).
        </li>
        <li>
          I start building website and deploying live preview on a temporary
          address regularly to show the progress and get feedback. Process
          repeats page-by-page until website is finished.
        </li>
        <li>
          Setting up{' '}
          <OutboundLink href="https://search.google.com/search-console/about">
            Google Search Console
          </OutboundLink>{' '}
          to make sure there are no crawling and indexing issues.
        </li>
        <li>
          Setting up Google Analytics, or any other analytics of your choice.
        </li>
        <li>Publishing to production domain.</li>
        <li>
          Optionally, but I highly recommend to configure automatic updates for
          framework and plugins. Site will redeploy automatically when
          dependencies update. Usually this improves performance and fixes bugs.
          It’s important to keep dependencies and code up-to-date if you plan to
          scale website and introduce new features later. Similar like you keep
          your smartphone up-to-date, it helps to secure it and allows to use
          latest apps. Note: in case if there are major framework updates
          (usually once a year), they need to be applied manually by developer
          accordingly to upgrade docs. I typically reach out to client by myself
          later if there are major updates available which can be applied.
        </li>
        <li>
          If everything is ok, you send me payment via wire transfer, or via
          Upwork.
        </li>
        <li>
          I transfer code repository and deployment pipeline ownership to you.
        </li>
        <li>Enjoy :)</li>
      </ol>

      <br />
      <p>
        P.S. Dear recruiters, please do not contact me, as I’m not looking for
        any type of a permanent job!
      </p>
    </Content>
  )
}
