import { createContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useClient from '../hooks/useClient'
import { lightTheme, darkTheme } from '../common/styles/variables.css'

export const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: (dark: boolean) => {},
})

type Props = {
  children: React.ReactNode
}

export const DarkModeProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode-enabled', false)
  const isClient = useClient()

  useEffect(() => {
    document.body.className = darkMode ? darkTheme : lightTheme
  }, [darkMode])

  return (
    <>
      {isClient && (
        <DarkModeContext.Provider
          value={{
            darkMode,
            setDarkMode,
          }}>
          {children}
        </DarkModeContext.Provider>
      )}
    </>
  )
}
