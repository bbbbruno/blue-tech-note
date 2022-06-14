import Link from 'next/link'
import { styles } from './HeaderMenu.css'

const HeaderMenu = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href='/about'>
            <a>About Me</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderMenu
