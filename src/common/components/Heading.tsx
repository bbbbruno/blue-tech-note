import styles from './Heading.css'

type variant = 'title' | 'section' | 'side'
const headings: {
  [key in variant]: {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
    class: string
  }
} = {
  title: {
    tag: 'h1',
    class: styles.title,
  },
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
  variant: variant
  className?: string
  children: React.ReactNode
}

const Heading = ({ variant, className, children }: Props) => {
  const heading = headings[variant]

  return (
    <heading.tag className={`${heading.class} ${className}`}>
      {children}
    </heading.tag>
  )
}

export default Heading
