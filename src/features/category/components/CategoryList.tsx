import Heading from '../../../common/components/Heading'
import { Category } from '../types'
import { CategoryButton } from './CategoryButton'
import styles from './CategoryList.css'

type Props = {
  categories: Category[]
}

export const CategoryList = ({ categories }: Props) => {
  return (
    <div className={styles.categoryListWrapper}>
      <Heading variant='side'>カテゴリー</Heading>
      <ul>
        {categories.map(category => (
          <li key={category.id} className={styles.categoryItem}>
            <CategoryButton category={category} />
          </li>
        ))}
      </ul>
    </div>
  )
}
