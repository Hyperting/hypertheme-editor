/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Meta } from "@storybook/react";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import { ThemeEditorProvider, ThemeIcon } from "../src";
import { theme as defaultTheme } from "@hypertheme-editor/chakra-ui-theme";

export default {
  title: "HyperThemeEditor/chakra-ui-core/ThemeIcon",
  component: ThemeIcon,
  argTypes: {},
} as Meta<typeof ThemeIcon>;

export const Basic = (args) => {
  return (
    <ThemeEditorProvider>
      <ChakraProvider>
        <ThemeIcon />
      </ChakraProvider>
    </ThemeEditorProvider>
  );
};

export const Sizes = (args) => {
  return (
    <ThemeEditorProvider>
      <ChakraProvider>
        <Stack>
          <ThemeIcon size="xs" />
          <ThemeIcon size="sm" />
          <ThemeIcon size="md" />
          <ThemeIcon size="lg" />
        </Stack>
      </ChakraProvider>
    </ThemeEditorProvider>
  );
};

export const CustomColors = (args) => {
  return (
    <ThemeEditorProvider>
      <ChakraProvider>
        <ThemeIcon
          colors={[
            defaultTheme.colors.red,
            defaultTheme.colors.yellow,
            defaultTheme.colors.orange,
            defaultTheme.colors.green,
          ]}
        />
      </ChakraProvider>
    </ThemeEditorProvider>
  );
};
