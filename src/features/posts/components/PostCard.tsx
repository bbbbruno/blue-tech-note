import Image from 'next/image'
import Badge from '../../../common/components/Badge'
import { Post } from '../types'
import dayjs from 'dayjs'
import { FaRegClock } from 'react-icons/fa'

import styles from './PostCard.css'

type Props = {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  const postUrl = `/${post.slug}`

  return (
    <div className={styles.card}>
      <a className={styles.imageWrapper} href={postUrl}>
        <Image
          className={styles.image}
          src={post.imagePath}
          alt='dummy image'
          layout='fill'
          objectFit='cover'
        />
      </a>
      <div className={styles.contentWrapper}>
        <Badge
          to={`/category/${post.category.slug}`}
          text={post.category.name}
        />
        <a className={styles.title} href={postUrl}>
          {post.title}
        </a>
        <p className={styles.text}>{post.text}</p>
        <p className={styles.date}>
          <FaRegClock className={styles.icon} />
          {dayjs(post.publishedDate).format('YYYY/MM/DD')}
        </p>
      </div>
    </div>
  )
}
