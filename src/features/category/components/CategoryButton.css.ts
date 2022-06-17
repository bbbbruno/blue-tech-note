import { style } from '@vanilla-extract/css'
import {
  colors,
  fontWeights,
  icon,
  space,
} from '../../../common/styles/variables.css'

const categoryButton = style({
  display: 'flex',
  boxShadow: '1px 1px 5px 0 rgb(1 1 1 / 5%)',
  color: colors.white,
  backgroundColor: colors.contentBg,
  borderRadius: space[3],
  overflow: 'hidden',
})

const styles = {
  categoryButton,
  icon: style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '70px',
    transition: 'all 250ms ease',
    backgroundColor: colors.omegaLight,
    selectors: {
      [`${categoryButton}:hover &`]: {
        backgroundColor: colors.alpha,
      },
    },
  }),
  svg: style({
    width: icon.xs,
    height: icon.xs,
    color: colors.omegaDark,
    selectors: {
      [`${categoryButton}:hover &`]: {
        color: colors.white,
      },
    },
  }),
  text: style({
    padding: space[3],
    flex: 'auto',
    fontWeight: fontWeights.medium,
    lineHeight: 1.33,
  }),
}

export default styles
