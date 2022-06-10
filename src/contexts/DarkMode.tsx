import { createContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { lightTheme, darkTheme } from '../common/styles/variables.css'

const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: (dark: boolean) => {},
})

type Props = {
  children: React.ReactNode
}

const DarkModeProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode-enabled', false)

  useEffect(() => {
    document.body.className = darkMode ? darkTheme : lightTheme
  }, [darkMode])

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export { DarkModeContext, DarkModeProvider }
