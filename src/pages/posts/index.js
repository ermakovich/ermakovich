import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Content from 'components/content'
import PostMeta from 'components/posts/post-meta'
import PostDate from 'components/posts/post-date'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Content>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <PostMeta>
                <PostDate value={node.frontmatter.date} />
                &nbsp;&middot;&nbsp;
                <span>{node.timeToRead} min read</span>
              </PostMeta>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Content>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
