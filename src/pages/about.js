import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Content from 'components/content'
import { SEO } from 'components/seo'
import Button from 'components/button'

export const Head = () => (
  <SEO
    titleAddendum="Обо мне"
    description="Веб-разработчик React c богатым опытом и экспертизой в Санкт-Петергбурге"
  />
)

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
    <Content>
      <h1>Обо мне</h1>
      <p>
        <i>
          Меня зовут {site.siteMetadata.title}. Я занимаюсь веб-разработкой.
          Сейчас я нахожусь в поиске постоянной работы в Санкт-Петербурге.
        </i>
      </p>
      <p style={{ textAlign: 'center' }}>
        <Button as={Link} to="/resume">
          Посмотреть резюме 🧐
        </Button>
      </p>
      <p>
        <i>
          Заметки на профессиональную тематику и просто наблюдения из жизни я
          публикую в <Link to="/posts">записях</Link>.
        </i>
      </p>
    </Content>
  )
}
