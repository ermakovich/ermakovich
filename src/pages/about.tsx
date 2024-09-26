import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Content from 'components/content'
import { SEO } from 'components/seo'
import Button from 'components/button'
import OutboundLink from 'components/outbound-link'
import PostPreview from 'components/posts/post-preview/post-preview'

export const Head = () => (
  <SEO
    titleAddendum="Обо мне"
    description="Веб-разработчик JavaScript (React) в Санкт-Петергбурге"
  />
)

export default function AboutPage() {
  const { site, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(limit: 1, sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            fields {
              slug
            }
            timeToRead
            frontmatter {
              date
              updated_date
              lang
              title
              cover_image {
                childImageSharp {
                  gatsbyImageData(width: 70, height: 70, layout: FIXED)
                }
              }
              image {
                childImageSharp {
                  gatsbyImageData(width: 70, height: 70, layout: FIXED)
                }
              }
            }
          }
        }
      }
    }
  `)

  const post = allMarkdownRemark.edges[0]

  return (
    <Content>
      <h1>Обо мне</h1>
      <p>
        Меня зовут {site.siteMetadata.title}. По профессии я программист,
        специализируюсь на веб-разработке. В данный момент работаю над
        коммерческими, персональными и open source проектами (
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
        <Button as="a" href="/resume">
          Посмотреть резюме 🧐
        </Button>
      </p>
      <p>
        Заметки на профессиональную тематику и просто наблюдения из жизни я
        публикую в <a href="/posts">записях</a>.
      </p>

      {post && (
        <section>
          <br />
          <p>Последняя запись:</p>
          <PostPreview {...post} />
        </section>
      )}
    </Content>
  )
}
