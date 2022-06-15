import Head from 'next/head'
import Image from 'next/image'

import Container from '../../../common/components/Container'
import Heading from '../../../common/components/Heading'
import { PostCard } from '../../posts'

import styles from './HomePage.css'

const posts = [
  {
    id: 1,
    slug: 'first',
    title: '初投稿です',
    text: 'これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。',
    imagePath: '/dummy.png',
    category: { slug: 'engineer', name: 'エンジニア' },
    tags: [{ slug: 'blog', name: 'ブログ' }],
    publishedDate: '2022-06-15',
    timeToRead: 3,
  },
  {
    id: 2,
    slug: 'first',
    title: '初投稿です',
    text: 'これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。',
    imagePath: '/dummy.png',
    category: { slug: 'engineer', name: 'エンジニア' },
    tags: [{ slug: 'blog', name: 'ブログ' }],
    publishedDate: '2022-06-15',
    timeToRead: 3,
  },
  {
    id: 3,
    slug: 'first',
    title: '初投稿です',
    text: 'これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。',
    imagePath: '/dummy.png',
    category: { slug: 'engineer', name: 'エンジニア' },
    tags: [{ slug: 'blog', name: 'ブログ' }],
    publishedDate: '2022-06-15',
    timeToRead: 3,
  },
  {
    id: 4,
    slug: 'first',
    title: '初投稿です',
    text: 'これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。',
    imagePath: '/dummy.png',
    category: { slug: 'engineer', name: 'エンジニア' },
    tags: [{ slug: 'blog', name: 'ブログ' }],
    publishedDate: '2022-06-15',
    timeToRead: 3,
  },
  {
    id: 5,
    slug: 'first',
    title: '初投稿です',
    text: 'これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。これは初登校の文章なり〜。',
    imagePath: '/dummy.png',
    category: { slug: 'engineer', name: 'エンジニア' },
    tags: [{ slug: 'blog', name: 'ブログ' }],
    publishedDate: '2022-06-15',
    timeToRead: 3,
  },
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
            <Heading variant='side'>カテゴリー</Heading>
            <Heading variant='side'>タグ</Heading>
          </aside>
        </div>
      </Container>
    </div>
  )
}
