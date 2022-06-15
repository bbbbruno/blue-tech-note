import { style } from '@vanilla-extract/css'
import { space, sizes, colors } from '../../../common/styles/variables.css'

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
  posts: style({
    display: 'flex',
    flexDirection: 'column',
    gap: `${space[3]} 0`,
  }),
}

export default homeStyle
