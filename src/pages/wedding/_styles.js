import styled from 'styled-components'

import Img from '../../components/progressive-image'

export const Layout = styled.div`
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
    color: white;
    text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.7);
    position: relative;
  }

  .section:nth-child(odd) a {
    color: white;
  }

  .section:nth-child(odd)::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(63, 43, 43);
    opacity: 0.8;
    z-index: 0;
  }

  .section-content {
    z-index: 1;
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
    color: brown;
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

export const CrewAvatar = styled(Img)`
  border-radius: 50%;
  box-shadow: 0 0 0 0.5em rgba(0, 0, 0, 0.06);
`
