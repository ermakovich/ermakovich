import React, { useState, useEffect } from 'react'
import { isUndefined, isNull } from 'lodash'

export const ThemeContext = React.createContext({
  isDark: false,
})

export function ThemeProvider({ children }) {
  const storage = localStorage
  const [isDark, setIsDark] = useState()

  useEffect(() => {
    if (isUndefined(isDark)) {
      const storedValue = storage.getItem('isDark')
      if (isNull(storedValue)) {
        setIsDark(
          window.matchMedia('(prefers-color-scheme: dark)').matches === true
        )
      } else {
        setIsDark(JSON.parse(storedValue))
      }
    }
  })

  function handleSetIsDark(value) {
    storage.setItem('isDark', value)
    setIsDark(value)
  }

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark: handleSetIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
