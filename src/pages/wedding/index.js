import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import OutboundLink from 'components/outbound-link'
import Img from 'components/progressive-image'
import {
  PhotoGallery,
  PhotoGalleryItem,
  PhotoGalleryItemImg,
} from 'components/photo-gallery'

import { Layout, Intro, CrewAvatar } from './_styles'

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
    <>
      <Helmet title="Вяселле Сяргея і Каці" />
      <Layout>
        <Intro className="section">
          <div className="section-content section-content--centered">
            <h1>Вяселле Сяргея і Каці 👫💒</h1>
            <h2>адбылося 24 лістапада 2017 года</h2>
            <p>Дзякуй усім за удзел!</p>
          </div>
          <span className="section-next-pointer">👇</span>
          <Img
            fluid={data.introBg.childImageSharp.fluid}
            alt="background"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
              fontSize: '300px',
            }}
          />
        </Intro>
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
                  <CrewAvatar
                    fixed={data.marinaPhoto.childImageSharp.fixed}
                    alt="Марына Луц"
                  />
                </OutboundLink>
                <h3>Каардынатар</h3>
                <OutboundLink href="https://vk.com/marina_luts">
                  Марына Луц
                </OutboundLink>
              </div>
              <div className="crew-item">
                <OutboundLink href="https://vk.com/egor_danchenko_show">
                  <CrewAvatar
                    fixed={data.egorPhoto.childImageSharp.fixed}
                    alt="Ягор Данчанка"
                  />
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
    </>
  )
}

export default WeddingPage

WeddingPage.propTypes = {
  data: PropTypes.shape().isRequired,
}

export const pageQuery = graphql`
  query {
    introBg: file(relativePath: { eq: "pages/wedding/photos/50.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
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
    marinaPhoto: file(relativePath: { eq: "pages/wedding/crew/marina.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    egorPhoto: file(relativePath: { eq: "pages/wedding/crew/egor.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`
