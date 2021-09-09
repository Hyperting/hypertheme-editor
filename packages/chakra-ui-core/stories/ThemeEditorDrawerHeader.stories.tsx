/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import {
  ThemeEditorButton,
  ThemeEditorProvider,
  ThemeEditorDrawer,
  ThemeEditor,
  ThemeEditorDrawerHeader,
} from '../src'

export default {
  title: 'HyperThemeEditor/ThemeEditorDrawerHeader',
  component: ThemeEditorDrawerHeader,
  argTypes: {},
} as ComponentMeta<typeof ThemeEditorDrawerHeader>

export const DefaultHeader = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor>
      <ThemeEditorButton />
      <ThemeEditorDrawer headerComponent={<ThemeEditorDrawerHeader {...args} />} />
    </ThemeEditor>
  </ThemeEditorProvider>
)
