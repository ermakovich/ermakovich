import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'

import Content from 'components/content'
import PostPreview from 'components/posts/post-preview/post-preview'

import { SEO } from 'components/seo'

export const Head = () => (
  <SEO
    titleAddendum="Записи"
    description="Заметки на профессиональную тематику и наблюдения из жизни"
  />
)

export default function BlogIndex() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            timeToRead
            frontmatter {
              date(formatString: "MMMM DD, YYYY", locale: "ru")
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

  const posts = get(allMarkdownRemark, 'edges')

  return (
    <Content>
      <h1>Записи</h1>
      <p>
        В этом разделе мной публикуются записи на профессиональную тематику, но
        есть также и просто заметки из жизни. Часть из них на английском языке
        для широкой аудитории.
      </p>
      <p>
        P.S. Записи отражают сугубо моё личное мнение, не претендующее на
        истину.
      </p>
      <br />
      {posts.map(({ node }) => (
        <PostPreview key={node.fields.slug} {...{ node }} />
      ))}
    </Content>
  )
}
