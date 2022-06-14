import { style, styleVariants } from '@vanilla-extract/css'
import { sizes } from '../styles/variables.css'
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
  compact: sizes.container,
  wide: sizes.wide,
  full: sizes.full,
}

const variants = styleVariants(maxWidths, maxWidth => [base, { maxWidth }])

export default variants
