import Head from 'next/head'
import Image from 'next/image'

import Container from '../../common/components/Container'
import Heading from '../../common/components/Heading'

import styles from './HomePage.css'

export const Home = () => {
  return (
    <div className={styles.home}>
      <Container>
        <div className={styles.wrapper}>
          <main className={styles.main}>
            <Heading variant='section'>最近の投稿</Heading>
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
