/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Button } from '@chakra-ui/react'
import { CgColorPicker, CgEditShadows, CgSpaceBetween } from 'react-icons/cg'
import { ImFontSize } from 'react-icons/im'
import { BiText } from 'react-icons/bi'
import { MdRoundedCorner } from 'react-icons/md'
import ColorModeToggle from '../src/components/base/ColorModeToggle'
import {
  ThemeEditorButton,
  ThemeEditorProvider,
  ThemeEditorRootPanel,
  ThemeEditorDrawer,
  ThemeEditor,
} from '../src'

export default {
  title: 'ChakraUI/ThemeEditor',
  component: ThemeEditor,
  argTypes: {},
} as ComponentMeta<typeof ThemeEditor>

export const FreeVersionWithRootPanel = (args) => (
  <ThemeEditorProvider>
    <Button colorScheme="blue">Ciao</Button>
    <ThemeEditor {...args}>
      <ThemeEditorButton />
      <ThemeEditorDrawer>
        {/* <ThemeEditorRootPanel icon={CgColorPicker} title="Colors">
          <ThemeEditorColors />
        </ThemeEditorRootPanel>
        <ThemeEditorRootPanel icon={ImFontSize} title="Font Sizes">
          <ThemeEditorFontSizes />
        </ThemeEditorRootPanel> */}
      </ThemeEditorDrawer>
    </ThemeEditor>
  </ThemeEditorProvider>
)

export const FreeVersionWithoutRootPanel = (args) => (
  <ThemeEditorProvider>
    <Button colorScheme="blue">Ciao</Button>
    <ThemeEditor {...args}>
      <ThemeEditorButton />
      <ThemeEditorDrawer>
        {/* <ThemeEditorColors icon={CgColorPicker} title="Colors" />
        <ThemeEditorFontSizes icon={ImFontSize} title="Font Sizes" /> */}
      </ThemeEditorDrawer>
    </ThemeEditor>
  </ThemeEditorProvider>
)

export const ProVersion = (args) => (
  <ThemeEditorProvider>
    <Button colorScheme="blue" letterSpacing="wider">
      Ciao
    </Button>

    <ThemeEditor {...args}>
      <ThemeEditorButton />
      <ThemeEditorButton label="Try it" size="sm" />
      <ThemeEditorDrawer hideUpgradeToPro hideCredits>
        {/* <ThemeEditorRootPanel icon={CgColorPicker} title="Colors">
          <ThemeEditorColors />
        </ThemeEditorRootPanel>

        <ThemeEditorRootPanel icon={BiText} title="Typography">
          <ThemeEditorTypography />
        </ThemeEditorRootPanel>

        <ThemeEditorRootPanel icon={CgEditShadows} title="Shadows">
          <ThemeEditorShadows />
        </ThemeEditorRootPanel>

        <ThemeEditorRootPanel icon={MdRoundedCorner} title="Radii">
          <ThemeEditorRadii />
        </ThemeEditorRootPanel>

        <ThemeEditorRootPanel icon={CgSpaceBetween} title="Space">
          <ThemeEditorSpacing />
        </ThemeEditorRootPanel> */}
      </ThemeEditorDrawer>
    </ThemeEditor>
    <ColorModeToggle />
  </ThemeEditorProvider>
)
