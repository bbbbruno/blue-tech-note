import Heading from '../../../common/components/Heading'
import { Category } from '../types'
import { CategoryButton } from './CategoryButton'
import styles from './CategoryList.css'

const categoryList: Category[] = [
  {
    id: 1,
    slug: 'enginner',
    name: 'エンジニア',
    iconName: 'FaCode',
    to: '/category/engineer',
  },
  {
    id: 2,
    slug: 'university',
    name: '大学',
    iconName: 'FaUniversity',
    to: '/category/university',
  },
  {
    id: 3,
    slug: 'life',
    name: 'ライフスタイル',
    iconName: 'FaHourglassStart',
    to: '/category/life',
  },
]

export const CategoryList = () => {
  return (
    <div className={styles.categoryList}>
      <Heading variant='side' className='categoryList'>
        カテゴリー
      </Heading>
      <ul>
        {categoryList.map(category => (
          <li key={category.id} className={styles.categoryItem}>
            <CategoryButton category={category} />
          </li>
        ))}
      </ul>
    </div>
  )
}
