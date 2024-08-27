import React, { FC } from 'react'
import {
  ThemeEditor,
  ThemeEditorButton,
  ThemeEditorButtonProps,
  ThemeEditorDrawer,
} from '@hypertheme-editor/chakra-ui-core'
import { ThemeEditorColors } from '@hypertheme-editor/chakra-ui-colors'
import { ThemeEditorFontSizes } from '@hypertheme-editor/chakra-ui-font-sizes'
import { CgColorPicker } from 'react-icons/cg'
import { ImFontSize } from 'react-icons/im'

export type HyperThemeEditorProps = ThemeEditorButtonProps

export const HyperThemeEditor: FC<HyperThemeEditorProps> = (props) => {
  return (
    <ThemeEditor>
      <ThemeEditorButton {...props} />
      <ThemeEditorDrawer>
        <ThemeEditorColors icon={CgColorPicker} title="Colors" />
        <ThemeEditorFontSizes icon={ImFontSize} title="Font Sizes" />
      </ThemeEditorDrawer>
    </ThemeEditor>
  )
}
