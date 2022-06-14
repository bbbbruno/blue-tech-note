import { style, styleVariants } from '@vanilla-extract/css'
import { sizes, space, colors, fontWeights, fontSizes } from './variables.css'
import { mq } from './mixins.css'

const heading = {
  display: 'block',
  color: colors.heading,
  fontWeight: fontWeights.heading,
  textDecoration: 'none',
  marginBottom: space[3],
}

export const headings = {
  h1: style([
    {
      ...heading,
      fontSize: fontSizes[5],
      fontWeight: fontWeights.bolder,
      ...mq.tablet({ fontSize: fontSizes[5] }),
      ...mq.desktop({ fontSize: fontSizes[5] }),
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
