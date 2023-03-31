import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import OutboundLink from 'components/outbound-link'
import FileLink from 'components/file-link'
import Content from 'components/content'
import TextSystem from 'components/text-system'
import { SEO } from 'components/seo'
import mq from 'components/media-queries'

export const Head = () => (
  <SEO
    titleAddendum="Резюме"
    description="Нанять веб-разработчика React и специалиста по вёрстке HTML и CSS в Санкт-Петербурге."
  />
)

const Header = styled.div`
  display: flex;
  align-items: center;

  h1 {
    flex: 1;
  }

  a {
    margin-top: 10px;
  }
`

const Subheader = styled.div`
  display: flex;
`

const AvatarWrapper = styled.div`
  margin-right: 20px;
  z-index: 0;
  flex: none;
  align-self: center;

  @media (${mq.xs}) {
    width: 80px;
    height: 80px;
  }
`

const Generated = styled(TextSystem)`
  position: absolute;
  bottom: 0;
  font-size: smaller;

  @media not print {
    display: none;
  }
`

const Root = styled.div`
  @media not print {
    font-size: 16px;
  }

  @media print {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;

    ${Header} {
      display: none;
    }
  }
`

export default function ResumePage() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Root>
      <Content>
        <Header>
          <h1>Резюме</h1>
          <FileLink href="/generate/resume.pdf" target="_blank">
            PDF-версия
          </FileLink>
        </Header>
        <Subheader>
          <AvatarWrapper>
            <StaticImage
              src="../../images/avatar.jpg"
              alt="Photo"
              width={130}
              height={130}
              loading="eager"
              style={{ borderRadius: '50%', boxShadow: '0 0 5px 0', zIndex: 0 }}
            />
          </AvatarWrapper>

          <div>
            <h2>{site.siteMetadata.title}</h2>

            <h3>Веб-разработчик (React)</h3>
          </div>
        </Subheader>

        <p>
          <em>
            Специализируюсь на веб-разработке с использованием React и
            адаптивной вёрстке.
          </em>
        </p>

        <p>
          <strong>Инструменты:</strong> React (Next.js / Gatsby), TypeScript,
          Styled Components, Babel, ESLint, Prettier, Lighthouse, NodeJS,
          Express, Nginx, Docker, Git, Jest, Puppeteer
        </p>

        <p>
          <strong>Образование:</strong>{' '}
          <OutboundLink
            href="https://bntu.by/faculties/fitr"
            target="_blank"
            rel="noopener noreferrer"
          >
            БНТУ ФИТР
          </OutboundLink>{' '}
          / 2004-2009 гг.
        </p>
        <p>
          <strong>Опыт работы:</strong>
        </p>
        <ul>
          <li>
            Стартапы{' '}
            <OutboundLink
              href="https://verifiable.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              verifiable.com
            </OutboundLink>
            ,{' '}
            <OutboundLink
              href="https://dock.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              dock.io
            </OutboundLink>
            ,{' '}
            <OutboundLink
              href="https://remote.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              remote.com
            </OutboundLink>{' '}
            — веб-разработка в рамках одной команды / 2015-2020 гг.
          </li>
          <li>
            ScienceSoft,{' '}
            <OutboundLink
              href="https://www.scnsoft.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              scnsoft.com
            </OutboundLink>{' '}
            — различные проекты (веб, native) / 2009–2015 гг.
          </li>
          <li>Госсектор — различные проекты (веб, native) / 2007–2009 гг.</li>
        </ul>
        <p>
          <strong>Сертификации:</strong>
        </p>
        <ul>
          <li>
            Microsoft Certified Solutions Associate: Web Applications / 2016 г.{' '}
            <FileLink
              href="/upload/MCPDigitalCertPDF/Certificate_1.pdf"
              target="_blank"
            >
              pdf
            </FileLink>
          </li>
          <li>
            Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3
            / 2012 г.{' '}
            <FileLink
              href="/upload/MCPDigitalCertPDF/Certificate_3.pdf"
              target="_blank"
            >
              pdf
            </FileLink>
          </li>
          <li>
            Microsoft Certified Professional / 2012 г.{' '}
            <FileLink
              href="/upload/MCPDigitalCertPDF/Certificate_2.pdf"
              target="_blank"
            >
              pdf
            </FileLink>
          </li>
        </ul>
        <p>
          <strong>Профили:</strong>{' '}
          <OutboundLink href="https://www.linkedin.com/in/ermakovich/">
            LinkedIn
          </OutboundLink>
          ,{' '}
          <OutboundLink href="https://github.com/ermakovich">
            GitHub
          </OutboundLink>
          ,{' '}
          <OutboundLink href="https://stackoverflow.com/users/434402/s-ermakovich">
            StackOverflow
          </OutboundLink>
        </p>

        <Generated>
          веб-версия:{' '}
          <a href="https://ermakovich.ru/resume">
            https://ermakovich.ru/resume
          </a>
        </Generated>
      </Content>
    </Root>
  )
}
