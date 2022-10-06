import {
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  Flex,
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
  Text,
  useCheckbox,
  ChakraProvider,
  chakra,
  useCheckboxGroup,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Icon,
} from '@chakra-ui/react'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { ThemeEditorDrawerHeaderProps } from '.'

import { useThemeEditor } from '../../hooks/useThemeEditor'
import { ThemeEditorDrawerHeader } from './ThemeEditorDrawerHeader'
import { ThemeDownloadButton } from './ThemeDownloadButton'

export type ThemeExportDrawerProps = {
  isOpen: boolean
  onClose: () => void
  headerComponent?: React.ReactElement<
    ThemeEditorDrawerHeaderProps,
    React.JSXElementConstructor<ThemeEditorDrawerHeaderProps>
  >
}

export const ThemeExportDrawer: FC<ThemeExportDrawerProps> = ({
  isOpen,
  onClose,
  headerComponent = <ThemeEditorDrawerHeader />,
}) => {
  const bgColor = useColorModeValue('white', 'gray.900')
  const { theme } = useThemeEditor()
  const {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    shadows,
    radii,
    space,
    ...baseProperties
  } = theme as any
  const themeLabels = [
    'Colors',
    'Font',
    'Font Sizes',
    'Font Weight',
    'Line Height',
    'Letter Spacing',
    'Shadows',
    'Radii',
    'Space',
  ]
  const editableProperties = {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    shadows,
    radii,
    space,
  }
  const getKeys = (obj) => {
    return Object.keys(obj)
  }
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [],
  })
  const [selectedLanguage, setSelectedLanguage] = useState('ts')
  console.log('theme', theme)
  /* console.log('editable', editableProperties)
  console.log('selected values', value) */

  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="md">
      <DrawerContent bgColor={{ md: bgColor }}>
        {React.isValidElement(headerComponent) &&
          React.cloneElement<ThemeEditorDrawerHeaderProps>(
            headerComponent as React.ReactElement<ThemeEditorDrawerHeaderProps>,
            {
              onClose,
              children: (
                <Flex flexDir="column" justifyContent="flex-start" h="80px">
                  <Text fontSize="1.1rem" fontWeight="normal" color="gray.400" pt={1.5}>
                    Export
                  </Text>
                  <Heading
                    d="flex"
                    alignItems="center"
                    fontSize={{ base: '1.25rem', lg: '1.5rem' }}
                    h={{ lg: '50%' }}
                    mb={{ base: 1, lg: 0 }}
                    pt={0.5}
                  >
                    Hyper Theme
                  </Heading>
                </Flex>
              ),
            }
          )}
        <DrawerBody bgColor="rgba(0,0,0,0)" justify="center">
          <Flex>
            <Text></Text>
          </Flex>
          <Grid w="100%" templateColumns="repeat(2, 1fr)" templateRows="repeat(5, 1fr)" gap={4}>
            {getKeys(editableProperties).map((key, index) => {
              return (
                <GridItem key={key}>
                  <ThemeProperty {...getCheckboxProps({ value: key, label: themeLabels[index] })} />
                </GridItem>
              )
            })}
          </Grid>
        </DrawerBody>
        <DrawerFooter>
          <Flex justifyContent="space-between" w="100%">
            <Menu>
              <MenuButton as={Button} rightIcon={<Icon as={MdKeyboardArrowDown} />}>
                {selectedLanguage === 'ts' ? 'TypeScript' : 'JavaScript'}
              </MenuButton>
              <MenuList>
                <MenuItem
                  value="ts"
                  onClick={(e) => setSelectedLanguage((e.target as HTMLInputElement).value)}
                >
                  TypeScript
                </MenuItem>
                <MenuItem
                  value="js"
                  onClick={(e) => setSelectedLanguage((e.target as HTMLInputElement).value)}
                >
                  JavaScript
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <ThemeDownloadButton />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const ThemeProperty = (props) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useCheckbox(props)
  const bgColor = useColorModeValue('white', 'gray.700')
  const checkboxBgColor = useColorModeValue('gray.100', 'gray.800')
  return (
    <chakra.label
      display="flex"
      flexDir="column"
      bg="primary.50"
      outline={state.isChecked ? '3px solid' : 'unset'}
      outlineColor={state.isChecked ? 'primary.300' : 'unset'}
      boxShadow={
        !state.isChecked
          ? '0px 4px 8px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.2)'
          : 'unset'
      }
      bgColor={state.isChecked ? 'primary.200' : bgColor}
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
        colorscheme="primary"
        bgColor={state.isChecked ? 'primary.500' : checkboxBgColor}
        {...getCheckboxProps()}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          border="1.5px solid"
          borderColor={state.isChecked ? 'white' : 'gray.600'}
          borderRadius="lg"
          w="20px"
          h="20px"
        />
      </Flex>
      <Text
        mt={2}
        fontWeight="bold"
        color={state.isChecked ? 'primary.500' : 'gray.600'}
        {...getLabelProps()}
      >
        {props.label}
      </Text>
    </chakra.label>
  )
}
