import React from 'react'

const Date = ({
  value,
  format = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  },
  locale = 'ru',
}: {
  value: Date
  format?: {}
  locale?: string
}) => (
  <time dateTime={value.toISOString()}>
    {value.toLocaleDateString(locale, format).replace(' г.', '')}
  </time>
)

export default Date
