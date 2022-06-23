import styles from './Container.css'

type Props = {
  flex?: boolean
  variant?: 'compact' | 'wide' | 'full'
  className?: string
  children: React.ReactNode
}

const Container = ({
  flex = false,
  variant = 'compact',
  className,
  children,
}: Props) => {
  return (
    <div
      className={`${styles.container[variant]} ${
        flex && styles.flex
      } ${className}`}>
      {children}
    </div>
  )
}

export default Container
