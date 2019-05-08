import React, { useState, useEffect } from 'react'
import { isUndefined } from 'lodash'

const ThemeContext = React.createContext({
  isDark: false,
})

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState()

  useEffect(() => {
    if (isUndefined(isDark)) {
      setIsDark(
        window.matchMedia('(prefers-color-scheme: dark)').matches === true
      )
    }
  })

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext.Consumer
