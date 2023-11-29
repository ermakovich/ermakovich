import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { getSrc } from 'gatsby-plugin-image'
import { format } from 'date-fns'
import { enUS as en, ru } from 'date-fns/locale'

import Content from 'components/content'
import PostMeta from 'components/posts/post-meta'
import PostDate from 'components/posts/post-date'
import { GatsbyImage } from 'gatsby-plugin-image'
import UnstyledList from 'components/unstyled-list'
import { bg as bgColor, fg as fgColor } from 'components/utils/colors'
import { SEO } from 'components/seo'

export const Head = ({ data: { site, markdownRemark } }) => {
  const { excerpt, frontmatter } = markdownRemark
  const siteTitle = site.siteMetadata.title
  const frontmatterImage = frontmatter.image || frontmatter.cover_image

  const title = `${frontmatter.title} | ${siteTitle}`

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

  h1 {
    background: ${fgColor};
    color: ${bgColor};
    display: inline-block;
    z-index: 1;
    padding: 0.5em;
    margin: 10rem auto;
  }
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

const locales = {
  en,
  ru,
}

const updatedText = {
  ru: 'обновлено',
  en: 'edited',
}

const timeToReadText = {
  ru: 'мин чтения',
  en: 'min read',
}

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
  const { frontmatter, timeToRead, html } = markdownRemark
  const { previous, next } = pageContext
  const coverImage = frontmatter.cover_image
  const { image, lang } = frontmatter

  return (
    <>
      {coverImage && (
        <PostCover>
          <PostCoverContent>
            <h1>{frontmatter.title}</h1>
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
        <PostMeta>
          <PostDate
            value={format(new Date(frontmatter.date), 'MMMM dd, yyyy', {
              locale: locales[lang],
            })}
          />
          &nbsp;&middot;&nbsp;
          {frontmatter.updated_date && (
            <>
              {updatedText[lang]}{' '}
              <PostDate
                value={format(
                  new Date(frontmatter.updated_date),
                  'MMMM dd, yyyy',
                  {
                    locale: locales[lang],
                  }
                )}
              />
              &nbsp;&middot;&nbsp;
            </>
          )}
          <span>
            {timeToRead} {timeToReadText[lang]}
          </span>
        </PostMeta>
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
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
              </Link>
            </li>
          )}
          {previous && (
            <li>
              ← {prevPostText[lang]}:&nbsp;
              <Link to={previous.fields.slug} rel="prev">
                {previous.frontmatter.title}
              </Link>
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
