import {
  Stack,
  Text,
  useColorMode,
  StackProps,
  ThemingProps,
  Tabs,
  TabList,
  Tab,
  Icon,
  HStack,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { ImSun } from 'react-icons/im'
import { RiMoonClearLine } from 'react-icons/ri'
import { IconSwitch } from './IconSwitch'

type ColorModeToggleProps = {
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
} & StackProps &
  ThemingProps

const ColorModeToggle: FC<ColorModeToggleProps> = (props) => {
  const { size = 'md', showLabel, colorScheme = 'gray', fontSize, ...rest } = props
  const { colorMode, setColorMode } = useColorMode()
  const colorModeValues = ['light', 'dark']

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
      {/* <IconSwitch
        size={size}
        color={colorMode == 'light' ? 'yellow.400' : 'yellow.600'}
        bgColor={colorMode == 'light' ? 'white' : 'gray.700'}
        d="flex"
        isChecked={colorMode == 'dark'}
        value={colorMode}
        falseIcon={FaSun}
        trueIcon={RiMoonClearFill}
        onChange={toggleColorMode}
      /> */}
      <Tabs
        onChange={(index) => setColorMode(colorModeValues[index])}
        variant="unstyled"
        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.2)"
        borderRadius="md"
        bgColor={colorMode == 'light' ? 'white' : 'gray.700'}
        p={0.5}
      >
        <TabList>
          {colorModeValues.map((value) => (
            <Tab
              key={value}
              size={size}
              borderRadius="md"
              bgColor={
                value == 'light'
                  ? colorMode == 'light'
                    ? 'gray.100'
                    : 'gray.700'
                  : colorMode == 'dark'
                  ? 'gray.800'
                  : 'white'
              }
              p={1.5}
              _focus={{ border: 'none' }}
            >
              <Icon
                boxSize="12px"
                color={
                  value == 'light'
                    ? colorMode == 'light'
                      ? 'yellow.400'
                      : 'gray.100'
                    : colorMode == 'dark'
                    ? 'yellow.400'
                    : 'gray.400'
                }
                as={value == 'light' ? ImSun : RiMoonClearLine}
                d="flex"
              />
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </Stack>
  )
}

export default ColorModeToggle
