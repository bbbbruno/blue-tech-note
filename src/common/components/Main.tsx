import styles from './Main.css'

type Props = {
  className?: string
  children?: React.ReactNode
}

const Main = ({ className, children }: Props) => {
  return <main className={`${styles.main} ${className}`}>{children}</main>
}

export default Main
