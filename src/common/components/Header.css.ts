import { style } from '@vanilla-extract/css'
import { vars } from '../styles/variables.css'
import { sprinkles } from '../styles/sprinkles.css'

const headerStyle = {
  header: style([
    sprinkles({
      display: 'flex',
      paddingX: [2, 5, 7, 5],
    }),
    {
      backgroundColor: vars.colors.headerBg,
    },
  ]),
  text: style({
    color: vars.colors.text,
    fontFamily: vars.fontFamilies.body,
    fontSize: vars.fontSizes[0],
    margin: vars.space[0],
  }),
}

export default headerStyle
