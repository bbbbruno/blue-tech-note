import dayjs from 'dayjs'
import { FaRegClock } from 'react-icons/fa'
import styles from './PostDate.css'

type Props = {
  size?: 'small' | 'medium'
  date: string
}

export const PostDate = ({ size = 'medium', date }: Props) => {
  return (
    <span className={styles.date[size]}>
      <FaRegClock className={styles.icon} />
      {dayjs(date).format('YYYY/MM/DD')}
    </span>
  )
}
