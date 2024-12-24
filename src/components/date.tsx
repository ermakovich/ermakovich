import React, { HTMLAttributes } from 'react'

const Date: React.FC<
  {
    value: Date
    format?: {}
    locale?: string
  } & HTMLAttributes<HTMLTimeElement>
> = ({
  value,
  format = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  },
  locale = 'ru',
  ...props
}) => (
  <time {...props} dateTime={value.toISOString()}>
    {value.toLocaleDateString(locale, format).replace('г.', '').trim()}
  </time>
)

export default Date
