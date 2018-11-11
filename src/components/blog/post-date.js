import React from 'react'
import PropTypes from 'prop-types'

const BlogPostDate = ({ value }) => <time>{value}</time>

BlogPostDate.propTypes = {
  value: PropTypes.node.isRequired,
}

export default BlogPostDate
