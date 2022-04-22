import { useState } from 'react'
import { lightTheme, darkTheme } from '../styles/variables.css'
import styles from './Header.css'

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const changeTheme: React.MouseEventHandler<HTMLButtonElement> = e => {
    setIsDarkTheme(prevState => !prevState)
  }

  return (
    <header
      className={`${styles.header} ${isDarkTheme ? darkTheme : lightTheme}`}>
      <p className={styles.text}>
        {isDarkTheme ? "It's DarkTheme!!" : 'Not Dark Theme...'}
      </p>
      <button onClick={changeTheme}>Change Theme!!</button>
    </header>
  )
}

export default Header
