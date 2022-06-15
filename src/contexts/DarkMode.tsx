import { createContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import useMedia from '../hooks/useMedia'
import useClient from '../hooks/useClient'
import { lightTheme, darkTheme } from '../common/styles/variables.css'

export const DarkModeContext = createContext({
  darkModeOn: false,
  toggleDarkMode: () => {},
})

type Props = {
  children: React.ReactNode
}

export const DarkModeProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('dark-mode-enabled')
  const prefersDarkMode = useMedia<boolean>(
    ['(prefers-color-scheme: dark)'],
    [true],
    false
  )
  const isClient = useClient()

  const darkModeOn = darkMode ?? prefersDarkMode
  const toggleDarkMode = () =>
    setDarkMode(prev => (prev === undefined ? !prefersDarkMode : !prev))

  useEffect(() => {
    document.body.className = darkModeOn ? darkTheme : lightTheme
  }, [darkModeOn])

  return (
    <>
      {isClient && (
        <DarkModeContext.Provider
          value={{
            darkModeOn,
            toggleDarkMode,
          }}>
          {children}
        </DarkModeContext.Provider>
      )}
    </>
  )
}
