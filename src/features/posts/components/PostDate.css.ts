import { style, styleVariants } from '@vanilla-extract/css'
import { colors, fontSizes, space } from '../../../common/styles/variables.css'

const styles = {
  date: styleVariants(
    {
      small: { fontSize: fontSizes[1] },
      medium: { fontSize: fontSizes[2] },
    },
    size => [
      {
        color: colors.omega,
        display: 'flex',
        alignItems: 'center',
      },
      size,
    ]
  ),
  icon: style({
    marginRight: space[1],
  }),
}

export default styles
