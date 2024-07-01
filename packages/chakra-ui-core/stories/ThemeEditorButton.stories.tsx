/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { VStack } from '@chakra-ui/react'
import { ThemeEditorButton, ThemeEditorProvider } from '../src'

export default {
  title: 'HyperThemeEditor/chakra-ui-core/ThemeEditorButton',
  component: ThemeEditorButton,
  argTypes: {},
} as ComponentMeta<typeof ThemeEditorButton>

export const AllSizes = (args) => (
  <ThemeEditorProvider>
    <VStack>
      <ThemeEditorButton size="lg" />
      <ThemeEditorButton size="md" />
      <ThemeEditorButton size="sm" />
      <ThemeEditorButton size="xs" />
    </VStack>
  </ThemeEditorProvider>
)

export const AllSizesWithLabel = (args) => (
  <ThemeEditorProvider>
    <VStack>
      <ThemeEditorButton size="lg" label="Try it" />
      <ThemeEditorButton size="md" label="Try it" />
      <ThemeEditorButton size="sm" label="Try it" />
      <ThemeEditorButton size="xs" label="Try it" />
    </VStack>
  </ThemeEditorProvider>
)

export const LgSize = (args) => (
  <ThemeEditorProvider>
    <VStack>
      <ThemeEditorButton size="lg" />
      <ThemeEditorButton size="lg" label="Test" />
    </VStack>
  </ThemeEditorProvider>
)

export const MdSize = (args) => (
  <ThemeEditorProvider>
    <VStack>
      <ThemeEditorButton size="md" />
      <ThemeEditorButton size="md" label="Test" />
    </VStack>
  </ThemeEditorProvider>
)

export const SmSize = (args) => (
  <ThemeEditorProvider>
    <VStack>
      <ThemeEditorButton size="sm" />
      <ThemeEditorButton size="sm" label="Test" />
    </VStack>
  </ThemeEditorProvider>
)

export const XsSize = (args) => (
  <ThemeEditorProvider>
    <VStack>
      <ThemeEditorButton size="xs" />
      <ThemeEditorButton size="xs" label="Test" />
    </VStack>
  </ThemeEditorProvider>
)
