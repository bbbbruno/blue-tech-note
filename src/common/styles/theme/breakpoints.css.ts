import { defineProperties } from '@vanilla-extract/sprinkles'
import { space } from './space.css'

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    smallTablet: {
      '@media': `screen and (min-width: 640px)`,
    },
    tablet: { '@media': `screen and (min-width: 768px)` },
    desktop: { '@media': `screen and (min-width: 1024px)` },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'smallTablet', 'tablet', 'desktop'],
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})
