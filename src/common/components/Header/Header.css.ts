import { style } from '@vanilla-extract/css'
import { vars, mq } from '../../styles/variables.css'
import { sprinkles } from '../../styles/sprinkles.css'
import { container, headings } from '../../styles/foundation.css'

const styles = {
  container: container['compact'],
  wrapper: style([
    sprinkles({
      display: 'flex',
      paddingY: [3, 4],
    }),
    {
      height: '6rem',
      alignItems: 'center',
      justifyContent: 'space-between',
      '@media': { [mq.smallTablet]: { height: '7rem' } },
    },
  ]),
  header: style({
    backgroundColor: vars.colors.headerBg,
  }),
  text: style({
    color: vars.colors.text,
    fontFamily: vars.fontFamilies.body,
    fontSize: vars.fontSizes[0],
    margin: vars.space[0],
  }),
  logo: style([
    headings.h2,
    sprinkles({ flexBasis: ['full', null, '1/3'] }),
    { marginBottom: 0 },
  ]),
  nav: style([
    sprinkles({
      flexBasis: ['auto', null, '1/3'],
    }),
    {
      minWidth: 'auto',
      '@media': {
        [mq.smallTablet]: { order: 4 },
        [mq.desktop]: { order: 'unset' },
      },
    },
  ]),
  navList: style({
    display: 'flex',
    justifyContent: 'flex-end',
  }),
}

export default styles
