import { Stack, Text, useColorMode, StackProps, ThemingProps } from '@chakra-ui/react'
import React, { FC } from 'react'
import { FaSun } from 'react-icons/fa'
import { RiMoonClearFill } from 'react-icons/ri'
import { IconSwitch } from './IconSwitch'

type ColorModeToggleProps = {
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
} & StackProps &
  ThemingProps

const ColorModeToggle: FC<ColorModeToggleProps> = (props) => {
  const { size = 'md', showLabel, colorScheme = 'gray', fontSize, ...rest } = props
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      display="inline-flex"
      {...rest}
    >
      {showLabel && (
        <Text fontSize={fontSize || size} textTransform="capitalize">
          {colorMode}
        </Text>
      )}
      <IconSwitch
        size={size}
        color={colorMode == 'light' ? 'yellow.400' : 'yellow.600'}
        bgColor={colorMode == 'light' ? 'gray.200' : 'blue.600'}
        display="flex"
        isChecked={colorMode == 'dark'}
        value={colorMode}
        falseIcon={FaSun}
        trueIcon={RiMoonClearFill}
        onChange={toggleColorMode}
      />
    </Stack>
  )
}

export default ColorModeToggle
