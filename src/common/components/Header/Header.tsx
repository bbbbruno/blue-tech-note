import Container from '../Container'
import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu'
import HeaderSwitch from './HeaderSwitch'
import styles from './Header.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container variant='compact'>
        <div className={styles.wrapper}>
          <HeaderLogo />
          <div className={styles.menuWrapper}>
            <HeaderMenu />
            <HeaderSwitch />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
