import { globalStyle, globalFontFace } from '@vanilla-extract/css'
import { colors, fontSizes, fontWeights } from '../styles/variables.css'

globalStyle('html, body', {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  fontSize: '16px',
  lineHeight: '1.8',
  WebkitFontSmoothing: 'antialiased',
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  lineHeight: 1.33,
  color: colors.heading,
  fontWeight: fontWeights.bold,
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('ul', {
  lineHeight: 1.33,
})

globalStyle('p', {
  color: colors.text,
})

globalFontFace('Inter', {
  src: "url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap')",
})
