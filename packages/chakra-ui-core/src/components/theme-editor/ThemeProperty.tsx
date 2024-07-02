import {
  useCheckbox,
  useColorMode,
  useColorModeValue,
  chakra,
  Flex,
  Text,
  Icon,
} from '@chakra-ui/react'
import React from 'react'

export const ThemeProperty = (props) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useCheckbox(props)
  const { colorMode } = useColorMode()
  const bgColor = useColorModeValue('white', 'gray.800')
  const checkboxBgColor = useColorModeValue('gray.100', 'gray.900')
  const checked = state.isChecked || props.selected

  return (
    <chakra.label
      display="flex"
      flexDir="column"
      bg="primary.50"
      outline={checked ? '3px solid' : 'unset'}
      outlineColor={checked ? (colorMode === 'light' ? 'primary.300' : 'primary.700') : 'unset'}
      boxShadow={
        !checked ? '0px 4px 8px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.2)' : 'unset'
      }
      bgColor={checked ? (colorMode === 'light' ? 'primary.200' : 'primary.900') : bgColor}
      rounded="lg"
      p={4}
      cursor="pointer"
      {...htmlProps}
    >
      <input {...getInputProps()} hidden />
      <Flex
        alignItems="center"
        justifyContent="center"
        borderRadius="2xl"
        w="40px"
        h="40px"
        // colorscheme="primary"
        bgColor={
          checked ? (colorMode === 'light' ? 'primary.500' : 'primary.600') : checkboxBgColor
        }
        {...getCheckboxProps()}
      >
        <Icon
          w="20px"
          h="20px"
          color={checked ? 'gray.200' : colorMode === 'light' ? 'gray.600' : 'gray.200'}
          as={props.icon}
        />
      </Flex>
      <Text
        mt={2}
        fontWeight="bold"
        color={checked ? 'primary.500' : colorMode === 'light' ? 'gray.600' : 'gray.200'}
        {...getLabelProps()}
      >
        {props.label}
      </Text>
    </chakra.label>
  )
}
