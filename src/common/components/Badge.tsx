import styles from './Badge.css'

type Props = {
  to?: string
  text: string
}

const Badge = ({ to, text }: Props) => {
  return (
    <a className={styles.badge} href={to}>
      {text}
    </a>
  )
}

export default Badge
