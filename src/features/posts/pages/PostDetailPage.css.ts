import { style } from '@vanilla-extract/css'
import {
  colors,
  fontWeights,
  space,
} from '../../../common/styles/variables.css'

const styles = {
  titleSection: style({
    marginBottom: space[5],
  }),
  category: style({
    marginBottom: space[3],
  }),
  title: style({
    marginBottom: space[3],
  }),
  date: style({
    padding: `${space[2]} ${space[3]}`,
    borderLeft: `5px solid ${colors.omegaDark}`,
    fontWeight: fontWeights.medium,
  }),
  mainSection: style({
    display: 'flex',
  }),
  article: style({
    padding: space[4],
    width: '100%',
    backgroundColor: colors.contentBg,
    borderRadius: space[3],
    color: colors.text,
  }),
}

export default styles
