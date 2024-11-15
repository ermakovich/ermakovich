import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import Content from 'components/content'
import ProjectPreview from 'components/projects/project-preview/project-preview'

import { SEO } from 'components/seo'
import UnstyledList from 'components/unstyled-list'

export const Head = () => (
  <SEO
    titleAddendum="Проекты"
    description="Проекты, в которых я принимал участие в качестве веб-разработчика"
  >
    <meta name="robots" content="noindex" />
  </SEO>
)

const ListItem = styled.li`
  & + & {
    margin-top: 3rem;
  }
`

export default function ProjectsIndex() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/projects/" } } }
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
              start_date
              end_date
              is_part_time
              customer
              customer_address
              live_site
              site_type
              industry
              services
              tools
              pull_requests
              cover_image {
                childImageSharp {
                  gatsbyImageData(width: 210, height: 140, layout: FIXED)
                }
              }
              image {
                childImageSharp {
                  gatsbyImageData(width: 210, height: 140, layout: FIXED)
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
      <h1>Проекты (дополняется)</h1>
      <p>
        В данном разделе представлены проекты, в которых мне доводилось
        принимать участие в качестве веб-разработчика.
      </p>
      <br />
      <UnstyledList>
        {posts.map(({ node }) => (
          <ListItem key={node.fields.slug}>
            <ProjectPreview {...{ node }} />
          </ListItem>
        ))}
      </UnstyledList>
    </Content>
  )
}
