import React from 'react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

export default function ProjectPreviewImage({ node }) {
  const { frontmatter } = node
  const image = frontmatter.image || frontmatter.cover_image

  return (
    <a href={node.fields.slug}>
      {image ? (
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          alt="post image"
          style={{
            width: '9rem',
            height: '6rem',
            flex: 'none',
            marginTop: '0.2rem',
            marginRight: '1rem',
            float: 'left',
            borderRadius: '.2rem',
          }}
        />
      ) : (
        <StaticImage
          src="./memo.png"
          alt="post image"
          loading="eager"
          layout="fixed"
          style={{
            width: '9rem',
            height: '6rem',
            flex: 'none',
            marginTop: '0.2rem',
            marginRight: '1rem',
            float: 'left',
            borderRadius: '.2rem',
          }}
        />
      )}
    </a>
  )
}
