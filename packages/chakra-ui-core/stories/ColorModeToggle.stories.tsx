/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Meta } from "@storybook/react";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import { ThemeEditorProvider } from "../src";
import ColorModeToggle from "../src/components/base/ColorModeToggle";
import { theme } from "@hypertheme-editor/chakra-ui-theme";

export default {
  title: "HyperThemeEditor/chakra-ui-core/ColorModeToggle",
  component: ColorModeToggle,
  argTypes: {},
} as Meta<typeof ColorModeToggle>;

export const Sizes = (args) => {
  return (
    <ThemeEditorProvider>
      <ChakraProvider theme={theme}>
        <Stack>
          <ColorModeToggle size="sm" colorScheme="primary" />
          <ColorModeToggle size="md" />
          <ColorModeToggle size="lg" />
        </Stack>
      </ChakraProvider>
    </ThemeEditorProvider>
  );
};

export const ShowLabel = (args) => {
  return (
    <ThemeEditorProvider>
      <ChakraProvider theme={theme}>
        <Stack>
          <ColorModeToggle size="lg" showLabel />
        </Stack>
      </ChakraProvider>
    </ThemeEditorProvider>
  );
};
