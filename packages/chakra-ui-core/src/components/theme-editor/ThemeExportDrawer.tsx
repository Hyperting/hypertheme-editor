import {
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
  Text,
  useCheckboxGroup,
  Button,
  useColorMode,
} from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { ThemeEditorDrawerHeaderProps } from '.'

import { useThemeEditor } from '../../hooks/useThemeEditor'
import { ThemeEditorDrawerHeader } from './ThemeEditorDrawerHeader'
import { ThemeProperty } from './ThemeProperty'
import { ThemeExportDrawerFooter } from './ThemeExportDrawerFooter'
import { BiPaint } from 'react-icons/bi'
import { AiOutlineFontSize, AiOutlineRadiusUpright } from 'react-icons/ai'
import { BsFonts } from 'react-icons/bs'
import { CgEditShadows, CgFontSpacing, CgFormatLineHeight, CgSpaceBetween } from 'react-icons/cg'
import { FaBold } from 'react-icons/fa'

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
  /* const themeLabels = [
    'Colors',
    'Font',
    'Font Sizes',
    'Font Weight',
    'Line Height',
    'Letter Spacing',
    'Shadows',
    'Radii',
    'Space',
  ] */
  const themeLabels = [
    { title: 'Colors', icon: BiPaint },
    { title: 'Font', icon: BsFonts },
    { title: 'Font Sizes', icon: AiOutlineFontSize },
    { title: 'Font Weight', icon: FaBold },
    { title: 'Line Height', icon: CgFormatLineHeight },
    { title: 'Letter Spacing', icon: CgFontSpacing },
    { title: 'Shadows', icon: CgEditShadows },
    { title: 'Radii', icon: AiOutlineRadiusUpright },
    { title: 'Space', icon: CgSpaceBetween },
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
                <Flex flexDir="column" justifyContent="flex-start">
                  <Text fontSize="1rem" fontWeight="normal" color="gray.400">
                    Export
                  </Text>
                  <Heading
                    d="flex"
                    alignItems="center"
                    fontSize="1.25rem"
                    h={{ lg: '50%' }}
                    mb={1}
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
                      label: themeLabels[index].title,
                      icon: themeLabels[index].icon,
                      selected: selectAll,
                    })}
                  />
                </GridItem>
              )
            })}
          </Grid>
        </DrawerBody>
        <ThemeExportDrawerFooter baseTheme={baseTheme} value={value} selectAll={selectAll} />
      </DrawerContent>
    </Drawer>
  )
}
