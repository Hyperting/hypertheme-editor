/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Meta } from '@storybook/react'
import {
  ThemeEditorButton,
  ThemeEditorProvider,
  ThemeEditorDrawer,
  ThemeEditor,
  ThemeEditorDrawerHeader,
} from '../src'

export default {
  title: 'HyperThemeEditor/chakra-ui-core/ThemeEditorDrawerHeader',
  component: ThemeEditorDrawerHeader,
  argTypes: {},
} as Meta<typeof ThemeEditorDrawerHeader>

export const DefaultHeader = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor>
      <ThemeEditorButton />
      <ThemeEditorDrawer headerComponent={<ThemeEditorDrawerHeader {...args} />} />
    </ThemeEditor>
  </ThemeEditorProvider>
)
