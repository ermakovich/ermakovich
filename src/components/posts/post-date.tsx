import React from 'react'

import LocalDate from '../date'

const BlogPostDate = ({ value, locale }: { value: Date; locale: string }) => (
  <LocalDate {...{ value, locale }} />
)

export default BlogPostDate
