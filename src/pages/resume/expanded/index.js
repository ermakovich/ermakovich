import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import OutboundLink from 'components/outbound-link'
import Content from 'components/content'
import { SEO } from 'components/seo'

const ExperienceList = styled.div``

const ExperienceBlock = styled.div`
  p,
  li {
    font-weight: 400;
  }
`

const ExperienceTitle = styled.h2``

export const Head = () => <SEO titleAddendum="Резюме развернуто" />

export default function AboutPage() {
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
    <Content style={{ fontSize: '16px' }}>
      <section>
        <h1>{site.siteMetadata.title}</h1>

        <h2>Веб-разработчик (React)</h2>
        <p>🏠 Санкт-Петербург</p>
        <p>
          Специализируюсь на адаптивной кросс-браузерной вёрстке. Ищу работу на
          полную занятость, предпочтение отдаю работе в офисе.
        </p>

        {/* <p>
          Контакты: <br />
          <a href="tg:+79668553069">+79668553069</a>
          <br />
          <a href="mailto:s.ermakovich@gmail.com">s.ermakovich@gmail.com</a>
        </p> */}

        <div style={{ clear: 'both' }} />
      </section>

      <section>
        <h2>Образование</h2>
        <ul>
          <li>
            Белорусский национальный технический университет: Программное
            обеспечение вычислительной техники / ИТ в обработке и представлении
            информации (2004-2009 гг.)
          </li>
        </ul>
      </section>

      <section>
        <h2>Навыки</h2>
        <ul>
          <li>React (Next.js, Gatsby), Node, Nginx, Docker, Git, Puppeteer</li>
          <li>Английский язык - свободно владею</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Опыт работы</h2>
        <ExperienceList role="list">
          <ExperienceBlock>
            <ExperienceTitle>Апрель 2015 – Апрель 2020 (5 лет)</ExperienceTitle>
            <p>Компания: не указана, США, Сан-Франциско</p>
            <p>Позиция: lead front-end engineer (удалённо)</p>
            <p>Обязанности:</p>
            <ul>
              <li>
                Возглавлял команду веб-разработчиков (3-4 человека), проводил
                ревью кода и оказывал помощь с задачами
              </li>
              <li>
                Разработка пользовательских приложений и маркетинговых сайтов на
                React (Next.js / Gatsby)
              </li>
              <li>
                Вёрстка маркетинговых рассылок и шаблонов системных уведомлений
                в Customer.io
              </li>
              <li>Разработка микросервисов c использованием Express</li>
              <li>
                Обеспечение развертывание кода, конфигурирования
                Docker-контейнеров, Nginx-серверов
              </li>
            </ul>
            <p>Достижения:</p>
            <ul>
              <li>
                С небольшой командой запустили ряд успешных проектов:{' '}
                <OutboundLink
                  href="https://verifiable.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verifiable.com
                </OutboundLink>
                ,{' '}
                <OutboundLink
                  href="https://dock.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dock.io
                </OutboundLink>
                ,{' '}
                <OutboundLink
                  href="https://remote.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Remote.com
                </OutboundLink>
                .
              </li>
              <li>
                Внедрил и закрепил в команде CI/CD-процессы, автоматичесикие
                проверки кода (eslint/prettier), автоматизированные BDD-тесты
                (Сucumber + Puppeteer)
              </li>
              <li>
                Инициировал переход с NPM на Yarn+lockfile для решения проблем с
                консистентностью сборок
              </li>
              <li>
                Инициировал и реализовал концепцию плавной миграции legacy-кода
                с Angular 1.x на React с помощью библиотек
                react2angular/angular2react, что позволило избежать "big
                rewrite"
              </li>
              <li>
                Реализовал сервис рендеринга React-компонентов в
                HTML/PNG/PDF-формат для представления сертификатов в форматах
                blockcerts/openbadges в проекте Verifiable
              </li>
            </ul>
          </ExperienceBlock>

          <ExperienceBlock>
            <ExperienceTitle>
              Сентябрь 2009 – Апрель 2015 (5 лет 8 месяцев)
            </ExperienceTitle>
            <p>
              Компания: ScienceSoft,{' '}
              <OutboundLink
                href="https://www.scnsoft.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                scnsoft.com
              </OutboundLink>
              , Беларусь, Минск
            </p>
            <p>Позиции: JS-разработчик, .NET-разработчик</p>
          </ExperienceBlock>

          <ExperienceBlock>
            <ExperienceTitle>
              Февраль 2009 – Сентябрь 2009 (2 года 9 месяцев)
            </ExperienceTitle>
            <p>Компания: госсектор, Беларусь, Минск</p>
            <p>Позиция: .NET-разработчик</p>
          </ExperienceBlock>
        </ExperienceList>
      </section>

      <hr />

      <section>
        <h2>Сертификации</h2>
        <ul>
          <li>
            Microsoft Certified Solutions Associate: Web Applications (
            <a href="/upload/MCPDigitalCertPDF/Certificate_1.pdf">файл</a>)
          </li>
          <li>
            Microsoft Specialist: Programming in HTML5 with JavaScript and CSS3
            (<a href="/upload/MCPDigitalCertPDF/Certificate_3.pdf">файл</a>)
          </li>
          <li>
            Microsoft Certified Professional (
            <a href="/upload/MCPDigitalCertPDF/Certificate_2.pdf">файл</a>)
          </li>
        </ul>
      </section>
    </Content>
  )
}
