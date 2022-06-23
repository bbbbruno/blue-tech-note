import { style } from '@vanilla-extract/css'
import { space, sizes, colors } from '../../../common/styles/variables.css'

const homeStyle = {
  home: style({
    padding: `${space[5]} 0 ${space[6]}`,
    backgroundColor: colors.background,
  }),
  posts: style({
    display: 'flex',
    flexDirection: 'column',
    gap: `${space[3]} 0`,
  }),
}

export default homeStyle
