import { style, styleVariants, keyframes } from '@vanilla-extract/css'
import { colors, space } from '../../styles/variables.css'

const switchOn = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '50%': {
    transform: 'scale(1.25)',
  },
  '100%': {
    transform: 'scale(1.1)',
  },
})

const switchOff = keyframes({
  '0%': {
    transform: 'scale(1.1)',
  },
  '100%': {
    transform: 'scale(1)',
  },
})

const styles = {
  toggle: styleVariants(
    {
      dark: {
        background: 'linear-gradient(45deg,#3366FF,#AC15B8)',
        '::after': { left: 'auto', right: '2px' },
      },
      light: {
        background: 'linear-gradient(45deg,#FF7D6B,#FFD64C)',
        '::after': { left: '2px', right: 'auto' },
      },
    },
    colorMode => [
      {
        position: 'relative',
        width: '50px',
        height: '24px',
        borderRadius: '20px',
        lineHeight: '20px',
        cursor: 'pointer',
        marginLeft: space[3],
        selectors: {
          '&::after': {
            position: 'absolute',
            borderRadius: '50%',
            top: '1px',
            width: '21px',
            height: '21px',
            content: '',
            backgroundColor: colors.white,
            transform: 'scale(1)',
            animationDuration: '.3s',
            animatiTimingFunction: 'cubic-bezier(0.35, 0, 0.25, 1)',
            animationName: switchOff,
          },
          '&:hover::after': {
            transform: 'scale(1.1)',
            animationName: switchOn,
          },
        },
      },
      colorMode,
    ]
  ),
  input: style({
    display: 'none',
  }),
  icon: styleVariants(
    {
      dark: { left: '7px' },
      light: { left: '26px' },
    },
    colorMode => [
      {
        position: 'absolute',
        top: '0px',
        lineHeight: '20px',
        color: colors.white,
      },
      colorMode,
    ]
  ),
  svg: style({
    verticalAlign: 'middle',
  }),
}

export default styles
