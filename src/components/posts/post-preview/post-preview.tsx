import React from 'react'
import get from 'lodash/get'

import Meta from '../post-meta'
import Date from '../post-date'
import PreviewImage from './post-preview-image'

export default function PostPreview({ node, ...props }) {
  const title = get(node, 'frontmatter.title') || node.fields.slug
  return (
    <div {...props}>
      <PreviewImage {...{ node }} />
      <h3>
        <a href={node.fields.slug}>{title}</a>
      </h3>
      <Meta>
        <Date value={node.frontmatter.date} />
        &nbsp;&middot;&nbsp;
        <span>{node.timeToRead} мин чтения</span>
      </Meta>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  )
}
