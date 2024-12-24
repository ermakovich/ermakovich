import React from 'react'
import styled from 'styled-components'

import TextSystem from 'components/text-system'
import LocalDate from 'components/date'

const updatedText = {
  ru: 'обновлено',
  en: 'edited',
}

const timeToReadText = {
  ru: 'мин чтения',
  en: 'min read',
}

const Root = styled(TextSystem)`
  font-size: smaller;
`

export default function PostMeta({ frontmatter, timeToRead, ...props }) {
  const { lang } = frontmatter

  return (
    <Root {...props}>
      <LocalDate
        itemProp="datePublished"
        content={frontmatter.date}
        value={new Date(frontmatter.date)}
        locale={lang}
      />
      &nbsp;&middot;&nbsp;
      {frontmatter.updated_date && (
        <>
          {updatedText[lang]}{' '}
          <LocalDate
            itemProp="dateModified"
            content={frontmatter.updated_date}
            value={new Date(frontmatter.updated_date)}
            locale={lang}
          />
          &nbsp;&middot;&nbsp;
        </>
      )}
      <span>
        {timeToRead} {timeToReadText[lang]}
      </span>
    </Root>
  )
}
