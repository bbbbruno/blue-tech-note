import { style, styleVariants } from '@vanilla-extract/css'
import { sizes, space, colors, fontWeights, fontSizes } from './variables.css'
import { mq } from './mixins.css'
import { sprinkles } from './sprinkles.css'

export const container = styleVariants(
  {
    compact: { maxWidth: sizes.container },
    wide: { maxWidth: sizes.wide },
    full: { maxWidth: sizes.full },
  },
  type => [
    {
      width: '100%',
      margin: '0 auto',
      padding: space[3],
      ...mq.tablet({
        padding: `0 ${space[4]}`,
      }),
    },
    type,
  ]
)

const heading = {
  display: 'block',
  color: colors.heading,
  fontWeight: fontWeights.heading,
  textDecoration: 'none',
  marginBottom: space[3],
}

export const headings = {
  h1: style([
    sprinkles({
      fontSize: [5, 6, null, 7],
    }),
    {
      ...heading,
      fontWeight: fontWeights.bolder,
    },
  ]),
  h2: style({
    ...heading,
    fontSize: fontSizes[4],
  }),
  h3: style({
    ...heading,
    fontSize: fontSizes[3],
  }),
  h4: style({
    ...heading,
    fontSize: fontSizes[2],
    fontWeight: fontWeights.medium,
  }),
  h5: style({
    ...heading,
    fontSize: fontSizes[1],
    fontWeight: fontWeights.medium,
  }),
}
