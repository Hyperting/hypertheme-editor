/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Meta } from '@storybook/react'

import { Box } from '@chakra-ui/react'
import { CgColorPicker } from 'react-icons/cg'
import ColorModeToggle from '../src/components/base/ColorModeToggle'
import {
  ThemeEditorButton,
  ThemeEditorProvider,
  ThemeEditorRootPanel,
  ThemeEditorDrawer,
  ThemeEditor,
} from '../src'

export default {
  title: 'HyperThemeEditor/chakra-ui-core/ThemeEditorDrawer',
  component: ThemeEditorDrawer,
  argTypes: {},
} as Meta<typeof ThemeEditorDrawer>

export const Default = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor {...args}>
      <ThemeEditorButton />
      <ThemeEditorDrawer>
        {/* <ThemeEditorColors icon={CgColorPicker} title="Colors" /> */}
      </ThemeEditorDrawer>
    </ThemeEditor>
  </ThemeEditorProvider>
)

export const DefaultWithRootPanel = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor {...args}>
      <ThemeEditorButton />
      <ThemeEditorDrawer>
        <ThemeEditorRootPanel icon={CgColorPicker} title="Colors">
          {/* <ThemeEditorColors /> */}
        </ThemeEditorRootPanel>
      </ThemeEditorDrawer>
    </ThemeEditor>
  </ThemeEditorProvider>
)

export const WithAllEditorsWithRootPanel = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor>
      <ThemeEditorButton />
      <ThemeEditorButton label="Try it" size="sm" />
      <ThemeEditorDrawer {...args}>
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

export const WithAllEditorsWithoutRootPanel = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor>
      <ThemeEditorButton />
      <ThemeEditorButton label="Try it" size="sm" />
      <ThemeEditorDrawer {...args}>
        {/* <ThemeEditorColors icon={CgColorPicker} title="Colors" />
        <ThemeEditorTypography icon={BiText} title="Typography" />
        <ThemeEditorShadows icon={CgEditShadows} title="Shadows" />
        <ThemeEditorRadii icon={MdRoundedCorner} title="Radii" />
        <ThemeEditorSpacing icon={CgSpaceBetween} title="Space" /> */}
      </ThemeEditorDrawer>
    </ThemeEditor>
    <ColorModeToggle />
  </ThemeEditorProvider>
)

export const WithCustomHeader = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor {...args}>
      <ThemeEditorButton />
      <ThemeEditorDrawer
        headerComponent={
          <Box bgColor="red.500" color="white">
            CUSTOM HEADER
          </Box>
        }
      >
        <ThemeEditorRootPanel icon={CgColorPicker} title="Colors">
          {/* <ThemeEditorColors /> */}
        </ThemeEditorRootPanel>
      </ThemeEditorDrawer>
    </ThemeEditor>
  </ThemeEditorProvider>
)

export const WithCustomFooter = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor {...args}>
      <ThemeEditorButton />
      <ThemeEditorDrawer
        footerComponent={
          <Box bgColor="blue.500" color="white">
            CUSTOM FOOTER
          </Box>
        }
      >
        <ThemeEditorRootPanel icon={CgColorPicker} title="Colors">
          {/* <ThemeEditorColors /> */}
        </ThemeEditorRootPanel>
      </ThemeEditorDrawer>
    </ThemeEditor>
  </ThemeEditorProvider>
)

export const WithCustomPanel = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor {...args}>
      <ThemeEditorButton />
      <ThemeEditorDrawer>
        <ThemeEditorRootPanel icon={CgColorPicker} title="Custom Panel">
          <Box bgColor="green.500" color="white" borderRadius="md">
            CUSTOM PANEL
          </Box>
        </ThemeEditorRootPanel>
      </ThemeEditorDrawer>
    </ThemeEditor>
  </ThemeEditorProvider>
)
