import { style } from '@vanilla-extract/css'
import { space, sizes, colors } from '../../../common/styles/variables.css'

const homeStyle = {
  posts: style({
    display: 'flex',
    flexDirection: 'column',
    gap: `${space[3]} 0`,
  }),
}

export default homeStyle
