export const mq = {
  tablet(css: object) {
    return { '@media': { 'screen and (min-width: 768px)': css } }
  },
  desktop(css: object) {
    return { '@media': { 'screen and (min-width: 1024px)': css } }
  },
}
