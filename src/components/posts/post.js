import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import Content from 'components/content'
import PostMeta from 'components/posts/post-meta'
import PostDate from 'components/posts/post-date'
import Img from 'components/progressive-image'

const PostCover = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 0;
  min-height: 50vh;
  display: flex;
  align-items: center;

  h1 {
    background: white;
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

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const description =
      post.excerpt || get(this.props, 'data.site.siteMetadata.description')
    const { previous, next } = this.props.pageContext
    const coverImage = post.frontmatter.cover_image

    return (
      <>
        <Helmet
          meta={[{ name: 'description', content: description }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
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
          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            {previous && (
              <li>
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              </li>
            )}

            {next && (
              <li>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
            )}
          </ul>
        </PostContent>
      </>
    )
  }
}

export default BlogPostTemplate

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
        }
      }
    }
  }
`
