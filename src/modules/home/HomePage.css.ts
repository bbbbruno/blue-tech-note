import { style } from '@vanilla-extract/css'
import { space, sizes, colors } from '../../common/styles/variables.css'

const homeStyle = {
  home: style({
    backgroundColor: colors.background,
  }),
  wrapper: style({
    padding: `${space[5]} 0`,
    display: 'flex',
  }),
  main: style({
    width: sizes.full,
  }),
  sidebar: style({
    width: sizes['1/3'],
    paddingLeft: space[5],
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
