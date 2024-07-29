/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Meta } from "@storybook/react";
import { ChakraProvider, VStack } from "@chakra-ui/react";
import { ThemeEditorButton, ThemeEditorProvider } from "../src";

export default {
  title: "HyperThemeEditor/chakra-ui-core/ThemeEditorButton",
  component: ThemeEditorButton,
  argTypes: {},
} as Meta<typeof ThemeEditorButton>;

export const AllSizes = (args) => (
  <ThemeEditorProvider>
    <ChakraProvider>
      <VStack>
        <ThemeEditorButton size="lg" />
        <ThemeEditorButton size="md" />
        <ThemeEditorButton size="sm" />
        <ThemeEditorButton size="xs" />
      </VStack>
    </ChakraProvider>
  </ThemeEditorProvider>
);

export const AllSizesWithLabel = (args) => (
  <ThemeEditorProvider>
    <ChakraProvider>
      <VStack>
        <ThemeEditorButton size="lg" label="Try it" />
        <ThemeEditorButton size="md" label="Try it" />
        <ThemeEditorButton size="sm" label="Try it" />
        <ThemeEditorButton size="xs" label="Try it" />
      </VStack>
    </ChakraProvider>
  </ThemeEditorProvider>
);

export const LgSize = (args) => (
  <ThemeEditorProvider>
    <ChakraProvider>
      <VStack>
        <ThemeEditorButton size="lg" />
        <ThemeEditorButton size="lg" label="Test" />
      </VStack>
    </ChakraProvider>
  </ThemeEditorProvider>
);

export const MdSize = (args) => (
  <ThemeEditorProvider>
    <ChakraProvider>
      <VStack>
        <ThemeEditorButton size="md" />
        <ThemeEditorButton size="md" label="Test" />
      </VStack>
    </ChakraProvider>
  </ThemeEditorProvider>
);

export const SmSize = (args) => (
  <ThemeEditorProvider>
    <ChakraProvider>
      <VStack>
        <ThemeEditorButton size="sm" />
        <ThemeEditorButton size="sm" label="Test" />
      </VStack>
    </ChakraProvider>
  </ThemeEditorProvider>
);

export const XsSize = (args) => (
  <ThemeEditorProvider>
    <ChakraProvider>
      <VStack>
        <ThemeEditorButton size="xs" />
        <ThemeEditorButton size="xs" label="Test" />
      </VStack>
    </ChakraProvider>
  </ThemeEditorProvider>
);
