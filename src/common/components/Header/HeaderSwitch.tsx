import { useContext } from 'react'
import { DarkModeContext } from '../../../contexts/DarkMode'
import { FaSun, FaMoon } from 'react-icons/fa'
import styles from './HeaderSwitch.css'

const HeaderSwitch = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext)

  const colorModeClass = darkMode ? 'dark' : 'light'

  return (
    <button
      onClick={e => setDarkMode(!darkMode)}
      className={styles.toggle[colorModeClass]}>
      <span className={styles.icon[colorModeClass]}>
        {darkMode ? (
          <FaMoon className={styles.svg} />
        ) : (
          <FaSun className={styles.svg} />
        )}
      </span>
    </button>
  )
}

export default HeaderSwitch
