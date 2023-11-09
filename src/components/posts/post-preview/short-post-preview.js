import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'

import Meta from '../post-meta'
import Date from '../post-date'
import PreviewImage from './post-preview-image'

export default function ShortPostPreview({ node }) {
  const title = get(node, 'frontmatter.title') || node.fields.slug
  return (
    <>
      <PreviewImage {...{ node }} />
      <h3>
        <Link to={node.fields.slug}>{title}</Link>
      </h3>
      <Meta>
        <Date value={node.frontmatter.date} />
        &nbsp;&middot;&nbsp;
        <span>{node.timeToRead} мин чтения</span>
      </Meta>
    </>
  )
}
