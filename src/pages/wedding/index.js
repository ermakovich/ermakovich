import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import LayoutBase from '../../components/layout-base'
import InternalLink from '../../components/internal-link'
import OutboundLink from '../../components/outbound-link'
import {
  PhotoGallery,
  PhotoGalleryItem,
  PhotoGalleryItemImg,
} from '../../components/photo-gallery'

import { Layout } from './_styles'

import egorPhoto from './crew/egor.jpg'
import marinaPhoto from './crew/marina.jpg'

const WeddingPage = ({ data }) => {
  const photos = data.photos.edges
  const photoElements = photos.map(photo => {
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

  return (
    <LayoutBase>
      <Helmet title="Вяселле Сяргея і Каці" />
      <Layout>
        <header className="section">
          <div className="section-content section-content--centered">
            <h1>Вяселле Сяргея і Каці 👫💒</h1>
            <h2>адбылося 24 лістапада 2017 года</h2>
            <p>Дзякуй усім за удзел!</p>
          </div>
          <span className="section-next-pointer">👇</span>
        </header>
        <section className="section">
          <div className="section-content">
            <h2>Праграма</h2>
            <div>
              <ul className="timeline">
                <li className="timeline-item">
                  <span className="timeline-item-time">14:40</span>
                  Спроба выкупа нявесты
                </li>
                <li className="timeline-item">
                  <span className="timeline-item-time">15:40</span>
                  Калі ўсё добра - роспіс у ЗАГСе
                </li>
                <li className="timeline-item">
                  <span className="timeline-item-time">17:00</span>
                  Асноўнае вяселле ў{' '}
                  <OutboundLink href="http://chehov.by">
                    кафэ-гасцеўні «Чэхаў»
                  </OutboundLink>
                </li>
              </ul>
              <h4 style={{ textAlign: 'center' }}>
                Наступны дзень (для моладзі)
              </h4>
              <ul className="timeline">
                <li className="timeline-item">
                  <span className="timeline-item-time">17:30</span>
                  Гульня{' '}
                  <OutboundLink href="http://questquest.by/category/minsk/quests/prytki-minsk">
                    «Хованкі ў лабірынце»
                  </OutboundLink>
                </li>
                <li className="timeline-item">
                  <span className="timeline-item-time">18:30</span>
                  Піцэрыя
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-content">
            <h2>Наша каманда</h2>
            <div className="crew">
              <div className="crew-item">
                <OutboundLink href="https://vk.com/marina_luts">
                  <img src={marinaPhoto} alt="Марына Луц" />
                </OutboundLink>
                <h3>Каардынатар</h3>
                <OutboundLink href="https://vk.com/marina_luts">
                  Марына Луц
                </OutboundLink>
              </div>
              <div className="crew-item">
                <OutboundLink href="https://vk.com/egor_danchenko_show">
                  <img src={egorPhoto} alt="Ягор Данчанка" />
                </OutboundLink>
                <h3>Вядучы</h3>
                <OutboundLink href="https://vk.com/egor_danchenko_show">
                  Ягор Данчанка
                </OutboundLink>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="section-content">
            <h2>Фатаграфіі і відэа</h2>
            <PhotoGallery>{photoElements}</PhotoGallery>
            <p>
              Больш здымкаў{' '}
              <OutboundLink href="https://photos.app.goo.gl/DXym5ASRohKf2N023">
                ад фатографа
              </OutboundLink>
            </p>
            <iframe
              className="video-frame"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QjsGwTfkAmA"
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              allowFullScreen
            />
          </div>
        </section>
      </Layout>
    </LayoutBase>
  )
}

export default WeddingPage

export const pageQuery = graphql`
  query WeddingPageQuery {
    photos: allFile(
      filter: { relativeDirectory: { eq: "pages/wedding/photos" } }
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
