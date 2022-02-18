import React, { FC, useEffect, useState } from 'react'
import { ThemeProvider, useDisclosure } from '@chakra-ui/react'
import { ThemeEditorDrawerProps } from './ThemeEditorDrawer'
import { ThemeEditorButtonProps } from './ThemeEditorButton'
import { theme } from '@hypertheme-editor/chakra-ui-theme'

type ThemeEditorChild = React.ReactElement<
  ThemeEditorButtonProps | ThemeEditorDrawerProps,
  React.JSXElementConstructor<ThemeEditorButtonProps | ThemeEditorDrawerProps>
>

export type ThemeEditorProps = {
  children: ThemeEditorChild[] | ThemeEditorChild
  isThemeEditorDrawerOpen?: boolean
}

export const ThemeEditor: FC<ThemeEditorProps> = ({ children, isThemeEditorDrawerOpen }) => {
  const [isOpen, setIsOpen] = useState(isThemeEditorDrawerOpen)
  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  useEffect(() => {
    setIsOpen(isThemeEditorDrawerOpen)
  }, [isThemeEditorDrawerOpen])

  return (
    <ThemeProvider theme={theme}>
      {React.Children.map(React.Children.toArray(children), (child, index) => {
        return React.cloneElement(child as any, {
          isOpen,
          onOpen,
          onClose,
        })
      })}
    </ThemeProvider>
  )
}
