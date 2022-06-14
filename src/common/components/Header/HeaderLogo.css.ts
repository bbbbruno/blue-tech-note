import { style } from '@vanilla-extract/css'
import { colors, fontSizes, fontWeights } from '../../styles/variables.css'

export const styles = {
  logo: style({
    color: colors.article,
    fontWeight: fontWeights.bold,
    fontSize: fontSizes[4],
  }),
}

export default styles
