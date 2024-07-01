import React, { FC } from 'react'
import { Box, Flex, Stack, Divider } from '@chakra-ui/react'
import { useThemeEditor } from '../../hooks/useThemeEditor'

type Props = {
  scale?: string[]
}

export const ThemeEditorConfigItem: FC<Props> = ({
  scale = ['useSystemColorMode', 'initialColorMode', 'cssVarPrefix'],
}) => {
  const { theme, setTheme } = useThemeEditor()

  return (
    <Box>
      <Flex alignItems="center">
        <Stack flex="1" spacing="0.75rem" w="100%" divider={<Divider />}>
          {/* {scale.map((size) => (
            
          ))} */}
        </Stack>
      </Flex>
    </Box>
  )
}
