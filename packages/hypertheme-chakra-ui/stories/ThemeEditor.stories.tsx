/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Button } from '@chakra-ui/react'
import { CgColorPicker, CgEditShadows, CgSpaceBetween } from 'react-icons/cg'
import { ImFontSize } from 'react-icons/im'
import { BiText } from 'react-icons/bi'
import { MdRoundedCorner } from 'react-icons/md'
import {
  ThemeEditorButton,
  ThemeEditorProvider,
  ThemeEditorRootPanel,
  ThemeEditorDrawer,
  ThemeEditor,
} from '@hypertheme-editor/chakra-ui-core'
import { ThemeEditorColors } from '@hypertheme-editor/chakra-ui-colors'
import { ThemeEditorFontSizes } from '@hypertheme-editor/chakra-ui-font-sizes'
import { HyperThemeEditor } from '../src'

export default {
  title: 'HyperThemeEditor/ThemeEditor Community',
  component: ThemeEditor,
  argTypes: {},
} as ComponentMeta<typeof ThemeEditor>

export const DefaultEditor = (args) => (
  <ThemeEditorProvider>
    <Button colorScheme="blue">Ciao</Button>
    <HyperThemeEditor {...args} />
  </ThemeEditorProvider>
)

export const DefaultEditorWithHiddenCredits = (args) => (
  <ThemeEditorProvider>
    <Button colorScheme="blue">Ciao</Button>
    <HyperThemeEditor {...args} />
  </ThemeEditorProvider>
)

export const WithRootPanel = (args) => (
  <ThemeEditorProvider>
    <Button colorScheme="blue">Ciao</Button>
    <ThemeEditor {...args}>
      <ThemeEditorButton />
      <ThemeEditorDrawer>
        <ThemeEditorRootPanel icon={CgColorPicker} title="Colors">
          <ThemeEditorColors />
        </ThemeEditorRootPanel>
        <ThemeEditorRootPanel icon={ImFontSize} title="Font Sizes">
          <ThemeEditorFontSizes />
        </ThemeEditorRootPanel>
      </ThemeEditorDrawer>
    </ThemeEditor>
  </ThemeEditorProvider>
)

export const WithoutRootPanel = (args) => (
  <ThemeEditorProvider>
    <Button colorScheme="blue">Ciao</Button>
    <ThemeEditor {...args}>
      <ThemeEditorButton />
      <ThemeEditorDrawer>
        <ThemeEditorColors icon={CgColorPicker} title="Colors" />
        <ThemeEditorFontSizes icon={ImFontSize} title="Font Sizes" />
      </ThemeEditorDrawer>
    </ThemeEditor>
  </ThemeEditorProvider>
)
