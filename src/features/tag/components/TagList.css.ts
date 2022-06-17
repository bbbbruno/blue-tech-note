import { style } from '@vanilla-extract/css'
import { colors, space } from '../../../common/styles/variables.css'

const styles = {
  tagList: style({
    display: 'flex',
    flexWrap: 'wrap',
    gap: space[1],
    padding: space[4],
    backgroundColor: colors.contentBg,
    borderRadius: space[3],
  }),
  tagItem: style({}),
}

export default styles
