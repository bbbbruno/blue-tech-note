import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from '../styles/variables.css'
import { sprinkles } from '../styles/sprinkles.css'

const base = style([
  sprinkles({
    paddingX: [3, 4],
  }),
  {
    width: '100%',
    margin: '0 auto',
  },
])

const maxWidths = {
  compact: vars.sizes.container,
  wide: vars.sizes.wide,
  full: vars.sizes.full,
}

const variants = styleVariants(maxWidths, maxWidth => [base, { maxWidth }])

export default variants
