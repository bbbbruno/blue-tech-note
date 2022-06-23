import Image from 'next/image'
import Badge from '../../../common/components/Badge'
import { Post } from '../types'
import styles from './PostCard.css'
import { PostDate } from './PostDate'

type Props = {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  const postUrl = `/${post.slug}`

  return (
    <article className={styles.card}>
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
        <PostDate size='small' date={post.publishedDate}></PostDate>
      </div>
    </article>
  )
}
