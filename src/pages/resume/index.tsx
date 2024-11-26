import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import OutboundLink from 'components/outbound-link'
import FileLink from 'components/file-link'
import Content, { LargeContent } from 'components/content'
import TextSystem from 'components/text-system'
import { SEO } from 'components/seo'
import UnstyledList from '../../components/unstyled-list'
import mq from 'components/media-queries'

export const Head = () => (
  <SEO
    titleAddendum="Резюме"
    description="Веб-разработчик TypeScript / React и специалист по вёрстке HTML и CSS в Санкт-Петербурге."
  />
)

const Tools = styled(UnstyledList)`
  margin-top: 0;
  margin-left: -0.25em;
`

const Tool = styled.li`
  background: rgba(var(--color-primary-rgb), 0.1);
  border-radius: 0.25em;
  display: inline-block;
  margin: 0.25em;
  padding: 0.25em 0.75em;
  white-space: nowrap;
`

const Header = styled.div`
  display: flex;
  align-items: center;

  h1 {
    flex: 1;
  }

  a {
    margin-top: 0.5rem;
  }
`

const Subheader = styled(LargeContent)`
  @media not print {
    background: rgba(var(--color-primary-rgb), 0.1);
  }
  border-radius: 1em;
  padding-top: 2em;
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${mq.sm}) {
    display: flex;
    flex-direction: row;
  }
`

const AvatarWrapper = styled.div`
  z-index: 0;

  @media (${mq.sm}) {
    margin-right: 2rem;
    flex: none;
    align-self: center;
  }
`

const Generated = styled(TextSystem)`
  font-size: smaller;
  margin-top: 4em;

  @media not print {
    display: none;
  }
`

const Root = styled.div`
  @media print {
    position: absolute;
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

const BlockQuote = styled.blockquote`
  margin-left: 0;

  @media screen {
    margin: 3em 0;
  }
`

const Block = styled(Content)`
  @media not print {
    background: rgba(var(--color-primary-rgb), 0.1);
    border-radius: 0.5em;
    padding: 2em;
    padding-top: 0.5em;
    padding-bottom: 1em;
    margin: 3em 0;
  }
`

const Profiles = styled(UnstyledList)`
  margin-top: 0;
  margin-left: -0.5em;
`

const Profile = styled.li`
  color: var(--background-color);
  display: inline-block;
  margin: 1em 0.5em;
  white-space: nowrap;
`

const ProfileLink = styled(OutboundLink)`
  background: rgba(var(--color-primary-rgb), 0.1);
  padding: 0.75em 1em;
  border-radius: 0.25em;
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
        </Header>
      </Content>

      <Subheader>
        <AvatarWrapper>
          <StaticImage
            src="../../images/avatar.jpg"
            alt="Photo"
            loading="eager"
            width={140}
            height={140}
            layout="fixed"
            style={{
              borderRadius: '50%',
              boxShadow: '0 0 .2rem 0',
              zIndex: 0,
            }}
          />
        </AvatarWrapper>

        <div>
          <h2>{site.siteMetadata.title}</h2>

          <h3>Веб-разработчик TypeScript / React</h3>
        </div>
      </Subheader>

      <Content>
        <BlockQuote>
          <em>
            Специализируюсь на веб-разработке с использованием TypeScript /
            React и адаптивной вёрстке.
          </em>
        </BlockQuote>

        <Block>
          <h2>Инструменты 🛠️</h2>
          <Tools>
            {[
              'Astro',
              'Tailwind',
              'Vite',
              'Docker',
              'Express',
              'Gatsby',
              'Git',
              'Github Actions',
              'Jest',
              'Lighthouse',
              'Next JS',
              'Nginx',
              'Netlify',
              'Node',
              'Puppeteer',
              'React',
              'TypeScript',
            ].map((tool) => (
              <Tool key={tool}>{tool}</Tool>
            ))}
          </Tools>
        </Block>

        <Block>
          <h2>Образование 🎓</h2>
          <ul>
            <li>
              <OutboundLink
                href="https://bntu.by/faculties/fitr"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                БНТУ ФИТР
              </OutboundLink>{' '}
              / 2004-2009 гг.
              <p>
                Разработка программного обеспечения. Информационные системы и
                технологии в обработке и представлении информации.
              </p>
            </li>
          </ul>
        </Block>

        <Block>
          <h2>Опыт работы 👷‍♂️</h2>
          <ul>
            <li>
              <a href="/projects/">Фриланс-проекты</a>, персональные проекты,
              open-source разработка / 2023г. - н.в.
            </li>
            <li>
              Интернет-стартапы{' '}
              <OutboundLink
                href="https://verifiable.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                verifiable.com
              </OutboundLink>
              ,{' '}
              <OutboundLink
                href="https://dock.io"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                dock.io
              </OutboundLink>
              ,{' '}
              <OutboundLink
                href="https://remote.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                remote.com
              </OutboundLink>{' '}
              — веб-разработка в рамках одной команды / 2015-2020 гг.
            </li>
            <li>
              <OutboundLink
                href="https://nauchsoft.by/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Научсофт
              </OutboundLink>{' '}
              — различные проекты (веб, native) / 2009–2015 гг.
            </li>
            <li>Госсектор — различные проекты (веб, native) / 2007–2009 гг.</li>
          </ul>
        </Block>

        <Block>
          <h2>Сертификации 📖</h2>
          <ul>
            <li>
              Microsoft Certified Solutions Associate: Web Applications / 2016
              г.{' '}
              <FileLink
                href="/upload/MCPDigitalCertPDF/Certificate_1.pdf"
                target="_blank"
              >
                pdf
              </FileLink>
            </li>
            <li>
              Microsoft Specialist: Programming in HTML5 with JavaScript and
              CSS3 / 2012 г.{' '}
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
        </Block>

        <Block>
          <h2>Профили 🌐</h2>
          <Profiles className="inverted">
            <Profile>
              <ProfileLink
                rel="nofollow"
                target="_blank"
                href="https://www.linkedin.com/in/ermakovich/"
              >
                LinkedIn
              </ProfileLink>
            </Profile>
            <Profile>
              <ProfileLink
                rel="nofollow"
                target="_blank"
                href="https://github.com/ermakovich"
              >
                GitHub
              </ProfileLink>
            </Profile>
            <Profile>
              <ProfileLink
                rel="nofollow"
                target="_blank"
                href="https://stackoverflow.com/users/434402/s-ermakovich"
              >
                StackOverflow
              </ProfileLink>
            </Profile>
          </Profiles>
        </Block>

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
