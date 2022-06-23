import { Category } from '../types'
import { CategoryButton } from './CategoryButton'
import styles from './CategoryList.css'

type Props = {
  categories: Category[]
}

export const CategoryList = ({ categories }: Props) => {
  return (
    <ul className={styles.categoryListWrapper}>
      {categories.map(category => (
        <li key={category.id} className={styles.categoryItem}>
          <CategoryButton category={category} />
        </li>
      ))}
    </ul>
  )
}
