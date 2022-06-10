import Link from 'next/link'

const HeaderMenu = () => {
  return (
    <nav className='menu'>
      <ul>
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
  )
}

export default HeaderMenu
