import React from 'react'
import styled from 'styled-components'

import TextSystem from 'components/text-system'
import PostDate from 'components/posts/post-date'

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
      <PostDate value={new Date(frontmatter.date)} locale={lang} />
      &nbsp;&middot;&nbsp;
      {frontmatter.updated_date && (
        <>
          {updatedText[lang]}{' '}
          <PostDate value={new Date(frontmatter.updated_date)} locale={lang} />
          &nbsp;&middot;&nbsp;
        </>
      )}
      <span>
        {timeToRead} {timeToReadText[lang]}
      </span>
    </Root>
  )
}
