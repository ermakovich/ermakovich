import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

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
            width: 70,
            height: 70,
            flex: 'none',
            marginTop: 5,
            marginRight: 20,
            float: 'left',
            borderRadius: 5,
          }}
        />
      ) : (
        <StaticImage
          src="./memo.png"
          alt="post image"
          loading="eager"
          layout="fixed"
          width={70}
          height={70}
          style={{
            flex: 'none',
            marginTop: 5,
            marginRight: 20,
            float: 'left',
            borderRadius: 5,
          }}
        />
      )}
    </Link>
  )
}
