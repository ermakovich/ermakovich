import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

const squareSize = '3.5rem'

export default function PostPreviewImage({ node }) {
  const { frontmatter } = node
  const image = frontmatter.image || frontmatter.cover_image

  return (
    <Link to={node.fields.slug}>
      {image ? (
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          alt="post image"
          style={{
            width: squareSize,
            height: squareSize,
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
            width: squareSize,
            height: squareSize,
            flex: 'none',
            marginTop: '0.2rem',
            marginRight: '1rem',
            float: 'left',
            borderRadius: '.2rem',
          }}
        />
      )}
    </Link>
  )
}
