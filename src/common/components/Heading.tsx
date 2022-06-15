import styles from './Heading.css'

type Props = {
  variant: 'section' | 'side'
  children: React.ReactNode
}

const Heading = ({ variant, children }: Props) => {
  const headings = {
    section: <h2 className={styles.section}>{children}</h2>,
    side: <h2 className={styles.side}>{children}</h2>,
  }

  return headings[variant]
}

export default Heading
