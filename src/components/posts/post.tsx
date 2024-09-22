import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { getSrc } from 'gatsby-plugin-image'

import Content from 'components/content'
import PostMeta from 'components/posts/post-meta'
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
    />
  )
}

const PostCover = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 0;
  display: flex;
  align-items: center;
`

const PostTitleWrapper = styled.div`
  margin: 2rem auto;

  @media (${mq.sm}) {
    margin: 5rem auto;
  }

  @media (${mq.md}) {
    margin: 7.5rem auto;
  }

  @media (${mq.l}) {
    margin: 10rem auto;
  }
`

const PostTitle = styled.h1`
  background: var(--color-white);
  color: var(--color-black);
  display: inline-block;
  z-index: 1;
  padding: 0.5em;
  margin: 0;
`

const EnPostWrapper = styled.div`
  font-size: 1.2rem;
`

const EnPost = styled.span`
  display: inline-block;
  background: rgba(var(--color-black-rgb), 0.9);
  padding: 0.4em;
`

const PostCoverContent = styled(Content)`
  max-width: 50em;
`

const PostCoverImgWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`

const PostControls = styled.div`
  text-align: right;
`

const NextPrev = styled(UnstyledList)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
`

const nextPostText = {
  ru: 'Следующая запись',
  en: 'Next post',
}

const prevPostText = {
  ru: 'Предыдущая запись',
  en: 'Previous post',
}

const feedbackText = {
  ru: 'отзыв',
  en: 'feedback',
}

const sendFeedbackText = {
  ru: `отправить ${feedbackText.ru}`,
  en: `send ${feedbackText.en}`,
}

export default function BlogPostTemplate({
  pageContext,
  data: { site, markdownRemark },
}) {
  const { frontmatter, html, timeToRead } = markdownRemark
  const { previous, next } = pageContext
  const coverImage = frontmatter.cover_image
  const { image, lang } = frontmatter

  return (
    <>
      {coverImage && (
        <PostCover>
          <PostCoverContent>
            <PostTitleWrapper>
              {lang === 'en' && (
                <EnPostWrapper>
                  <EnPost>In English /</EnPost>
                </EnPostWrapper>
              )}
              <PostTitle>{frontmatter.title}</PostTitle>
            </PostTitleWrapper>
          </PostCoverContent>
          <PostCoverImgWrapper>
            <GatsbyImage
              image={coverImage.childImageSharp.gatsbyImageData}
              alt="cover image"
              loading="eager"
              style={{
                height: '100%',
              }}
            />
          </PostCoverImgWrapper>
        </PostCover>
      )}
      <Content>
        {!coverImage && <h1>{frontmatter.title}</h1>}
        <PostMeta {...{ frontmatter, timeToRead }} />
        {image && (
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            loading="eager"
            alt="cover image"
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <PostControls>
          <a
            href={`mailto:${site.siteMetadata.email}?subject=${
              feedbackText[lang]
            }: ${frontmatter.title}&body=${
              site.siteMetadata.siteUrl + pageContext.slug
            }`}
          >
            {sendFeedbackText[lang]}
          </a>
        </PostControls>

        <NextPrev>
          {next && (
            <li>
              → {nextPostText[lang]}:&nbsp;
              <a href={next.fields.slug} rel="next">
                {next.frontmatter.title}
              </a>
            </li>
          )}
          {previous && (
            <li>
              ← {prevPostText[lang]}:&nbsp;
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
  query BlogPostBySlug($slug: String!) {
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
