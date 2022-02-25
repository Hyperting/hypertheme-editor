import React, { FC } from 'react'
import { ThemeProvider, useDisclosure, UseDisclosureProps } from '@chakra-ui/react'
import { ThemeEditorDrawerProps } from './ThemeEditorDrawer'
import { ThemeEditorButtonProps } from './ThemeEditorButton'
import { theme } from '@hypertheme-editor/chakra-ui-theme'

type ThemeEditorChild = React.ReactElement<
  ThemeEditorButtonProps | ThemeEditorDrawerProps,
  React.JSXElementConstructor<ThemeEditorButtonProps | ThemeEditorDrawerProps>
>

export type ThemeEditorProps = {
  children: ThemeEditorChild[] | ThemeEditorChild
} & UseDisclosureProps

export const ThemeEditor: FC<ThemeEditorProps> = ({ children, ...disclosureProps }) => {
  const { isOpen, onOpen, onClose } = useDisclosure(disclosureProps)

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
