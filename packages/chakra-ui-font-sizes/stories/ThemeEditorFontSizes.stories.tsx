/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Meta } from "@storybook/react";
import { Button } from "@chakra-ui/react";
import { CgColorPicker } from "react-icons/cg";
import {
  ThemeEditorButton,
  ThemeEditorProvider,
  ThemeEditorRootPanel,
  ThemeEditorDrawer,
  ThemeEditor,
} from "@hypertheme-editor/chakra-ui-core";
import { ThemeEditorFontSizes } from "../src";

export default {
  title: "HyperThemeEditor/chakra-ui-font-sizes/Font Sizes",
  component: ThemeEditor,
  argTypes: {},
} as Meta<typeof ThemeEditor>;

export const ThemeEditorColorsWithRootPanel = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor {...args}>
      <Button colorScheme="blue">Button</Button>
      <ThemeEditorButton />
      <ThemeEditorDrawer>
        <ThemeEditorRootPanel icon={CgColorPicker} title="Font Sizes">
          <ThemeEditorFontSizes />
        </ThemeEditorRootPanel>
      </ThemeEditorDrawer>
    </ThemeEditor>
  </ThemeEditorProvider>
);

export const ThemeEditorColorsWithoutRootPanel = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor {...args}>
      <Button colorScheme="blue">Button</Button>
      <ThemeEditorButton />
      <ThemeEditorDrawer>
        <ThemeEditorFontSizes icon={CgColorPicker} title="Font Sizes" />
      </ThemeEditorDrawer>
    </ThemeEditor>
  </ThemeEditorProvider>
);
