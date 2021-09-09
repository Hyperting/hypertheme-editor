import React, { FC } from 'react'
import { ThemeEditor, ThemeEditorButton, ThemeEditorDrawer, ThemeEditorProps } from '@hypertheme-editor/chakra-ui-core'
import { ThemeEditorColors } from '@hypertheme-editor/chakra-ui-colors'
import { ThemeEditorFontSizes } from '@hypertheme-editor/chakra-ui-font-sizes'
import { CgColorPicker } from 'react-icons/cg'
import { ImFontSize } from 'react-icons/im'

type Props = ThemeEditorProps

export const DefaultThemeEditor: FC<Props> = () => {
  return (
    <ThemeEditor>
      <ThemeEditorButton />
      <ThemeEditorDrawer>
        <ThemeEditorColors icon={CgColorPicker} title="Colors" />
        <ThemeEditorFontSizes icon={ImFontSize} title="Font Sizes" />
      </ThemeEditorDrawer>
    </ThemeEditor>
  )
}
