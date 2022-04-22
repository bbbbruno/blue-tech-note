import { createSprinkles } from '@vanilla-extract/sprinkles'
import { responsiveProperties } from './theme/breakpoints.css'

export const sprinkles = createSprinkles(responsiveProperties)

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0]
