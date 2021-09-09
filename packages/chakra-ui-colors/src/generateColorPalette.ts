import { colord } from 'colord'

export const generatePalette = (baseColor?: string) => {
  if (!baseColor) {
    throw new Error('color not provided')
  }

  return {
    900: colord(baseColor).darken(0.3).toHex(),
    800: colord(baseColor).darken(0.2).toHex(),
    700: colord(baseColor).darken(0.15).toHex(),
    600: colord(baseColor).darken(0.1).toHex(),
    500: baseColor,
    400: colord(baseColor).lighten(0.1).toHex(),
    300: colord(baseColor).lighten(0.15).toHex(),
    200: colord(baseColor).lighten(0.2).toHex(),
    100: colord(baseColor).lighten(0.25).toHex(),
    50: colord(baseColor).lighten(0.35).toHex(),
  }
}
