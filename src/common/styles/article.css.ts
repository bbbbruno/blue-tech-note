import { globalStyle } from '@vanilla-extract/css'
import { mq } from './mixins.css'
import {
  space,
  radii,
  colors,
  borderWidths,
  fontSizes,
  fontWeights,
  fontFamilies,
} from './variables.css'

globalStyle('pre', {
  fontFamily: fontFamilies.monospace,
  hyphens: 'none',
  overflow: 'auto',
  borderRadius: radii.default,
  tabSize: 4,
  margin: `${space[4]} 0`,
})

globalStyle('code', {
  borderRadius: '0.3em',
  color: '#4a5568',
  backgroundColor: colors.highlight,
  padding: `${space[1]} ${space[2]}`,
})

globalStyle('a', {
  color: colors.alpha,
  textDecoration: 'none',
  userSelect: 'none',
})

globalStyle('a:hover', {
  color: colors.alphaDark,
})

const heading = {
  color: colors.heading,
  fontWeight: fontWeights.heading,
  textDecoration: 'none',
  marginBottom: space[3],
}

globalStyle('h1', {
  ...heading,
  fontSize: fontSizes[5],
  fontWeight: fontWeights.bolder,
  borderBottom: `${borderWidths.sm} solid ${colors.omegaLight}`,
  paddingBottom: space[3],
  marginBottom: space[4],
  ...mq.tablet({
    fontSize: fontSizes[6],
  }),
  ...mq.desktop({
    fontSize: fontSizes[7],
  }),
})

globalStyle('h2', {
  ...heading,
  fontSize: fontSizes[4],
})

globalStyle('h3', {
  ...heading,
  fontSize: fontSizes[3],
})

globalStyle('h4', {
  ...heading,
  fontSize: fontSizes[2],
  fontWeight: fontWeights.medium,
})

globalStyle('h3 + pre, h4 + pre', {
  marginBottom: space[0],
})

globalStyle('h5', {
  ...heading,
  fontSize: fontSizes[1],
  fontWeight: fontWeights.medium,
})

globalStyle('hr', {
  margin: `${space[4]} 0`,
  color: colors.omegaLight,
})

globalStyle('p', {
  color: colors.article,
  fontSize: fontSizes[3],
  marginBottom: space[4],
})

globalStyle('p code', {
  fontSize: 'inherit',
})

globalStyle('ol', {
  marginBottom: space[4],
})

globalStyle('ul', {
  marginBottom: space[4],
})

globalStyle('li', {
  color: colors.article,
  fontSize: fontSizes[3],
  margin: space[0],
})

globalStyle('li code', {
  fontSize: 'inherit',
})

globalStyle('table', {
  borderRadius: radii.default,
  overflow: 'hidden',
  backgroundColor: colors.omegaLight,
})

globalStyle('tr:nth-of-type(even)', {
  backgroundColor: colors.omegaLighter,
})

globalStyle('th', {
  backgroundColor: colors.omegaDarker,
  color: colors.omegaLighter,
  fontWeight: 'normal',
  padding: space[2],
})

globalStyle('th:first-of-type', {
  paddingLeft: space[3],
})

globalStyle('th:last-of-type', {
  paddingRight: space[3],
})

globalStyle('td', {
  borderBottomWidth: 0,
  padding: space[2],
})

globalStyle('td:first-of-type', {
  paddingLeft: space[3],
})

globalStyle('td:last-of-type', {
  paddingRight: space[3],
})

globalStyle('blockquote', {
  fontStyle: 'italic',
  border: `${borderWidths.md} solid ${colors.alphaLight}`,
  margin: `0 ${space[0]}`,
  padding: `0 ${space[3]}`,
  ...mq.tablet({
    margin: `0 ${space[4]}`,
    padding: `0 ${space[4]}`,
  }),
})

globalStyle('blockquote p', {
  color: colors.text,
})

globalStyle('blockquote.translation', {
  fontSize: fontSizes[2],
})

globalStyle('figure', {
  boxShadow: '1px 1px 5px 0 rgba(1,1,1,.15)',
  overflow: 'hidden',
  backgroundColor: colors.contentBg,
  borderRadius: radii.default,
  margin: space[0],
})

globalStyle('figcaption', {
  textAlign: 'center',
  fontStyle: 'italic',
  fontSize: fontSizes[1],
  margin: space[3],
})
