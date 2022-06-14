import { style } from '@vanilla-extract/css'
import { space, colors, fontWeights } from '../../styles/variables.css'

export const styles = {
  list: style({
    display: 'flex',
  }),
  item: style({
    padding: space[1],
    margin: space[2],
    color: colors.omegaDark,
    fontWeight: fontWeights.bold,
    ':hover': {
      color: colors.alpha,
    },
  }),
}
