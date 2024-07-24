/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Meta } from '@storybook/react'
import { Button, useDisclosure } from '@chakra-ui/react'
import { ThemeEditorProvider, ThemeIcon, ThemeResetPopup } from '../src'

export default {
  title: 'HyperThemeEditor/chakra-ui-core/ThemeResetPopup',
  component: ThemeResetPopup,
  argTypes: {},
} as Meta<typeof ThemeResetPopup>

export const Basic = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ThemeEditorProvider>
      <Button onClick={onOpen}>Open theme reset popup</Button>
      {/* <ThemeResetPopup isOpen={isOpen} onClose={onClose} /> */}
    </ThemeEditorProvider>
  )
}
