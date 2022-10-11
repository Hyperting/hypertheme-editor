import { Button, Flex, Icon, useDisclosure } from '@chakra-ui/react'
import React, { FC } from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { ThemeDownloadButton } from '.'
import { ThemeExportDrawer } from './ThemeExportDrawer'

export type ThemeEditorDrawerFooterProps = {
  // onClose?: () => void
  isMobile?: boolean
  // actionButton?: React.ReactNode
}
export const ThemeEditorDrawerFooter: FC<ThemeEditorDrawerFooterProps> = ({
  isMobile,
  // actionButton = <ThemeDownloadButton borderRadius="8px" w={{ base: '100%', md: 'initial' }} />,
}) => {
  // const bgColor = useColorModeValue('whiteAlpha.600', 'gray.900')
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      display={isMobile ? 'none' : 'flex'}
      position="fixed"
      justifyContent="center"
      bottom={6}
      w="100%"
      px={8}
    >
      <Button
        onClick={onOpen}
        size="md"
        colorScheme="primary"
        variant="solid"
        borderRadius="3xl"
        w="fit-content"
        leftIcon={<Icon as={AiOutlineArrowDown} pos="relative" bottom={0.5} />}
        px={10}
        py={8}
      >
        Export theme
      </Button>
      <ThemeExportDrawer isOpen={isOpen} onClose={onClose} />
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
