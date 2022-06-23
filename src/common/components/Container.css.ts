import { style, styleVariants } from '@vanilla-extract/css'
import { mq } from '../styles/mixins.css'
import { sizes, space } from '../styles/variables.css'

const styles = {
  container: styleVariants(
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
  ),
  flex: style({
    ...mq.tablet({
      display: 'flex',
    }),
  }),
}

export default styles
