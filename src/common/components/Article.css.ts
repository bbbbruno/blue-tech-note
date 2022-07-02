import { style, globalStyle } from '@vanilla-extract/css'
import { mq } from '../styles/mixins.css'
import {
  space,
  radii,
  colors,
  borderWidths,
  fontSizes,
  fontWeights,
  fontFamilies,
} from '../styles/variables.css'

const article = style({
  padding: space[4],
  width: '100%',
  backgroundColor: colors.contentBg,
  borderRadius: space[3],
  color: colors.text,
})

const styles = {
  article,
}

globalStyle(`${article} pre`, {
  fontFamily: fontFamilies.monospace,
  hyphens: 'none',
  overflow: 'auto',
  borderRadius: radii.default,
  tabSize: 4,
  margin: `${space[4]} 0`,
})

globalStyle(`${article} code`, {
  borderRadius: '0.3em',
  color: '#4a5568',
  backgroundColor: colors.highlight,
  padding: `${space[1]} ${space[2]}`,
})

globalStyle(`${article} a`, {
  color: colors.alpha,
  textDecoration: 'none',
  userSelect: 'none',
})

globalStyle(`${article} a:hover`, {
  color: colors.alphaDark,
})

const heading = {
  color: colors.heading,
  fontWeight: fontWeights.heading,
  textDecoration: 'none',
  marginBottom: space[3],
}

globalStyle(`${article} h1`, {
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

globalStyle(`${article} h2`, {
  ...heading,
  fontSize: fontSizes[4],
})

globalStyle(`${article} h3`, {
  ...heading,
  fontSize: fontSizes[3],
})

globalStyle(`${article} h4`, {
  ...heading,
  fontSize: fontSizes[2],
  fontWeight: fontWeights.medium,
})

globalStyle(`${article} h3 + pre, ${article} h4 + pre`, {
  marginBottom: space[0],
})

globalStyle(`${article} h5`, {
  ...heading,
  fontSize: fontSizes[1],
  fontWeight: fontWeights.medium,
})

globalStyle(`${article} hr`, {
  margin: `${space[4]} 0`,
  color: colors.omegaLight,
})

globalStyle(`${article} p`, {
  color: colors.article,
  fontSize: fontSizes[3],
  marginBottom: space[4],
})

globalStyle(`${article} p code`, {
  fontSize: 'inherit',
})

globalStyle(`${article} ol`, {
  marginBottom: space[4],
})

globalStyle(`${article} ul`, {
  marginBottom: space[4],
})

globalStyle(`${article} li`, {
  color: colors.article,
  fontSize: fontSizes[3],
  margin: space[0],
})

globalStyle(`${article} li code`, {
  fontSize: 'inherit',
})

globalStyle(`${article} table`, {
  borderRadius: radii.default,
  overflow: 'hidden',
  backgroundColor: colors.omegaLight,
})

globalStyle(`${article} tr:nth-of-type(even)`, {
  backgroundColor: colors.omegaLighter,
})

globalStyle(`${article} th`, {
  backgroundColor: colors.omegaDarker,
  color: colors.omegaLighter,
  fontWeight: 'normal',
  padding: space[2],
})

globalStyle(`${article} th:first-of-type`, {
  paddingLeft: space[3],
})

globalStyle(`${article} th:last-of-type`, {
  paddingRight: space[3],
})

globalStyle(`${article} td`, {
  borderBottomWidth: 0,
  padding: space[2],
})

globalStyle(`${article} td:first-of-type`, {
  paddingLeft: space[3],
})

globalStyle(`${article} td:last-of-type`, {
  paddingRight: space[3],
})

globalStyle(`${article} blockquote`, {
  fontStyle: 'italic',
  border: `${borderWidths.md} solid ${colors.alphaLight}`,
  margin: `0 ${space[0]}`,
  padding: `0 ${space[3]}`,
  ...mq.tablet({
    margin: `0 ${space[4]}`,
    padding: `0 ${space[4]}`,
  }),
})

globalStyle(`${article} blockquote p`, {
  color: colors.text,
})

globalStyle(`${article} blockquote.translation`, {
  fontSize: fontSizes[2],
})

globalStyle(`${article} figure`, {
  boxShadow: '1px 1px 5px 0 rgba(1,1,1,.15)',
  overflow: 'hidden',
  backgroundColor: colors.contentBg,
  borderRadius: radii.default,
  margin: space[0],
})

globalStyle(`${article} figcaption`, {
  textAlign: 'center',
  fontStyle: 'italic',
  fontSize: fontSizes[1],
  margin: space[3],
})

export default styles
