import {
  Button,
  DrawerFooter,
  Flex,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  Text,
} from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import { ThemeDownloadButton } from './ThemeDownloadButton'

type ThemeExportDrawerFooterProps = {
  baseTheme: any
  value: any
  selectAll: boolean
}

export const ThemeExportDrawerFooter: FC<ThemeExportDrawerFooterProps> = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState('ts')
  const { colorMode } = useColorMode()
  return (
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
                  as={selectedLanguage === 'ts' ? SiTypescript : SiJavascript}
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
        baseTheme={props.baseTheme}
        selectedProperties={props.value as string[] | number[]}
        selectAll={props.selectAll}
        selectedLanguage={selectedLanguage}
      />
    </DrawerFooter>
  )
}
