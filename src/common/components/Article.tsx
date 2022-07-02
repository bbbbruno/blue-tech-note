import styles from './Article.css'
import 'highlight.js/styles/night-owl.css'

type Props = {
  children: React.ReactNode
}

const Article = ({ children }: Props) => {
  return <div className={styles.article}>{children}</div>
}

export default Article
