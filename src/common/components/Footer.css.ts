import { style } from '@vanilla-extract/css'
import { colors, space } from '../styles/variables.css'

const styles = {
  footer: style({
    backgroundColor: colors.footerBg,
  }),
  text: style({
    textAlign: 'center',
    padding: space[4],
  }),
}

export default styles
