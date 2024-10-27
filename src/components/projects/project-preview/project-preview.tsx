import React from 'react'

import PreviewImage from './project-preview-image'
import LocalDate from 'components/date'
import TextSystem from 'components/text-system'
import styled from 'styled-components'

const periodFormat = {
  month: 'long',
  year: 'numeric',
}

const Title = styled.p`
  font-size: 1.25rem;
`

export default function PostPreview({ node, ...props }) {
  const { frontmatter } = node
  const { lang } = frontmatter
  const title = frontmatter.title || node.fields.slug
  return (
    <div {...props} lang={lang}>
      <PreviewImage {...{ node }} />
      <Title>
        <strong>
          {lang === 'en' && 'In English / '}
          <a href={node.fields.slug}>{title}</a>
        </strong>
      </Title>

      <TextSystem title="Период">
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
      </TextSystem>
      {node.excerpt ? (
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      ) : null}
    </div>
  )
}
