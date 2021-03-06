import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import {
  PhotoGallery,
  PhotoGalleryItem,
  PhotoGalleryItemImg,
} from 'components/photo-gallery'

const PhotosPage = ({ data }) => {
  const photos = data.photos.edges
  const photoElements = photos.map((photo) => {
    const { publicURL, childImageSharp } = photo.node
    return (
      <PhotoGalleryItem
        key={publicURL}
        target="_blank"
        rel="noopener noreferrer"
        href={publicURL}
      >
        <PhotoGalleryItemImg fluid={childImageSharp.fluid} />
      </PhotoGalleryItem>
    )
  })

  return <PhotoGallery>{photoElements}</PhotoGallery>
}

export default PhotosPage

PhotosPage.propTypes = {
  data: PropTypes.shape().isRequired,
}

export const pageQuery = graphql`
  query {
    photos: allFile(
      filter: { relativeDirectory: { eq: "pages/photos/all" } }
      sort: { fields: birthTime }
    ) {
      edges {
        node {
          publicURL
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`
