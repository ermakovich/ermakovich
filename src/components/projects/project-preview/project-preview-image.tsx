import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function ProjectPreviewImage({ node }) {
  const { frontmatter } = node
  const image = frontmatter.image || frontmatter.cover_image

  return (
    <a href={node.fields.slug}>
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt="post image"
        style={{
          flex: 'none',
          marginTop: '1.75rem',
          marginRight: '1rem',
          borderRadius: '8px',
          border: '1px solid rgba(var(--color-primary-rgb), 0.3)',
        }}
      />
    </a>
  )
}
