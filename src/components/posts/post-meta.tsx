import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { enUS as en, ru } from 'date-fns/locale'

import TextSystem from 'components/text-system'
import PostDate from 'components/posts/post-date'

const locales = {
  en,
  ru,
}

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
      <PostDate
        value={format(new Date(frontmatter.date), 'MMMM dd, yyyy', {
          locale: locales[lang],
        })}
      />
      &nbsp;&middot;&nbsp;
      {frontmatter.updated_date && (
        <>
          {updatedText[lang]}{' '}
          <PostDate
            value={format(new Date(frontmatter.updated_date), 'MMMM dd, yyyy', {
              locale: locales[lang],
            })}
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
