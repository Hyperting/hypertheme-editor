import React, { FC, useMemo, useRef } from 'react'
import {
  Icon,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerProps,
  useColorModeValue,
  DrawerFooter,
  Box,
  Text,
} from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import ThemesList from '../base/ThemesList'
import { ThemeSwitchDrawerHeader } from './ThemeSwitchDrawerHeader'

export type ThemeSwitchDrawerProps = {} & DrawerProps

const ThemeSwitchDrawer: FC<any> = (props) => {
  const { onClose, ...rest } = props
  const btnRef = useRef()
  const closeBtnRef = useRef()
  const bgColor = useColorModeValue('white', 'gray.900')

  const themes = useMemo(() => {
    return [
      { title: 'Theme 1', value: 'theme1', updated: new Date(), id: '1' },
      { title: 'Theme 2', value: 'theme2', updated: new Date(), id: '2' },
      { title: 'Theme 3', value: 'theme3', updated: new Date(), id: '3' },
    ]
  }, [])

  return (
    <Drawer
      placement="right"
      finalFocusRef={btnRef}
      initialFocusRef={closeBtnRef}
      size="md"
      blockScrollOnMount={false}
      onClose={onClose}
      {...rest}
    >
      <DrawerContent bgColor={bgColor} shadow="md" fontFamily="Sora, sans-serif">
        <ThemeSwitchDrawerHeader onClose={onClose} />
        <DrawerBody pos="relative" px={{ base: 3, lg: 6 }} py={3}>
          <ThemesList themes={themes} />
        </DrawerBody>
        <DrawerFooter textAlign="left" boxShadow="surface" backgroundColor={bgColor}>
          <Box>
            <Button size="lg" onClick={onClose} variant="outline" mr="1rem">
              Cancel
            </Button>
            <Button type="submit" size="lg" variant="solid" colorScheme="secondary">
              New Theme <Icon as={FaPlus} ml="0.5rem" />
            </Button>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default ThemeSwitchDrawer
