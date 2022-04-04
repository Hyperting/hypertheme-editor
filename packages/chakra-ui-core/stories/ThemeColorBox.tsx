import React, { FC, useMemo } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { useThemeEditor } from '../src'

type Props = {
  token: string
  paletteIndex?: number
} & BoxProps

export const ThemeColorBox: FC<Props> = ({ token, paletteIndex, ...props }) => {
  const { theme } = useThemeEditor()

  const color = useMemo(() => {
    if (theme?.colors?.[token]) {
      if (typeof theme.colors[token] === 'string') {
        return theme.colors[token]
      } else if (theme?.colors?.[token] && paletteIndex && theme.colors[token][paletteIndex]) {
        return theme.colors[token][paletteIndex]
      }
    }

    return 'gray'
  }, [theme, token, paletteIndex])

  return <Box w="40px" h="40px" borderRadius="md" bgColor={color} {...props} />
}
