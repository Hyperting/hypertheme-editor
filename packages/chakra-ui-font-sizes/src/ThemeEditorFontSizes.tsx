import React, { FC, useCallback } from 'react'
import { Box, Flex, Stack, Divider } from '@chakra-ui/react'
import ThemeEditorFontSizesItem from './ThemeEditorFontSizesItem'
import { ThemeEditorRootPanelProps, useThemeEditor } from '@hypertheme-editor/chakra-ui-core'

type Props = {
  scale?: string[]
} & Partial<ThemeEditorRootPanelProps>

export const ThemeEditorFontSizes: FC<Props> = ({
  scale = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
  ...props
}) => {
  const { theme, setTheme } = useThemeEditor()

  const handleChangeFontSize = useCallback(
    ({ size, value }) => {
      if (theme && theme.fontSizes && theme.fontSizes[size] !== value) {
        try {
          const newTheme = {
            ...theme,
            fontSizes: {
              ...theme.fontSizes,
              [size]: value,
            },
          } as any
          setTheme(newTheme)
        } catch (error) {
          //
        }
      }
    },
    [setTheme, theme]
  )

  return (
    <Box>
      <Flex alignItems="center">
        <Stack
          flex="1"
          spacing="0.75rem"
          w="100%"
          overflow="scroll"
          overflowX="hidden"
          divider={<Divider />}
        >
          {scale.map((size) => (
            <ThemeEditorFontSizesItem
              key={`typography-size-${size}`}
              size={size}
              value={theme?.fontSizes![size]}
              onChange={handleChangeFontSize}
            />
          ))}
        </Stack>
      </Flex>
    </Box>
  )
}
