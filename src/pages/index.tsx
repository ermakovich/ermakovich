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
    description="Веб-разработчик JavaScript (React) в Санкт-Петербурге"
  />
)

export default function AboutPage() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/posts/" } } }
        limit: 1
        sort: { frontmatter: { date: DESC } }
      ) {
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
                  gatsbyImageData(width: 120, height: 70, layout: FIXED)
                }
              }
              image {
                childImageSharp {
                  gatsbyImageData(width: 120, height: 70, layout: FIXED)
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
        Привет, меня зовут Сергей Ермакович 👋. Я веб-разработчик c более чем
        15-летним опытом. На данный момент являюсь фрилансером. Оказываю
        фиксированные услуги по веб-разработке, вёрстке HTML & CSS,
        автоматизации, и предоставляю консультации на платной основе. Ранее
        работал в интернет-стартапах{' '}
        <OutboundLink
          href="https://verifiable.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Verifiable.com
        </OutboundLink>
        ,{' '}
        <OutboundLink
          href="https://dock.io"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Dock.io
        </OutboundLink>
        ,{' '}
        <OutboundLink
          href="https://remote.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Remote.com
        </OutboundLink>
        , и других компаниях.
      </p>
      <p style={{ textAlign: 'center' }}>
        <Button as="a" href="/resume/">
          Посмотреть резюме 🧐
        </Button>
      </p>
      <p>
        Заметки на профессиональную и бизнес-тематику, а также просто наблюдения
        из жизни, я публикую в <a href="/posts/">записях</a>.
      </p>
      <p>
        Последние выполненные мной работы в можно посмотреть в{' '}
        <a href="/projects/">проектах</a>.
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
