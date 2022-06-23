import styles from './Sidebar.css'

type Props = {
  className?: string
  children: React.ReactNode
}

const Sidebar = ({ className, children }: Props) => {
  return <aside className={`${styles.sidebar} ${className}`}>{children}</aside>
}

export default Sidebar
