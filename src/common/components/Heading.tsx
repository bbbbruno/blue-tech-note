import styles from './Heading.css'

const headings: {
  [key: string]: {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
    class: string
  }
} = {
  section: {
    tag: 'h2',
    class: styles.section,
  },
  side: {
    tag: 'h2',
    class: styles.side,
  },
}

type Props = {
  variant: 'section' | 'side'
  children: React.ReactNode
}

const Heading = ({ variant, children }: Props) => {
  const heading = headings[variant]

  return <heading.tag className={heading.class}>{children}</heading.tag>
}

export default Heading
