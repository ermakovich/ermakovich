import React from 'react'
import get from 'lodash/get'

import Meta from '../post-meta'
import PreviewImage from './post-preview-image'

export default function PostPreview({ node, ...props }) {
  const { frontmatter, timeToRead } = node
  const { lang } = frontmatter
  const title = get(node, 'frontmatter.title') || node.fields.slug
  return (
    <div {...props} lang={lang}>
      <PreviewImage {...{ node }} />
      <h3>
        {lang === 'en' && 'In English / '}
        <a href={node.fields.slug}>{title}</a>
      </h3>
      <Meta {...{ frontmatter, timeToRead }} />
      {node.excerpt ? (
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      ) : null}
    </div>
  )
}
