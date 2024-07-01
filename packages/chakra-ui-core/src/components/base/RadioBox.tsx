import React, { FC, HTMLProps } from 'react'
import { Box, Flex, useRadio, Radio, useColorModeValue } from '@chakra-ui/react'

const RadioBox: FC<any> = (props) => {
  const { colorScheme = 'gray', p, py = 5, px = 5, pb, pt, isDisabled, ...rest } = props
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  const color = useColorModeValue('gray.700', 'whiteAlpha.800')
  const bgColor = useColorModeValue('white', 'gray.900')
  const shadow = useColorModeValue('surface', 'surfaceDark')
  const radioColorScheme = colorScheme || useColorModeValue('whiteAlpha', 'blackAlpha')
  const checkedBgColor = useColorModeValue(`${colorScheme}.300`, `${colorScheme}.700`)

  return (
    <Box
      as="label"
      pos="relative"
      overflow="hidden"
      boxShadow={shadow}
      bg={bgColor}
      borderRadius="md"
      {...rest}
    >
      <input {...input} />
      <Flex
        {...checkbox}
        pos="relative"
        cursor={!isDisabled && 'pointer'}
        // borderWidth="2px"
        color={color}
        w="full"
        h="100%"
        _checked={{
          bg: checkedBgColor,
          mx: 0,
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        {...{ p, py, px, pb, pt }}
        {...rest}
      >
        <Radio
          value={(input as any).value}
          size="lg"
          isChecked={(input as any).checked}
          colorScheme={radioColorScheme}
          pointerEvents="none"
          mr={4}
          isDisabled={isDisabled}
        />
        {props.children}
      </Flex>
    </Box>
  )
}

export default RadioBox
