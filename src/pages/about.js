import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Content from 'components/content'
import { SEO } from 'components/seo'
import Button from 'components/button'
import OutboundLink from 'components/outbound-link'

export const Head = () => (
  <SEO
    titleAddendum="Обо мне"
    description="Веб-разработчик JavaScript (React) в Санкт-Петергбурге"
  />
)

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
    <Content>
      <h1>Обо мне</h1>
      <p>
        Меня зовут {site.siteMetadata.title}. С недавнего времени я живу в
        Санкт-Петербурге. По профессии я программист, специализируюсь на
        веб-разработке. В данный момент работаю над персональными и open source
        проектами (
        <OutboundLink
          href="https://github.com/ermakovich"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </OutboundLink>
        ). Ранее возглавлял веб-разработку в интернет-стартапах{' '}
        <OutboundLink
          href="https://verifiable.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Verifiable.com
        </OutboundLink>
        ,{' '}
        <OutboundLink
          href="https://dock.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dock.io
        </OutboundLink>
        ,{' '}
        <OutboundLink
          href="https://remote.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Remote.com
        </OutboundLink>
        . Рассматриваю предложения по работе и сотрудничеству.
      </p>
      <p style={{ textAlign: 'center' }}>
        <Button as={Link} to="/resume">
          Посмотреть резюме 🧐
        </Button>
      </p>
      <p>
        Заметки на профессиональную тематику и просто наблюдения из жизни я
        публикую в <Link to="/posts">записях</Link>.
      </p>
    </Content>
  )
}
