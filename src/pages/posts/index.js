import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Content from 'components/content'
import PostMeta from 'components/posts/post-meta'
import PostDate from 'components/posts/post-date'
import Img from 'components/progressive-image'

export default function BlogIndex() {
  const { site, allMarkdownRemark, memoIcon } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
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
              cover_image {
                childImageSharp {
                  fixed(width: 70, height: 70) {
                    ...GatsbyImageSharpFixed
                    ...GatsbyImageSharpFixed_noBase64
                  }
                }
                publicURL
              }
              image {
                childImageSharp {
                  fixed(width: 70, height: 70) {
                    ...GatsbyImageSharpFixed
                    ...GatsbyImageSharpFixed_noBase64
                  }
                }
                publicURL
              }
            }
          }
        }
      }
      memoIcon: file(relativePath: { eq: "pages/posts/memo.png" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const posts = get(allMarkdownRemark, 'edges')

  return (
    <>
      <Helmet title={`${site.siteMetadata.title} - Posts`} />
      <Content>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          const { frontmatter } = node
          const image = frontmatter.image || frontmatter.cover_image
          return (
            <div key={node.fields.slug}>
              <Link to={node.fields.slug}>
                <Img
                  fixed={
                    image
                      ? image.childImageSharp.fixed
                      : memoIcon.childImageSharp.fixed
                  }
                  alt="post image"
                  style={{
                    width: 70,
                    height: 70,
                    flex: 'none',
                    marginTop: 5,
                    marginRight: 20,
                    float: 'left',
                    borderRadius: 5,
                  }}
                />
              </Link>
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
    </>
  )
}
