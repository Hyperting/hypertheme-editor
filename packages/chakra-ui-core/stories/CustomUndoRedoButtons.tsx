import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useThemeEditor } from '../src'

export const CustomUndoRedoButtons = () => {
  const { canUndo, undo, canRedo, redo } = useThemeEditor()

  return (
    <ButtonGroup variant="outline" spacing="6">
      <Button disabled={!canUndo} onClick={undo}>
        Undo
      </Button>
      <Button disabled={!canRedo} onClick={redo}>
        Redo
      </Button>
    </ButtonGroup>
  )
}
