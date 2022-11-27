import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { TwitterTweetEmbed } from 'react-twitter-embed'

import Content from 'components/content'
import PostMeta from 'components/posts/post-meta'
import PostDate from 'components/posts/post-date'
import { getSrc, GatsbyImage } from 'gatsby-plugin-image'
import UnstyledList from 'components/unstyled-list'

import { bg as bgColor, fg as fgColor } from 'components/utils/colors'

const PostCover = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 0;
  min-height: 50vh;
  display: flex;
  align-items: center;

  h1 {
    background: ${fgColor};
    color: ${bgColor};
    display: inline-block;
    z-index: 1;
    padding: 0.5em;
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

const PostContent = styled(Content)`
  font-size: 1.1rem;
`

const NextPrev = styled(UnstyledList)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
`

export default function BlogPostTemplate({ pageContext, data: { site, markdownRemark } }) {
  const { excerpt, frontmatter, timeToRead, html } = markdownRemark
  const siteTitle = site.siteMetadata.title
  const siteUrl = site.siteMetadata.siteUrl
  const description = excerpt || site.siteMetadata.description
  const { previous, next } = pageContext
  const coverImage = frontmatter.cover_image
  const { tweetId, image, lang } = frontmatter
  const frontmatterImage = frontmatter.image || frontmatter.cover_image

  const publicImageURL = frontmatterImage && siteUrl + getSrc(frontmatterImage)
  const title = `${frontmatter.title} | ${siteTitle}`

  return (
    <>
      <Helmet
        meta={[
          {
            name: 'description',
            content: description,
          },
          ...(publicImageURL
            ? [
                {
                  name: 'og:image',
                  content: publicImageURL,
                },
                {
                  name: 'twitter:image',
                  content: publicImageURL,
                },
              ]
            : []),
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:site',
            content: '@ki_duk',
          },
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'twitter:description',
            content: description,
          },
        ]}
        title={title}
        htmlAttributes={{ lang: lang || 'en' }}
      />
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
      <PostContent>
        {!coverImage && <h1>{frontmatter.title}</h1>}
        <PostMeta>
          <PostDate value={frontmatter.date} />
          &nbsp;&middot;&nbsp;
          <span>{timeToRead} min read</span>
        </PostMeta>
        {image && (
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            loading="eager"
            alt="cover image"
          />
        )}
        <div dangerouslySetInnerHTML={{ __html: html }} />

        {tweetId && <TwitterTweetEmbed {...{ tweetId }} options={{ lang }} />}

        <NextPrev>
          {next && (
            <li>
              → Next post:&nbsp;
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
              </Link>
            </li>
          )}
          {previous && (
            <li>
              ← Previous post:&nbsp;
              <Link to={previous.fields.slug} rel="prev">
                {previous.frontmatter.title}
              </Link>
            </li>
          )}
        </NextPrev>
      </PostContent>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author
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
        date(formatString: "MMMM DD, YYYY")
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
        tweetId
      }
    }
  }
`
