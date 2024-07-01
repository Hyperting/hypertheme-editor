import React, { FC, useMemo } from 'react'
import {
  Box,
  SimpleGrid,
  useColorModeValue,
  SimpleGridProps,
  Theme,
  Skeleton,
  useTheme as useChakraTheme,
} from '@chakra-ui/react'
import { COLOR_PICKER_TRANSPARENT_SAFE_BG_B64 } from '../../constants'
import { useThemeEditor } from '../../hooks/useThemeEditor'

export type ThemeIconProps = {
  theme?: Theme
  colors?: {}[] // Pick<BackgroundProps, 'bg'>[]
  size?: 'sm' | 'md' | 'lg' | 'xs'
} & SimpleGridProps

const ThemeIcon: FC<ThemeIconProps> = (props) => {
  const { theme } = useThemeEditor()
  const chakraTheme = useChakraTheme()
  const { colors, size, ...rest } = props
  const safeB64Bg = useColorModeValue(
    COLOR_PICKER_TRANSPARENT_SAFE_BG_B64[0],
    COLOR_PICKER_TRANSPARENT_SAFE_BG_B64[1]
  )

  const iconSize = useMemo(() => {
    switch (size) {
      case 'xs':
        return 6
      case 'sm':
        return 8
      case 'lg':
        return 14
      default:
        return 12
    }
  }, [size])

  const iconSpacing = useMemo(() => {
    switch (size) {
      case 'xs':
        return 1
      case 'sm':
        return 1
      case 'lg':
        return 2
      default:
        return 2
    }
  }, [size])

  const iconBorder = useMemo(() => {
    switch (size) {
      case 'xs':
        return 0.5
      case 'sm':
        return 1
      case 'lg':
        return 2
      default:
        return 2
    }
  }, [size])

  const primaryColor = useMemo(() => {
    if (theme?.colors?.primary) return theme.colors.primary
    return chakraTheme?.colors?.primary || chakraTheme?.colors?.purple
  }, [chakraTheme, theme])

  const secondaryColor = useMemo(() => {
    if (theme?.colors?.secondary) return theme.colors.secondary
    return chakraTheme?.colors?.secondary || chakraTheme?.colors?.green
  }, [chakraTheme, theme])

  const iconColors = useMemo(() => {
    if (colors && colors.length >= 3) return colors
    return [primaryColor, secondaryColor, theme?.colors?.gray, theme?.colors?.blue]
  }, [theme, colors, primaryColor, secondaryColor])

  if (!theme) {
    return (
      <SimpleGrid
        columns={2}
        spacing={iconSpacing}
        boxSize={iconSize}
        p={iconSpacing}
        borderRadius="6px"
        {...rest}
      >
        <Skeleton boxSize="100%" borderRadius="full" border="2px solid" />
        <Skeleton boxSize="100%" borderRadius="full" border="2px solid" />
        <Skeleton boxSize="100%" borderRadius="full" border="2px solid" />
        <Skeleton boxSize="100%" borderRadius="full" border="2px solid" />
      </SimpleGrid>
    )
  }

  return (
    <SimpleGrid
      columns={2}
      spacing={iconSpacing}
      boxSize={iconSize}
      p={iconSpacing}
      borderRadius="6px"
      {...rest}
    >
      <Box
        boxSize="100%"
        borderRadius="full"
        overflow="hidden"
        bgSize="cover"
        bgImage={`url(data:image/png;base64,${safeB64Bg})`}
      >
        <Box
          boxSize="100%"
          bg={iconColors[0][500]}
          border={`${iconBorder}px solid`}
          borderColor="rgba(220,220,220,0.4)"
          borderRadius="full"
        />
      </Box>

      <Box
        boxSize="100%"
        borderRadius="full"
        overflow="hidden"
        bgSize="cover"
        bgImage={`url(data:image/png;base64,${safeB64Bg})`}
      >
        <Box
          boxSize="100%"
          bg={iconColors[1][500]}
          border={`${iconBorder}px solid`}
          borderColor="rgba(220,220,220,0.4)"
          borderRadius="full"
        />
      </Box>

      <Box
        boxSize="100%"
        borderRadius="full"
        overflow="hidden"
        bgSize="cover"
        bgImage={`url(data:image/png;base64,${safeB64Bg})`}
      >
        <Box
          boxSize="100%"
          bg={iconColors[2][500]}
          border={`${iconBorder}px solid`}
          borderColor="rgba(220,220,220,0.4)"
          borderRadius="full"
        />
      </Box>

      <Box
        boxSize="100%"
        borderRadius="full"
        overflow="hidden"
        bgSize="cover"
        bgImage={`url(data:image/png;base64,${safeB64Bg})`}
      >
        <Box
          boxSize="100%"
          bg={iconColors[3][500]}
          border={`${iconBorder}px solid`}
          borderColor="rgba(220,220,220,0.4)"
          borderRadius="full"
        />
      </Box>
    </SimpleGrid>
  )
}

export default ThemeIcon
