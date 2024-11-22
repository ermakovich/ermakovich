import React from 'react'
import styled from 'styled-components'

import LocalDate from 'components/date'
import OutboundLink from 'components/outbound-link'
import UnstyledList from 'components/unstyled-list'
import mq from 'components/media-queries'

const Root = styled.div`
  margin-bottom: 4rem;

  @media (${mq.sm}) {
    font-size: smaller;
  }
`

const List = styled(UnstyledList)`
  margin: 0;
`

const Label = styled.p`
  margin-bottom: 0.25rem;
  color: var(--color-system);
`

const Item = styled.li`
  color: var(--color-primary);
  background: rgba(var(--color-primary-rgb), 0.1);
  border-radius: 0.25em;
  display: inline-block;
  margin: 0.25em;
  padding: 0.25em 0.75em;
  white-space: nowrap;
`

const periodFormat = {
  month: 'long',
  year: 'numeric',
}

function renderList(items) {
  return (
    <List>
      {items.map((item) => (
        <Item key={item}>{item}</Item>
      ))}
    </List>
  )
}

export default function PostMeta({ frontmatter, ...props }) {
  const { lang } = frontmatter

  return (
    <Root as={UnstyledList} {...props}>
      <li>
        <Label>Проект</Label>
        {frontmatter.title}
      </li>
      <li>
        <Label>Период</Label>
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
      </li>
      <li>
        <Label>Клиент</Label>
        {frontmatter.customer} /{' '}
        <address style={{ display: 'inline', fontStyle: 'normal' }}>
          {frontmatter.customer_address}
        </address>
        <br />
        {frontmatter.not_published_yet ? null : (
          <List>
            {frontmatter.live_site.map((site) => (
              <Item key={site}>
                <OutboundLink
                  href={'https://' + site}
                  rel="nofollow noreferrer"
                >
                  {site}
                </OutboundLink>
              </Item>
            ))}
          </List>
        )}
      </li>
      <li>
        <Label>Тип сайта</Label>
        {renderList(frontmatter.site_type)}
      </li>
      <li>
        <Label>Индустрия</Label>
        {renderList(frontmatter.industry)}
      </li>
      <li>
        <Label>Услуги</Label>
        {renderList(frontmatter.services)}
      </li>
      <li>
        <Label>Технологии</Label>
        {renderList(frontmatter.tools)}
      </li>
      <li>
        <Label>Объем работ</Label>
        {frontmatter.pull_requests} пулл-реквест
      </li>
    </Root>
  )
}
