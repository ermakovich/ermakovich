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
        <PhotoGalleryItemImg image={childImageSharp.gatsbyImageData} />
      </PhotoGalleryItem>
    )
  })

  return <PhotoGallery>{photoElements}</PhotoGallery>
}

export default PhotosPage

PhotosPage.propTypes = {
  data: PropTypes.shape().isRequired,
}

export const pageQuery = graphql`{
  photos: allFile(
    filter: {relativeDirectory: {eq: "pages/photos/all"}}
    sort: {birthTime: ASC}
  ) {
    edges {
      node {
        publicURL
        childImageSharp {
          gatsbyImageData(width: 400, layout: CONSTRAINED)
        }
      }
    }
  }
}`
