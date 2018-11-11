import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import Layout from 'components/layout'
import Content from 'components/content'
import PostMeta from 'components/blog/post-meta'
import PostDate from 'components/blog/post-date'

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

    return (
      <Layout>
        <Helmet
          meta={[{ name: 'description', content: description }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <PostContent>
          <h1>{post.frontmatter.title}</h1>
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
      </Layout>
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
      }
    }
  }
`
