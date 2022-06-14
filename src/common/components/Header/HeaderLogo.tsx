import Link from 'next/link'
import styles from './HeaderLogo.css'

const HeaderLogo = () => {
  return (
    <h1 className={styles.logo}>
      <Link href='/'>
        <a>Blue Tech Note</a>
      </Link>
    </h1>
  )
}

export default HeaderLogo
