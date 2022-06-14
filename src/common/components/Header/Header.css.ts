import { style } from '@vanilla-extract/css'
import { colors, space } from '../../styles/variables.css'
import { mq } from '../../styles/mixins.css'

const styles = {
  header: style({
    backgroundColor: colors.headerBg,
  }),
  wrapper: style({
    height: '6rem',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${space[3]} 0`,
    ...mq.tablet({
      display: 'flex',
      padding: `${space[4]} 0`,
    }),
  }),
  menuWrapper: style({
    display: 'flex',
    alignItems: 'center',
  }),
}

export default styles
