import { globalStyle, globalFontFace } from '@vanilla-extract/css'

globalStyle('html, body', {
  padding: 0,
  margin: 0,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  fontSize: '16px',
  lineHeight: '1.8',
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  lineHeight: 1.33,
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('*', {
  boxSizing: 'border-box',
})

globalFontFace('Inter', {
  src: "url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap')",
})
