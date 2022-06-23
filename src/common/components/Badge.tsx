import styles from './Badge.css'

type Props = {
  to?: string
  text: string
  className?: string
}

const Badge = ({ to, text, className }: Props) => {
  return (
    <a className={`${styles.badge} ${className}`} href={to}>
      {text}
    </a>
  )
}

export default Badge
