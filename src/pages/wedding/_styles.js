import styled from 'styled-components'

import { GatsbyImage } from 'gatsby-plugin-image'

import { fg as fgColor } from 'components/utils/colors'

export const Layout = styled.div`
  /* cyrillic-ext */
  @font-face {
    font-family: 'Cormorant Infant';
    font-style: normal;
    font-weight: 400;
    src: local('Cormorant Infant Regular'), local('CormorantInfant-Regular'),
      url(https://fonts.gstatic.com/s/cormorantinfant/v5/HhyPU44g9vKiM1sORYSiWeAsLN997_oV2RkDTq8kPw.woff2)
        format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
      U+FE2E-FE2F;
  }
  /* cyrillic */
  @font-face {
    font-family: 'Cormorant Infant';
    font-style: normal;
    font-weight: 400;
    src: local('Cormorant Infant Regular'), local('CormorantInfant-Regular'),
      url(https://fonts.gstatic.com/s/cormorantinfant/v5/HhyPU44g9vKiM1sORYSiWeAsLN997_MV2RkDTq8kPw.woff2)
        format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  /* vietnamese */
  @font-face {
    font-family: 'Cormorant Infant';
    font-style: normal;
    font-weight: 400;
    src: local('Cormorant Infant Regular'), local('CormorantInfant-Regular'),
      url(https://fonts.gstatic.com/s/cormorantinfant/v5/HhyPU44g9vKiM1sORYSiWeAsLN997_gV2RkDTq8kPw.woff2)
        format('woff2');
    unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Cormorant Infant';
    font-style: normal;
    font-weight: 400;
    src: local('Cormorant Infant Regular'), local('CormorantInfant-Regular'),
      url(https://fonts.gstatic.com/s/cormorantinfant/v5/HhyPU44g9vKiM1sORYSiWeAsLN997_kV2RkDTq8kPw.woff2)
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
      U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Cormorant Infant';
    font-style: normal;
    font-weight: 400;
    src: local('Cormorant Infant Regular'), local('CormorantInfant-Regular'),
      url(https://fonts.gstatic.com/s/cormorantinfant/v5/HhyPU44g9vKiM1sORYSiWeAsLN997_cV2RkDTq8.woff2)
        format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  font-family: 'Cormorant Infant', Georgia, Times New Roman;
  line-height: 2;

  @media (min-width: 1280px) {
    font-size: 1.4em;
  }

  @media (min-width: 1440px) {
    font-size: 1.5em;
  }

  .section {
    min-height: 100vh;
    display: flex;
  }

  .section:nth-child(odd) {
    color: ${fgColor};
    text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.7);
    position: relative;

    a {
      color: #81b4ee;
    }
  }

  .section-tint-overlay {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(63, 43, 43);
    opacity: 0.8;
  }

  .section-content {
    z-index: 2;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3em 1em;
  }

  .section-content.section-content--centered {
    text-align: center;
  }

  .section-next-pointer {
    position: absolute;
    bottom: 1em;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.2em;
  }

  .timeline-item:not(:first-child) {
    position: relative;
  }

  /*.timeline-item:not(:first-child)::before {
    content: '|';
    position: absolute;
  }*/

  .timeline-item-time {
    color: rgb(213, 134, 130);
    margin-right: 1em;
  }

  @media (min-width: 1024px) {
    .crew {
      display: flex;
      align-items: flex-start;
    }
  }

  .crew-item {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .crew-item + .crew-item {
      margin-left: 3em;
    }
  }

  .crew-item h3 {
    margin-top: 0.5em;
    margin-bottom: 0;
  }

  .video-frame {
    max-width: 100%;
  }
`

export const Intro = styled.header`
  position: relative;
`

export const CrewAvatar = styled(GatsbyImage)`
  border-radius: 50%;
  box-shadow: 0 0 0 0.5em rgba(0, 0, 0, 0.06);
`
