import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import Content from 'components/content'
import PostMeta from 'components/posts/post-meta'
import PostDate from 'components/posts/post-date'
import Img from 'components/progressive-image'
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

export default function BlogPostTemplate(props) {
  const post = props.data.markdownRemark
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const description =
    post.excerpt || get(props, 'data.site.siteMetadata.description')
  const { previous, next } = props.pageContext
  const coverImage = post.frontmatter.cover_image
  const image = post.frontmatter.image
  const tags = post.frontmatter.tags

  return (
    <>
      <Helmet
        meta={[
          {
            name: 'description',
            content: description,
          },
          {
            name: 'og:image',
            content: image
              ? image.publicURL
              : coverImage
                ? coverImage.publicURL
                : null,
          },
        ]}
        title={`${post.frontmatter.title} | ${siteTitle}`}
        htmlAttributes={{ lang: post.frontmatter.lang || 'en' }}
      />
      {coverImage && (
        <PostCover>
          <PostCoverContent>
            <h1>{post.frontmatter.title}</h1>
          </PostCoverContent>
          <PostCoverImgWrapper>
            <Img
              fluid={coverImage.childImageSharp.fluid}
              alt="cover image"
              style={{
                height: '100%',
              }}
            />
          </PostCoverImgWrapper>
        </PostCover>
      )}
      <PostContent>
        {!coverImage && <h1>{post.frontmatter.title}</h1>}
        <PostMeta>
          <PostDate value={post.frontmatter.date} />
          &nbsp;&middot;&nbsp;
          <span>{post.timeToRead} min read</span>
        </PostMeta>
        {image && <Img fluid={image.childImageSharp.fluid} alt="cover image" />}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />

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
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          publicURL
        }
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluid_noBase64
            }
          }
          publicURL
        }
        tags
        lang
      }
    }
  }
`
