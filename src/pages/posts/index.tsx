import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import Content from 'components/content'
import PostPreview from 'components/posts/post-preview/post-preview'

import { SEO } from 'components/seo'
import UnstyledList from 'components/unstyled-list'

export const Head = () => (
  <SEO
    titleAddendum="Записи"
    description="Заметки на профессиональную тематику и наблюдения из жизни"
  />
)

const ListItem = styled.li`
  & + & {
    margin-top: 3rem;
  }
`

export default function BlogIndex() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/posts/" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            timeToRead
            frontmatter {
              date
              updated_date
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
              lang
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
        В этом разделе мной публикуются записи на профессиональную и
        бизнес-тематику, но есть также и просто заметки из жизни. Часть из
        них на английском языке для более широкой аудитории.
      </p>
      <p>
        P.S. Записи отражают сугубо моё личное мнение, не претендующее на
        истину.
      </p>
      <br />
      <UnstyledList>
        {posts.map(({ node }) => (
          <ListItem key={node.fields.slug}>
            <PostPreview {...{ node }} />
          </ListItem>
        ))}
      </UnstyledList>
    </Content>
  )
}
