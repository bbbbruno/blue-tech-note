import Head from 'next/head'
import Image from 'next/image'

import Container from '../../../common/components/Container'
import Heading from '../../../common/components/Heading'
import { PostCard } from '../../posts'
import { Category } from '../../category/types'
import { CategoryList } from '../../category/components/CategoryList'
import { Tag } from '../../tag/types'
import { TagList } from '../../tag/components/TagList'

import styles from './HomePage.css'

const category: Category = {
  id: 1,
  slug: 'engineer',
  name: 'エンジニア',
  iconName: 'FaCode',
  to: '/category/engineer',
}

const posts = new Array(5).fill(null).map((_, i) => ({
  id: i,
  slug: 'first',
  title: '初投稿です',
  text: 'これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。',
  imagePath: '/dummy.png',
  category,
  tags: [{ id: 1, slug: 'blog', name: 'ブログ', to: '/tag/blog' }],
  publishedDate: '2022-06-15',
  timeToRead: 3,
}))

const categories: Category[] = [
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

const tags: Tag[] = [
  { id: 1, slug: 'react', name: 'React', to: '/tag/react' },
  { id: 2, slug: 'aws', name: 'AWS', to: '/tag/aws' },
  { id: 3, slug: 'rails', name: 'Rails', to: '/tag/rails' },
  { id: 4, slug: 'go', name: 'Go', to: '/tag/go' },
  {
    id: 5,
    slug: 'programming',
    name: 'プログラミング',
    to: '/tag/programming',
  },
  { id: 6, slug: 'beginner', name: '初心者', to: '/tag/beginner' },
]

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <Container>
        <div className={styles.wrapper}>
          <main className={styles.main}>
            <Heading variant='section'>最近の投稿</Heading>
            <div className={styles.posts}>
              {posts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </main>
          <aside className={styles.sidebar}>
            <CategoryList categories={categories} />
            <TagList tags={tags} />
          </aside>
        </div>
      </Container>
    </div>
  )
}
