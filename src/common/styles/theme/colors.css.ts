import { createThemeContract, createTheme } from '@vanilla-extract/css'

const white = '#fff'
const gray = {
  200: '#edf2f7',
  300: '#e2e8f0',
  400: '#cbd5e0',
  500: '#a0aec0',
  600: '#718096',
  700: '#4a5568',
  800: '#2d3748',
  900: '#1a202c',
}
const indigo = {
  100: '#ebf4ff',
  300: '#a3bffa',
  500: '#667eea',
  600: '#5a67d8',
  800: '#434190',
}
const purple = {
  100: '#faf5ff',
  300: '#d6bcfa',
  500: '#9f7aea',
  600: '#805ad5',
  800: '#553c9a',
}
const green = {
  100: '#f0fff4',
  500: '#48bb78',
}
const red = {
  100: '#fff5f5',
  500: '#f56565',
}

//Primary
const alpha = {
  alphaLighter: indigo[100],
  alphaLight: indigo[300],
  alpha: indigo[500],
  alphaDark: indigo[600],
  alphaDarker: indigo[800],
}

// Secondary
const beta = {
  betaLighter: purple[100],
  betaLight: purple[300],
  beta: purple[500],
  betaDark: purple[600],
  betaDarker: purple[800],
}

// Neutral
const omega = {
  omegaLighter: gray[200],
  omegaLight: gray[300],
  omega: gray[500],
  omegaDark: gray[600],
  omegaDarker: gray[800],
}

export const colors = createThemeContract({
  text: null,
  article: null,
  heading: null,

  alphaLighter: null,
  alphaLight: null,
  alpha: null,
  alphaDark: null,
  alphaDarker: null,

  betaLighter: null,
  betaLight: null,
  beta: null,
  betaDark: null,
  betaDarker: null,

  omegaLighter: null,
  omegaLight: null,
  omega: null,
  omegaDark: null,
  omegaDarker: null,

  successLight: null,
  success: null,
  errorLight: null,
  error: null,

  white: null,
  background: null,
  contentBg: null,
  headerBg: null,
  footerBg: null,

  mute: null,
  highlight: null,
})

export const lightTheme = createTheme(colors, {
  text: gray[600],
  article: gray[700],
  heading: gray[800],

  ...alpha,
  ...beta,
  ...omega,

  successLight: green[100],
  success: green[500],
  errorLight: red[100],
  error: red[500],

  white: white,
  background: `#f8f8f8`,
  contentBg: white,
  headerBg: white,
  footerBg: white,

  mute: gray[300],
  highlight: gray[200],
})

export const darkTheme = createTheme(colors, {
  text: gray[400],
  article: gray[300],
  heading: gray[200],

  // Reverse alpha
  alphaLighter: alpha.alphaDarker,
  alphaLight: alpha.alphaDark,
  alpha: alpha.alpha,
  alphaDark: alpha.alphaLight,
  alphaDarker: alpha.alphaLighter,

  // Reverse beta
  betaLighter: beta.betaDarker,
  betaLight: beta.betaDark,
  beta: beta.beta,
  betaDark: beta.betaLight,
  betaDarker: beta.betaLighter,

  // Reverse omega
  omegaLighter: omega.omegaDarker,
  omegaLight: omega.omegaDark,
  omega: omega.omega,
  omegaDark: omega.omegaLight,
  omegaDarker: omega.omegaLighter,

  successLight: green[100],
  success: green[500],
  errorLight: red[100],
  error: red[500],

  white: white,
  background: gray[900],
  contentBg: gray[800],
  headerBg: gray[800],
  footerBg: gray[800],

  mute: gray[600],
  highlight: gray[200],
})
