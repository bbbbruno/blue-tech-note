import { style } from '@vanilla-extract/css'
import { colors, space, fontWeights, fontSizes } from '../styles/variables.css'

const styles = {
  badge: style({
    display: 'inline-block',
    padding: `${space[1]} ${space[3]}`,
    borderRadius: space[2],
    transition: 'all 250ms ease',
    backgroundColor: colors.omegaLight,
    color: colors.omegaDark,
    fontWeight: fontWeights.medium,
    fontSize: fontSizes[0],
    ':hover': {
      backgroundColor: colors.omegaDark,
      color: colors.omegaLight,
    },
  }),
}

export default styles
