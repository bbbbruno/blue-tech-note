import { style } from '@vanilla-extract/css'

import {
  colors,
  fontSizes,
  fontWeights,
  icon,
  sizes,
  space,
} from '../../../common/styles/variables.css'

const linkItem = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: space[2],
  backgroundColor: colors.omegaLighter,
  borderRadius: '9999px',
  border: '3px solid transparent',
  transition: 'all 250ms ease',
  ':hover': {
    backgroundColor: colors.alpha,
  },
})

const styles = {
  profileCard: style({
    padding: space[4],
    backgroundColor: colors.contentBg,
    borderRadius: space[3],
    marginBottom: space[5],
    textAlign: 'center',
    boxShadow: '1px 1px 5px 0 rgb(1 1 1 / 5%)',
  }),
  imageWrapper: style({
    display: 'block',
    marginBottom: space[2],
  }),
  image: style({
    borderRadius: '50%',
  }),
  name: style({
    display: 'block',
    color: colors.heading,
    fontWeight: fontWeights.bold,
    lineHeight: 1.33,
    fontSize: fontSizes[3],
    marginBottom: space[3],
  }),
  description: style({
    fontWeight: fontWeights.medium,
    lineHeight: 1.33,
    color: colors.omegaDark,
    marginBottom: space[3],
  }),
  linkList: style({
    width: sizes.full,
    display: 'flex',
    justifyContent: 'center',
    gap: space[2],
  }),
  linkItem,
  svg: style({
    fontSize: icon.xs,
    selectors: {
      [`${linkItem}:hover &`]: {
        color: `${colors.white} !important`,
      },
    },
  }),
}

export default styles
