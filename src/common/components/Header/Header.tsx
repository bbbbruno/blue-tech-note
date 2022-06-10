import Link from 'next/link'
import { useContext } from 'react'
import { DarkModeContext } from '../../../contexts/DarkMode'

import Toggle from '../../components/Toggle'

import styles from './Header.css'

const Header = () => {
  const { darkMode } = useContext(DarkModeContext)

  return (
    <header className={`${styles.header}`}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.logo}>
            <Link href='/'>
              <a>Blue Tech Note</a>
            </Link>
          </h1>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <Link href='/'>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  <a>About Me</a>
                </Link>
              </li>
            </ul>
          </nav>
          <Toggle />
        </div>
      </div>
    </header>
  )
}

export default Header
