import { DrawerFooter, Button, useColorModeValue } from '@chakra-ui/react'
import React, { FC } from 'react'
import { ThemeDownloadButton } from '.'

export type ThemeEditorDrawerFooterProps = {
  onClose?: () => void
  isMobile?: boolean
  actionButton?: React.ReactNode
}
export const ThemeEditorDrawerFooter: FC<ThemeEditorDrawerFooterProps> = ({
  onClose,
  isMobile,
  actionButton = <ThemeDownloadButton borderRadius="8px" w={{ base: '100%', md: 'initial' }} />,
}) => {
  const bgColor = useColorModeValue('whiteAlpha.600', 'rgba(23,25,35,0.8)')

  return (
    <DrawerFooter
      textAlign="left"
      boxShadow="xl"
      backgroundColor={bgColor}
      d={isMobile ? 'none' : 'flex'}
      px={{ base: 3, lg: 6 }}
      py={{ base: 2, lg: 3 }}
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
    </DrawerFooter>
  )
}
