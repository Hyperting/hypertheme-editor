/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Stack } from '@chakra-ui/react'
import { defaultTheme, ThemeEditorProvider, ThemeIcon } from '../src'

export default {
  title: 'HyperThemeEditor/chakra-ui-core/ThemeIcon',
  component: ThemeIcon,
  argTypes: {},
} as ComponentMeta<typeof ThemeIcon>

export const Basic = (args) => {
  return (
    <ThemeEditorProvider>
      <ThemeIcon />
    </ThemeEditorProvider>
  )
}

export const Sizes = (args) => {
  return (
    <ThemeEditorProvider>
      <Stack>
        <ThemeIcon size="xs" />
        <ThemeIcon size="sm" />
        <ThemeIcon size="md" />
        <ThemeIcon size="lg" />
      </Stack>
    </ThemeEditorProvider>
  )
}

export const CustomColors = (args) => {
  return (
    <ThemeEditorProvider>
      <ThemeIcon
        colors={[
          defaultTheme.colors.red,
          defaultTheme.colors.yellow,
          defaultTheme.colors.orange,
          defaultTheme.colors.green,
        ]}
      />
    </ThemeEditorProvider>
  )
}
