import { defineProperties } from '@vanilla-extract/sprinkles'
import { space } from './space.css'
import { sizes } from './sizes.css'
import { fontSizes } from './typography.css'

export const breakpoints = [640, 768, 1024]
export const mq = {
  smallTablet: `screen and (min-width: ${breakpoints[0]}px)`,
  tablet: `screen and (min-width: ${breakpoints[1]}px)`,
  desktop: `screen and (min-width: ${breakpoints[2]}px)`,
}

export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    smallTablet: {
      '@media': mq.smallTablet,
    },
    tablet: { '@media': mq.tablet },
    desktop: { '@media': mq.desktop },
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
    flexBasis: sizes,
    fontSize: fontSizes,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})
