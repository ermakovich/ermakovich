import React from 'react'
import styled from 'styled-components'

import LocalDate from 'components/date'
import OutboundLink from 'components/outbound-link'

const updatedText = {
  ru: 'обновлено',
  en: 'edited',
}

const Root = styled.div`
  font-size: smaller;
  margin-bottom: 4rem;

  label {
    display: block;
    margin-bottom: 0.25rem;
    color: var(--color-system);
  }
`

const Item = styled.span`
  color: var(--color-primary);
  background: rgba(var(--color-primary-rgb), 0.1);
  border-radius: 0.25em;
  display: inline-block;
  margin: 0.25em;
  padding: 0.25em 0.75em;
  white-space: nowrap;
`

const Comma = styled.span`
  display: none;
`

const periodFormat = {
  month: 'long',
  year: 'numeric',
}

export default function PostMeta({ frontmatter, ...props }) {
  const { lang } = frontmatter

  return (
    <Root as="div" {...props}>
      <p title="Период">
        <label>Период</label>
        <LocalDate
          value={new Date(frontmatter.start_date)}
          format={periodFormat}
          locale={lang}
        />{' '}
        —{' '}
        <LocalDate
          value={new Date(frontmatter.end_date)}
          format={periodFormat}
          locale={lang}
        />
        {frontmatter.is_part_time && ' (частичная загрузка)'}
      </p>
      {frontmatter.updated_date && (
        <p>
          &nbsp;&middot;&nbsp;
          {updatedText[lang]}{' '}
          <LocalDate value={new Date(frontmatter.updated_date)} locale={lang} />
        </p>
      )}
      <p>
        <label>Клиент</label>
        {frontmatter.customer} /{' '}
        <address style={{ display: 'inline', fontStyle: 'normal' }}>
          {frontmatter.customer_address}
        </address>
        <br />
        {frontmatter.live_site
          .map((site) => (
            <OutboundLink href={'https://' + site} rel="nofollow noreferrer">
              {site}
            </OutboundLink>
          ))
          .reduce((prev, curr) => [prev, <br />, curr])}
      </p>
      <p>
        <label>Тип сайта</label>
        {frontmatter.site_type
          .map((item) => <Item>{item}</Item>)
          .reduce((prev, curr) => [prev, <Comma>, </Comma>, curr])}
      </p>
      <p>
        <label>Индустрия</label>
        {frontmatter.industry
          .map((item) => <Item>{item}</Item>)
          .reduce((prev, curr) => [prev, <Comma>, </Comma>, curr])}
      </p>
      <p>
        <label>Услуги</label>
        {frontmatter.services
          .map((item) => <Item>{item}</Item>)
          .reduce((prev, curr) => [prev, <Comma>, </Comma>, curr])}
      </p>
      <p>
        <label>Технологии</label>
        {frontmatter.tools
          .map((item) => <Item>{item}</Item>)
          .reduce((prev, curr) => [prev, <Comma>, </Comma>, curr])}
      </p>
      <p>
        <label>Объем работ</label>
        {frontmatter.pull_requests} пулл-реквест
      </p>
    </Root>
  )
}
