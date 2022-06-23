import { style } from '@vanilla-extract/css'
import { sizes, space } from '../styles/variables.css'

const styles = {
  sidebar: style({
    flex: `0 0 ${sizes['1/4']}`,
    marginLeft: space[5],
  }),
}

export default styles
