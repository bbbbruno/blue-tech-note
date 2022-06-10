import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from './variables.css'
import { sprinkles } from './sprinkles.css'

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

export const container = styleVariants(maxWidths, maxWidth => [
  base,
  { maxWidth },
])

const heading = {
  display: 'block',
  color: vars.colors.heading,
  fontWeight: vars.fontWeights.heading,
  textDecoration: 'none',
  marginBottom: vars.space[3],
}

export const headings = {
  h1: style([
    sprinkles({
      fontSize: [5, 6, null, 7],
    }),
    {
      ...heading,
      fontWeight: vars.fontWeights.bolder,
    },
  ]),
  h2: style({
    ...heading,
    fontSize: vars.fontSizes[4],
  }),
  h3: style({
    ...heading,
    fontSize: vars.fontSizes[3],
  }),
  h4: style({
    ...heading,
    fontSize: vars.fontSizes[2],
    fontWeight: vars.fontWeights.medium,
  }),
  h5: style({
    ...heading,
    fontSize: vars.fontSizes[1],
    fontWeight: vars.fontWeights.medium,
  }),
}
