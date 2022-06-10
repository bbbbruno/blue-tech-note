import { style } from '@vanilla-extract/css'

const homeStyle = {
  container: style({
    padding: '0 2rem',
  }),
  main: style({
    minHeight: '100vh',
    padding: '4rem 0',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: style({
    margin: 0,
    lineHeight: 1.15,
    fontSize: '4rem',
    textAlign: 'center',
  }),
  description: style({
    margin: '4rem 0',
    lineHeight: 1.5,
    fontSize: '1.5rem',
    textAlign: 'center',
  }),
  link: style({
    color: '#0070f3',
    textDecoration: 'none',
    ':hover': { textDecoration: 'none' },
    ':focus': { textDecoration: 'none' },
    ':active': { textDecoration: 'none' },
  }),
  code: style({
    background: '#fafafa',
    borderRadius: '5px',
    padding: '0.75rem',
    fontSize: '1.1rem',
    fontFamily:
      'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace',
  }),
  grid: style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '800px',
    margin: '0 auto',
    '@media': {
      'screen and (max-width: 600px)': {
        width: '100%',
        flexDirection: 'column',
      },
    },
  }),
  card: style({
    margin: '1rem',
    padding: '1.5rem',
    textAlign: 'left',
    color: 'inherit',
    textDecoration: 'none',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    transition: 'color 0.15s ease, border-color 0.15s ease',
    maxWidth: '300px',
    ':hover': { color: '#0070f3' },
    ':focus': { color: '#0070f3' },
    ':active': { color: '#0070f3' },
  }),
}

export default homeStyle
