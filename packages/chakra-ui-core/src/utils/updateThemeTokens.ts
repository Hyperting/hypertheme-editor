import { Theme } from '@chakra-ui/react'

// theme.colors
export const setThemeSingleColor = (token: string, value: string) => {
  document.documentElement.style.setProperty(`--chakra-colors-${token}`, value)
}

export const setThemeColor = (token: string, paletteKey: string | number, value: string) => {
  document.documentElement.style.setProperty(`--chakra-colors-${token}-${paletteKey}`, value)
}

export const setThemeColorPalette = (
  token: string,
  newPalette: Record<string | number, string>
): void => {
  const paletteKeys = Object.keys(newPalette)
  for (const paletteKey of paletteKeys) {
    setThemeColor(token, paletteKey, newPalette[paletteKey])
  }
}

export const setThemeColors = (colors: Theme['colors']) => {
  const tokens = Object.keys(colors)
  for (const token of tokens) {
    if (typeof colors[token] === 'string') {
      setThemeSingleColor(token, colors[token])
    } else {
      setThemeColorPalette(token, colors[token])
    }
  }
}

// theme.fonts
export const setThemeTypographyFont = (section: string, value: string): void => {
  document.documentElement.style.setProperty(`--chakra-fonts-${section}`, value)
}

export const setThemeTypographyFonts = (fonts: Theme['fonts']): void => {
  const sections = Object.keys(fonts)
  for (const section of sections) {
    setThemeTypographyFont(section, fonts[section])
  }
}

// theme.fontSizes
export const setThemeTypographyFontSize = (size: string, value: string): void => {
  document.documentElement.style.setProperty(`--chakra-fontSizes-${size}`, value)
}

export const setThemeTypograghyFontSizes = (fontSizes: Theme['fontSizes']): void => {
  const sizes = Object.keys(fontSizes)
  for (const size of sizes) {
    setThemeTypographyFontSize(size, fontSizes[size])
  }
}

// theme.letterSpacings
export const setThemeTypographyLetterSpacing = (size: string, value: string): void => {
  document.documentElement.style.setProperty(`--chakra-letterSpacings-${size}`, value)
}

export const setThemeTypographyLetterSpacings = (letterSpacings: Theme['letterSpacings']): void => {
  const sizes = Object.keys(letterSpacings)
  for (const size of sizes) {
    setThemeTypographyLetterSpacing(size, letterSpacings[size])
  }
}

// theme.lineHeights
export const setThemeTypographyLineHeight = (size: string, value: string): void => {
  document.documentElement.style.setProperty(`--chakra-lineHeights-${size}`, value)
}

export const setThemeTypographyLineHeights = (lineHeights: Theme['lineHeights']): void => {
  const sizes = Object.keys(lineHeights)
  for (const size of sizes) {
    setThemeTypographyLineHeight(size, lineHeights[size])
  }
}

// theme.shadows
export const setThemeShadow = (size: string, value: string): void => {
  document.documentElement.style.setProperty(`--chakra-shadows-${size}`, value)
}

export const setThemeShadows = (shadows: Theme['shadows']): void => {
  const sizes = Object.keys(shadows)

  for (const size of sizes) {
    setThemeShadow(size, shadows[size])
  }
}

// theme.space
export const setThemeSpacing = (size: string, value: string): void => {
  document.documentElement.style.setProperty(`--chakra-space-${size}`, value)
}

export const setThemeSpacings = (space: Theme['space']): void => {
  const sizes = Object.keys(space)

  for (const size of sizes) {
    setThemeSpacing(size, space[size])
  }
}

// theme.radii
export const setThemeBorderRadius = (size: string, value: string): void => {
  document.documentElement.style.setProperty(`--chakra-radii-${size}`, value)
}

export const setThemeBorderRadiuses = (radii: Theme['radii']): void => {
  const sizes = Object.keys(radii)

  for (const size of sizes) {
    setThemeBorderRadius(size, radii[size])
  }
}

export const setThemeTokens = (theme: Theme) => {
  console.log(theme.config, 'sono la config')
  setThemeColors(theme.colors)
  setThemeTypograghyFontSizes(theme.fontSizes)
  setThemeTypographyFonts(theme.fonts)
  setThemeTypographyLetterSpacings(theme.letterSpacings)
  setThemeTypographyLineHeights(theme.lineHeights)
  setThemeShadows(theme.shadows)
  setThemeBorderRadiuses(theme.radii)
  setThemeSpacings(theme.space)
}
