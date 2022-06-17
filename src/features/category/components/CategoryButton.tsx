import { createElement } from 'react'
import { Category } from '../types'
import styles from './CategoryButton.css'
import * as FontAwesome from 'react-icons/fa'
import { IconContext } from 'react-icons'

type Props = {
  category: Category
}

export const CategoryButton = ({ category }: Props) => {
  const { name, iconName, to } = category
  const icon = createElement(FontAwesome[iconName])

  return (
    <a className={styles.categoryButton} href={to}>
      <span className={styles.icon}>
        <IconContext.Provider value={{ className: styles.svg }}>
          {icon}
        </IconContext.Provider>
      </span>
      <p className={styles.text}>{name}</p>
    </a>
  )
}
