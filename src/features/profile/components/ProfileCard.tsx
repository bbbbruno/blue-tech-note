import { createElement } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Profile } from '../types'
import { IconContext } from 'react-icons'
import * as FontAwesome from 'react-icons/fa'

import styles from './ProfileCard.css'

type Props = {
  profile: Profile
}

export const ProfileCard = ({ profile }: Props) => {
  return (
    <div className={styles.profileCard}>
      <Link href='/about'>
        <a className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src={profile.imagePath}
            alt='profile image'
            width={130}
            height={130}
          />
        </a>
      </Link>
      <Link href='/about'>
        <a className={styles.name}>{profile.name}</a>
      </Link>
      <p className={styles.title}>{profile.title}</p>
      <ul className={styles.linkList}>
        {profile.links.map((link, i) => (
          <li key={i}>
            <a href={link.to} className={styles.linkItem}>
              <IconContext.Provider
                value={{ color: link.color, className: styles.svg }}>
                {createElement(FontAwesome[link.iconName])}
              </IconContext.Provider>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
