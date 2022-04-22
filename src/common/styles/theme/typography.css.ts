import { createGlobalTheme } from '@vanilla-extract/css'

export const fontFamilies = createGlobalTheme(':root', {
  heading: 'Inter, sans-serif',
  body: 'Inter, sans-serif',
  monospace: 'Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace',
})

export const fontWeights = createGlobalTheme(':root', {
  body: 'normal',
  heading: 'bold',
  bold: '700',
  medium: '600',
  bolder: '900',
})

export const fontSizes = createGlobalTheme(':root', {
  0: '0.75rem',
  1: '0.875rem',
  2: '1rem',
  3: '1.25rem',
  4: '1.5rem',
  5: '1.875rem',
  6: '2.25rem',
  7: '3rem',
})
