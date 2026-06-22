import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

function applyTheme(dark) {
  const root = document.documentElement
  if (dark) {
    root.classList.add('dark')
    root.style.colorScheme = 'dark'
  } else {
    root.classList.remove('dark')
    root.style.colorScheme = 'light'
  }
}

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    applyTheme(darkMode)
  }, [darkMode])

  useEffect(() => {
    applyTheme(true)
  }, [])

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
