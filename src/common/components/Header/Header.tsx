import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu'
import HeaderSwitch from './HeaderSwitch'
import styles from './Header.css'

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <HeaderLogo />
          <div className={styles.menuWrapper}>
            <HeaderMenu />
            <HeaderSwitch />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
