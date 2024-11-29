import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import Content from 'components/content'
import ProjectPreview from 'components/projects/project-preview/project-preview'

import { SEO } from 'components/seo'
import UnstyledList from 'components/unstyled-list'
import { getSrc } from 'gatsby-plugin-image'

export const Head = ({ data }) => {
  const projects = data.last.edges

  return (
    <SEO
      titleAddendum="Проекты"
      description="Проекты, в которых я принимал участие в качестве веб-разработчика"
      image={getSrc(projects[0].node.frontmatter.cover_image)}
    >
      <meta name="robots" content="noindex" />
    </SEO>
  )
}

const ListItem = styled.li`
  & + & {
    margin-top: 3rem;
  }
`

export default function ProjectsIndex({ data }) {
  const projects = get(data.allMarkdownRemark, 'edges')

  return (
    <Content>
      <h1>Проекты</h1>
      <p>
        В данном разделе представлены последние проекты, в которых мне
        доводилось принимать участие в качестве веб-разработчика.
      </p>
      <br />
      <UnstyledList>
        {projects.map(({ node }) => (
          <ListItem key={node.fields.slug}>
            <ProjectPreview {...{ node }} />
          </ListItem>
        ))}
      </UnstyledList>
    </Content>
  )
}

export const pageQuery = graphql`
  query ProjectsPageQuery {
    last: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/projects/" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          frontmatter {
            cover_image {
              childImageSharp {
                gatsbyImageData(width: 1200, height: 630, layout: FIXED)
              }
            }
          }
        }
      }
    }
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
                gatsbyImageData(width: 210, height: 118, layout: FIXED)
              }
            }
            image {
              childImageSharp {
                gatsbyImageData(width: 210, height: 118, layout: FIXED)
              }
            }
            lang
          }
        }
      }
    }
  }
`
