import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function PostPreviewImage({ node }) {
  const { frontmatter } = node
  const image = frontmatter.image || frontmatter.cover_image

  return (
    <a href={node.fields.slug}>
      {image ? (
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          alt="post image"
          style={{
            flex: 'none',
            marginTop: '0.2rem',
            marginRight: '1rem',
            float: 'left',
            borderRadius: '6px',
            border: '1px solid rgba(var(--color-primary-rgb), 0.3)',
          }}
        />
      ) : null}
    </a>
  )
}
