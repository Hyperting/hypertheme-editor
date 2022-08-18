import React, { FC, useCallback, useState } from 'react'
import {
  Box,
  Flex,
  Stack,
  Divider,
  Switch,
  Text,
  Tag,
  Center,
  Input,
  useColorMode,
} from '@chakra-ui/react'
import { FaSun } from 'react-icons/fa'
import { RiMoonClearFill } from 'react-icons/ri'
import { IconSwitch } from '../base/IconSwitch'
import { useThemeEditor } from '../../hooks/useThemeEditor'

type Props = {
  //
}

export const ThemeEditorConfig: FC<Props> = () => {
  const { theme, setTheme } = useThemeEditor()
  const { colorMode } = useColorMode()

  const [initialColorMode, setInitalColorMode] = useState(theme?.config?.initialColorMode)

  const toggleInitialColorMode = useCallback(() => {
    setInitalColorMode(initialColorMode == 'light' ? 'dark' : 'light')
  }, [initialColorMode])

  return (
    <Stack spacing="0.75rem" divider={<Divider />}>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="0.875rem">Use system color mode</Text>
        <Switch defaultChecked={theme?.config?.useSystemColorMode || false} size="lg" />
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="0.875rem">Initial color mode</Text>
        <Center>
          <Tag size="lg">{initialColorMode}</Tag>
          <IconSwitch
            size="lg"
            color={initialColorMode == 'light' ? 'yellow.400' : 'yellow.600'}
            bgColor={initialColorMode == 'light' ? 'gray.200' : 'blue.600'}
            display="flex"
            isChecked={initialColorMode == 'dark'}
            value={initialColorMode}
            falseIcon={FaSun}
            trueIcon={RiMoonClearFill}
            onChange={toggleInitialColorMode}
            ml={3}
          />
        </Center>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Box>
          <Text fontSize="0.875rem">CSS var prefix</Text>
          <Text fontSize="0.75rem" opacity={0.5}>
            Add a custom prefix for CSS variables
          </Text>
        </Box>
        <Center>
          <Input
            defaultValue={theme?.config?.cssVarPrefix}
            size="sm"
            borderRadius="md"
            textAlign="right"
            maxW="150px"
          />
        </Center>
      </Flex>
    </Stack>
  )
}
