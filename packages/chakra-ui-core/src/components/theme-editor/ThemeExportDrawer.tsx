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
  useColorMode,
  HStack,
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
    ...baseTheme
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
  const { value, setValue, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [],
  })
  const [selectedLanguage, setSelectedLanguage] = useState('ts')
  const [selectAll, setSelectAll] = useState(false)
  console.log('theme', theme)
  const { colorMode } = useColorMode()
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
        <DrawerBody bgColor="rgba(0,0,0,0)" justify="center" pt={0}>
          <Flex flexDir="row" justifyContent="space-between" alignItems="center" mb={4}>
            <Text color="gray.400">Export</Text>
            <Button
              variant="unstyled"
              h="fit-content"
              color="primary.500"
              fontWeight="normal"
              _focus={{ border: 'none' }}
              _hover={{ textDecoration: 'underline' }}
              onClick={() => {
                setSelectAll(!selectAll)
                setValue([])
              }}
            >
              Select all
            </Button>
          </Flex>
          <Grid w="100%" templateColumns="repeat(2, 1fr)" templateRows="repeat(5, 1fr)" gap={4}>
            {getKeys(editableProperties).map((key, index) => {
              return (
                <GridItem key={key}>
                  <ThemeProperty
                    {...getCheckboxProps({
                      value: key,
                      label: themeLabels[index],
                      selected: selectAll,
                    })}
                  />
                </GridItem>
              )
            })}
          </Grid>
        </DrawerBody>
        <DrawerFooter
          borderTop="1px solid"
          borderColor={colorMode === 'light' ? 'gray.50' : 'gray.700'}
          bgColor={colorMode === 'light' ? 'white' : 'gray.800'}
        >
          <Flex justifyContent="space-between" w="100%">
            <Menu>
              <MenuButton
                as={Button}
                px="8px"
                transform="translateX(-8px)"
                variant="ghost"
                color={colorMode === 'light' ? 'gray.500' : 'gray.200'}
                rightIcon={<Icon as={MdKeyboardArrowDown} />}
              >
                <HStack>
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    borderRadius="2xl"
                    w="32px"
                    h="32px"
                    colorscheme="primary"
                    bgColor={colorMode === 'light' ? 'gray.100' : 'gray.900'}
                  >
                    <Icon
                      w="14px"
                      h="14px"
                      color={colorMode === 'light' ? 'gray.600' : 'gray.200'}
                    />
                  </Flex>
                  <Text>{selectedLanguage === 'ts' ? 'TypeScript' : 'JavaScript'}</Text>
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem
                  value="ts"
                  borderRadius="md"
                  onClick={(e) => setSelectedLanguage((e.target as HTMLInputElement).value)}
                >
                  TypeScript
                </MenuItem>
                <MenuItem
                  value="js"
                  borderRadius="md"
                  onClick={(e) => setSelectedLanguage((e.target as HTMLInputElement).value)}
                >
                  JavaScript
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <ThemeDownloadButton
            baseTheme={baseTheme}
            selectedProperties={value as string[] | number[]}
            selectAll={selectAll}
            selectedLanguage={selectedLanguage}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

const ThemeProperty = (props) => {
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
        colorscheme="primary"
        bgColor={
          checked ? (colorMode === 'light' ? 'primary.500' : 'primary.600') : checkboxBgColor
        }
        {...getCheckboxProps()}
      >
        <Icon
          w="20px"
          h="20px"
          color={checked ? 'gray.200' : colorMode === 'light' ? 'gray.600' : 'gray.200'}
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
