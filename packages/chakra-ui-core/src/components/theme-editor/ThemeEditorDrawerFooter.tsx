import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Flex,
  Heading,
  useColorModeValue,
  useDisclosure,
  Text,
  useColorMode,
  Box,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import { ThemeDownloadButton } from '.'
import { ThemeIcon } from '../base'
import { ThemeEditorDrawerHeader, ThemeEditorDrawerHeaderProps } from './ThemeEditorDrawerHeader'

export type ThemeEditorDrawerFooterProps = {
  onClose?: () => void
  isMobile?: boolean
  actionButton?: React.ReactNode
  headerComponent?: React.ReactElement<
    ThemeEditorDrawerHeaderProps,
    React.JSXElementConstructor<ThemeEditorDrawerHeaderProps>
  >
}
export const ThemeEditorDrawerFooter: FC<ThemeEditorDrawerFooterProps> = ({
  isMobile,
  actionButton = <ThemeDownloadButton borderRadius="8px" w={{ base: '100%', md: 'initial' }} />,
  headerComponent = <ThemeEditorDrawerHeader />,
}) => {
  // const bgColor = useColorModeValue('whiteAlpha.600', 'gray.900')
  const { colorMode } = useColorMode()
  const shadow = useColorModeValue('surface', 'surfaceDark')
  const bgColor = useColorModeValue('white', 'gray.900')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex position="fixed" justifyContent="center" bottom={6} w="100%" px={8}>
      <Button
        onClick={onOpen}
        size="md"
        colorScheme="primary"
        variant="solid"
        borderRadius="3xl"
        w="full"
        px={8}
        py={8}
      >
        Export theme
      </Button>
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
          <DrawerBody bgColor="rgba(0,0,0,0)"></DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

/* 
<DrawerFooter
      backgroundColor="none"
      d={isMobile ? 'none' : 'flex'}
      px={{ base: 3, lg: 6 }}
      py={{ base: 2, lg: 3 }}
      justifyContent="center"
    >
       <Button
        size="md"
        onClick={onClose}
        variant="ghost"
        mr="1rem"
        borderRadius="8px"
        d={{ base: 'none', md: 'flex' }}
      >
        Cancel
      </Button>
      {actionButton}
    </DrawerFooter> */
