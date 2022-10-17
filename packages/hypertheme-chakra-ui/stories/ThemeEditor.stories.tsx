/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { Button } from '@chakra-ui/react'
import { CgColorPicker, CgEditShadows, CgSpaceBetween } from 'react-icons/cg'
import { ImFontSize } from 'react-icons/im'

import {
    ThemeEditorButton,
    ThemeEditorProvider,
    ThemeEditorRootPanel,
    ThemeEditorDrawer,
    ThemeEditor,
} from
    '@hypertheme-editor/chakra-ui-core'
import { ThemeEditorColors } from '@hypertheme-editor/chakra-ui-colors'
import { ThemeEditorFontSizes } from '@hypertheme-editor/chakra-ui-font-sizes'
import {
    HyperThemeEditor,
    //     ThemeEditorButton,
    //     ThemeEditorProvider,
    //     ThemeEditorRootPanel,
    //     ThemeEditorDrawer,
    //     ThemeEditor,
} from '../src'

export default {
    title: 'HyperThemeEditor/hypertheme-chakra-ui/ThemeEditor Community',
    component: ThemeEditor,
    argTypes: {},
} as ComponentMeta<typeof ThemeEditor>

export const DefaultEditor = (args) => (
    <ThemeEditorProvider>
        <Button colorScheme="blue">Button</Button>
        <HyperThemeEditor {...args} />
    </ThemeEditorProvider>
)

export const DefaultEditorWithHiddenCredits = (args) => (
    <ThemeEditorProvider>
        <Button colorScheme="blue">Button</Button>
        <HyperThemeEditor {...args} />
    </ThemeEditorProvider>
)

export const WithRootPanel = (args: any) => (
    <ThemeEditorProvider>
        <Button colorScheme="blue">Button</Button>
        <ThemeEditor {...args}>
            <ThemeEditorButton />
            <ThemeEditorDrawer>
                <ThemeEditorRootPanel icon={CgColorPicker} title="Colors" subtitle='Change colors, create new one, generate palette..'>
                    <ThemeEditorColors />
                </ThemeEditorRootPanel>
                <ThemeEditorRootPanel icon={ImFontSize} title="Font Sizes">
                    <ThemeEditorFontSizes />
                </ThemeEditorRootPanel>
            </ThemeEditorDrawer>
        </ThemeEditor>
    </ThemeEditorProvider>
)

export const WithoutRootPanel = (args: any) => (
    <ThemeEditorProvider>
        <Button colorScheme="blue">Button</Button>
        <ThemeEditor {...args}>
            <ThemeEditorButton />
            <ThemeEditorDrawer>
                <ThemeEditorColors icon={CgColorPicker} title="Colors" subtitle='Change colors, create new one, generate palette..' />
                <ThemeEditorFontSizes icon={ImFontSize} title="Font Sizes" />
            </ThemeEditorDrawer>
        </ThemeEditor>
    </ThemeEditorProvider>
)
