import styles from './Container.css'

type Props = {
  variant?: 'compact' | 'wide' | 'full'
  children: React.ReactNode
}

const Container = ({ variant = 'compact', children }: Props) => {
  return <div className={`${styles[variant]}`}>{children}</div>
}

export default Container
