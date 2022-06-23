import Badge from '../../../common/components/Badge'
import { Tag } from '../types/'
import styles from './TagList.css'

type Props = {
  tags: Tag[]
}

export const TagList = ({ tags }: Props) => {
  return (
    <ul className={styles.tagList}>
      {tags.map(tag => (
        <li key={tag.id} className={styles.tagItem}>
          <Badge text={`#${tag.name}`} to={tag.to} />
        </li>
      ))}
    </ul>
  )
}
