import { style } from '@vanilla-extract/css'
import { sizes, space } from '../styles/variables.css'

const styles = {
  sidebar: style({
    flexBasis: sizes['1/3'],
    paddingLeft: space[5],
  }),
}

export default styles
