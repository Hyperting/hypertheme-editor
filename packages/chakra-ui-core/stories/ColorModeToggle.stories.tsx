/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Stack } from '@chakra-ui/react'
import { ThemeEditorProvider } from '../src'
import ColorModeToggle from '../src/components/base/ColorModeToggle'

export default {
  title: 'HyperThemeEditor/ColorModeToggle',
  component: ColorModeToggle,
  argTypes: {},
} as ComponentMeta<typeof ColorModeToggle>

export const Sizes = (args) => {
  return (
    <ThemeEditorProvider>
      <Stack>
        <ColorModeToggle size="sm" colorScheme="primary" />
        <ColorModeToggle size="md" />
        <ColorModeToggle size="lg" />
      </Stack>
    </ThemeEditorProvider>
  )
}

export const ShowLabel = (args) => {
  return (
    <ThemeEditorProvider>
      <Stack>
        <ColorModeToggle size="lg" showLabel />
      </Stack>
    </ThemeEditorProvider>
  )
}
