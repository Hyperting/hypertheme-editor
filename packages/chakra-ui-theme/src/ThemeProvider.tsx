import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  Theme,
} from '@chakra-ui/react'
import React, { FC } from 'react'

type ThemeProviderProps = {
  theme: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { theme, children } = props

  const customTheme = extendTheme({
    ...theme,
    config: { ...theme.config, cssVarPrefix: 'hyper-theme' },
  })

  return (
    <div className="themeRoot">
      <ColorModeScript />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </div>
  )
}

export default ThemeProvider
