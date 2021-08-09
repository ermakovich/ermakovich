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
      <Helmet title={`${site.siteMetadata.title} - Programming`} />
      <Content>
        <h1>Programming</h1>
        <p>
          I have over {new Date().getFullYear() - 2006} years of programming
          experience. You can check my full working and studying background at{' '}
          <OutboundLink href="https://www.linkedin.com/in/ermakovich/">
            LinkedIn
          </OutboundLink>{' '}
          .
        </p>
        <p>
          In 2020 I decided to stop working full-time and switched to
          open-source and personal projects, including this website. You may
          want to check my{' '}
          <OutboundLink href="https://github.com/ermakovich">
            GitHub
          </OutboundLink>{' '}
          and{' '}
          <OutboundLink href="https://stackoverflow.com/users/434402/s-ermakovich">
            StackOverflow
          </OutboundLink>{' '}
          profiles.
        </p>

        <p>
          Currently I offer{' '}
          <Link to="/website-development-services">
            website development services
          </Link>
          .
        </p>
      </Content>
    </>
  )
}
