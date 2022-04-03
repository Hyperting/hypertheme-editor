/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Button, useDisclosure } from '@chakra-ui/react'
import { ThemeEditorProvider, ThemeIcon, ThemeResetPopup } from '../src'

export default {
  title: 'HyperThemeEditor/ThemeResetPopup',
  component: ThemeResetPopup,
  argTypes: {},
} as ComponentMeta<typeof ThemeResetPopup>

export const Basic = (args) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ThemeEditorProvider>
      <Button onClick={onOpen}>Open theme reset popup</Button>
      {/* <ThemeResetPopup isOpen={isOpen} onClose={onClose} /> */}
    </ThemeEditorProvider>
  )
}
