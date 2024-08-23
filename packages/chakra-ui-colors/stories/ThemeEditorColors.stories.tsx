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
import { ThemeEditorColors } from "../src";

export default {
  title: "HyperThemeEditor/chakra-ui-colors/Colors Panel",
  component: ThemeEditor,
  argTypes: {},
} as Meta<typeof ThemeEditor>;

export const ThemeEditorColorsWithRootPanel = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor {...args}>
      <Button colorScheme="blue">Button</Button>
      <ThemeEditorButton />
      <ThemeEditorDrawer>
        <ThemeEditorRootPanel icon={CgColorPicker} title="Colors">
          <ThemeEditorColors />
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
        <ThemeEditorColors icon={CgColorPicker} title="Colors" />
      </ThemeEditorDrawer>
    </ThemeEditor>
  </ThemeEditorProvider>
);
