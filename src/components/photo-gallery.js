import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const PhotoGallery = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export const PhotoGalleryItem = styled.a`
  display: flex;
  align-items: flex-start;
  border: 0.1rem solid rgb(61, 60, 58);
  box-sizing: border-box;
  position: relative;

  @media (max-width: 400px) {
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(63, 43, 43);
    opacity: 0;
    z-index: 0;
    transition: opacity 0.2s;
  }

  &:hover::after {
    opacity: 0.2;
  }

  .gatsby-image-outer-wrapper {
    width: 100%;
  }
`

export const PhotoGalleryItemImg = styled(GatsbyImage)`
  width: 100%;

  @media (min-width: 400px) {
    width: 400px;
    height: 267px;
  }
`
