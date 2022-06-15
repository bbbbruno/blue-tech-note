import { useContext } from 'react'
import { DarkModeContext } from '../../../contexts/DarkMode'
import { FaSun, FaMoon } from 'react-icons/fa'
import styles from './HeaderSwitch.css'

const HeaderSwitch = () => {
  const { darkModeOn, toggleDarkMode } = useContext(DarkModeContext)

  const colorModeClass = darkModeOn ? 'dark' : 'light'

  return (
    <button
      onClick={e => toggleDarkMode()}
      className={styles.toggle[colorModeClass]}>
      <span className={styles.icon[colorModeClass]}>
        {darkModeOn ? (
          <FaMoon className={styles.svg} />
        ) : (
          <FaSun className={styles.svg} />
        )}
      </span>
    </button>
  )
}

export default HeaderSwitch
