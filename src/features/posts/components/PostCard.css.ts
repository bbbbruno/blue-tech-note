import { style } from '@vanilla-extract/css'
import {
  colors,
  sizes,
  space,
  fontSizes,
  fontWeights,
} from '../../../common/styles/variables.css'

const styles = {
  card: style({
    backgroundColor: colors.contentBg,
    borderRadius: space[3],
    display: 'flex',
    boxShadow: '1px 1px 5px 0 rgb(1 1 1 / 5%)',
    transition: 'transform 250ms ease, box-shadow 250ms ease, color 250ms ease',
    ':hover': {
      transform: 'translateY(-0.25rem)',
      boxShadow:
        '0px 2px 4px rgb(46 41 51 / 8%), 0px 5px 10px rgb(71 63 79 / 16%)',
    },
  }),
  imageWrapper: style({
    display: 'block',
    position: 'relative',
    flexBasis: sizes['2/5'],
    margin: space[2],
  }),
  image: style({
    borderRadius: space[2],
  }),
  contentWrapper: style({
    padding: space[4],
    flex: 1,
  }),
  title: style({
    display: 'block',
    fontSize: fontSizes[3],
    margin: `${space[3]} 0`,
    fontWeight: fontWeights.bold,
    color: colors.heading,
  }),
  text: style({
    fontSize: fontSizes[1],
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    marginBottom: space[3],
  }),
  date: style({
    display: 'flex',
    alignItems: 'center',
  }),
  icon: style({
    marginRight: space[1],
  }),
}

export default styles
