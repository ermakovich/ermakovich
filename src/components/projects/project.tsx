import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { getSrc } from 'gatsby-plugin-image'

import Content from 'components/content'
import Meta from './project-meta'
import { GatsbyImage } from 'gatsby-plugin-image'
import UnstyledList from 'components/unstyled-list'
import { SEO } from 'components/seo'
import mq from 'components/media-queries'

export const Head = ({ data: { site, markdownRemark } }) => {
  const { excerpt, frontmatter } = markdownRemark
  const siteTitle = site.siteMetadata.title
  const frontmatterImage = frontmatter.image || frontmatter.cover_image

  const title = `${frontmatter.title} - ${siteTitle}`

  return (
    <SEO
      title={title}
      description={excerpt}
      image={frontmatterImage && getSrc(frontmatterImage)}
      lang={frontmatter.lang}
    >
      <meta name="robots" content="noindex" />
    </SEO>
  )
}

const Nav = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const ProjectCover = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 0;
  display: grid;
  align-items: center;

  @media (${mq.sm}) {
    padding: 0 1em;
  }
`

const ProjectTitleWrapper = styled.div`
  margin: 2rem auto;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  overflow: hidden;

  @media (${mq.sm}) {
    margin: 5rem auto;
    border-radius: 0.25rem;
  }

  @media (${mq.md}) {
    margin: 7.5rem auto;
    border-radius: 0.5rem;
  }

  @media (${mq.l}) {
    margin: 10rem auto;
    border-radius: 0.75rem;
  }
`

const ProjectTitle = styled.h1`
  background: var(--color-white);
  color: var(--color-black);
  display: inline-block;
  z-index: 1;
  padding: 0.5em 1em;
  margin: 0;
  font-size: 1.25rem;

  @media (${mq.sm}) {
    font-size: 1.5rem;
  }

  @media (${mq.md}) {
    font-size: 1.75rem;
  }

  @media (${mq.l}) {
    font-size: 2rem;
  }
`

const EnProjectWrapper = styled.div`
  font-size: 1.2rem;
`

const EnProject = styled.span`
  display: inline-block;
  background: rgba(var(--color-black-rgb), 0.9);
  padding: 0.4em;
`

const ProjectCoverContent = styled(Content)`
  max-width: 50em;
  grid-area: 1/1/1/1;
  z-index: 1;
`

const ProjectCoverImgWrapper = styled.div`
  grid-area: 1/1/1/1;
  margin: 0 auto;
  width: 100%;
  aspect-ratio: calc(1366 / 768);
  overflow: hidden;

  @media (${mq.sm}) {
    border-radius: 1rem;
  }

  @media (${mq.md}) {
    border-radius: 1.25rem;
  }

  @media (${mq.l}) {
    border-radius: 1.5rem;
    max-width: 1200px;
  }
`

const NextPrev = styled(UnstyledList)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
`

const nextProjectText = {
  ru: 'Следующий проект',
  en: 'Next project',
}

const prevProjectText = {
  ru: 'Предыдущий проект',
  en: 'Previous project',
}

export default function ProjectTemplate({
  pageContext,
  data: { site, markdownRemark },
}) {
  const { frontmatter, html } = markdownRemark
  const { previous, next } = pageContext
  const coverImage = frontmatter.cover_image
  const { image, lang } = frontmatter

  return (
    <>
      <Content>
        <Nav>
          <a href="/projects">← Проекты</a>
        </Nav>
      </Content>
      {coverImage && (
        <ProjectCover>
          <ProjectCoverImgWrapper>
            <GatsbyImage
              image={coverImage.childImageSharp.gatsbyImageData}
              alt="cover image"
              loading="eager"
              style={{
                height: '100%',
              }}
            />
          </ProjectCoverImgWrapper>
          <ProjectCoverContent>
            <ProjectTitleWrapper>
              {lang === 'en' && (
                <EnProjectWrapper>
                  <EnProject>In English /</EnProject>
                </EnProjectWrapper>
              )}
              <ProjectTitle>{frontmatter.title}</ProjectTitle>
            </ProjectTitleWrapper>
          </ProjectCoverContent>
        </ProjectCover>
      )}
      <Content>
        {!coverImage && <h1>{frontmatter.title}</h1>}
        {image && (
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            loading="eager"
            alt="cover image"
          />
        )}
        <Meta {...{ frontmatter }} />
        <h2>Описание</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <NextPrev>
          {next && (
            <li>
              → {nextProjectText[lang]}:&nbsp;
              <a href={next.fields.slug} rel="next">
                {next.frontmatter.title}
              </a>
            </li>
          )}
          {previous && (
            <li>
              ← {prevProjectText[lang]}:&nbsp;
              <a href={previous.fields.slug} rel="prev">
                {previous.frontmatter.title}
              </a>
            </li>
          )}
        </NextPrev>
      </Content>
    </>
  )
}

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        email
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      timeToRead
      frontmatter {
        title
        date
        updated_date
        start_date
        end_date
        is_part_time
        customer
        customer_address
        not_published_yet
        live_site
        site_type
        industry
        services
        tools
        pull_requests
        cover_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        image {
          childImageSharp {
            gatsbyImageData(width: 700, layout: CONSTRAINED)
          }
        }
        lang
      }
    }
  }
`
