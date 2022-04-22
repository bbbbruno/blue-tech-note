import { createGlobalTheme } from '@vanilla-extract/css'

export const space = createGlobalTheme(':root', {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '1rem',
  4: '2rem',
  5: '4rem',
  6: '8rem',
  7: '16rem',
  8: '32rem',
})
