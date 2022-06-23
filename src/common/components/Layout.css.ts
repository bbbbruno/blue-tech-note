import { style } from '@vanilla-extract/css'
import { space, colors } from '../styles/variables.css'

const styles = {
  main: style({
    padding: `${space[5]} 0 ${space[6]}`,
    backgroundColor: colors.background,
  }),
}

export default styles
