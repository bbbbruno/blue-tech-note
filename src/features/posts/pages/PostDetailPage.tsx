import Badge from '../../../common/components/Badge'
import Container from '../../../common/components/Container'
import Heading from '../../../common/components/Heading'
import Sidebar from '../../../common/components/Sidebar'
import { Post, PostDate } from '../'
import styles from './PostDetailPage.css'

import { Profile, ProfileCard } from '../../profile/'
import { Category, CategoryList } from '../../category'
import { Tag, TagList } from '../../tag'

const profile: Profile = {
  name: 'Bruno Sugahara',
  title: 'Web Developer',
  imagePath: '/profile.jpg',
  links: [
    {
      iconName: 'FaGithub',
      color: 'darkslategray',
      to: 'https://github.com/bbbbruno',
    },
    {
      iconName: 'FaTwitter',
      color: '#1da1f2',
      to: 'https://twitter.com/bbbbruno69',
    },
  ],
}

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

type Props = {
  post: Post
}

export const PostDetailPage = ({ post }: Props) => {
  return (
    <Container>
      <section className={styles.titleSection}>
        <Badge
          text={post.category.name}
          to={post.category.to}
          className={styles.category}
        />
        <Heading variant='title' className={styles.title}>
          初ブログ投稿！Markdown徹底解説！！
        </Heading>
        <PostDate date={post.publishedDate} />
      </section>
      <section className={styles.mainSection}>
        <article className={styles.article}>This is post detail page</article>
        <Sidebar>
          <ProfileCard profile={profile} />
          <Heading variant='side'>カテゴリー</Heading>
          <CategoryList categories={categories} />
          <Heading variant='side'>タグ</Heading>
          <TagList tags={tags} />
        </Sidebar>
      </section>
    </Container>
  )
}
