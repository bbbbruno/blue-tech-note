import { style } from '@vanilla-extract/css'
import { colors, fontWeights, space, fontSizes } from '../styles/variables.css'

const styles = {
  section: style({
    color: colors.heading,
    marginBottom: space[5],
    fontSize: fontSizes[4],
    fontWeight: fontWeights.heading,
    paddingLeft: space[4],
    position: 'relative',
    '::before': {
      display: 'block',
      content: '',
      borderRadius: '9999px',
      backgroundColor: colors.omegaLight,
      height: '100%',
      width: '5px',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  }),
  side: style({
    color: colors.omegaDark,
    fontWeight: fontWeights.heading,
    fontSize: fontSizes[4],
    marginBottom: space[5],
    textAlign: 'center',
  }),
}

export default styles
