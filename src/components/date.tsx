import React from 'react'

const Date = ({ value, locale = 'ru' }: { value: Date; locale?: string }) => (
  <time dateTime={value.toISOString()}>
    {value
      .toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
      .replace('г.', '')}
  </time>
)

export default Date
