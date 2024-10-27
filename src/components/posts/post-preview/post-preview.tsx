import React from 'react'

import Meta from '../post-meta'
import PreviewImage from './post-preview-image'

export default function PostPreview({ node, ...props }) {
  const { frontmatter, timeToRead } = node
  const { lang } = frontmatter
  const title = frontmatter.title || node.fields.slug
  return (
    <div {...props} lang={lang}>
      <PreviewImage {...{ node }} />
      <p>
        <strong>
          {lang === 'en' && 'In English / '}
          <a href={node.fields.slug}>{title}</a>
        </strong>
      </p>
      <Meta {...{ frontmatter, timeToRead }} />
      {node.excerpt ? (
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      ) : null}
    </div>
  )
}
