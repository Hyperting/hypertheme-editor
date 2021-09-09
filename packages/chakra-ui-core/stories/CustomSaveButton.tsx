import React from 'react'
import { Button } from '@chakra-ui/react'
import { useThemeEditor } from '../src'

export const CustomSaveButton = () => {
  const { theme } = useThemeEditor()

  const handleSave = () => {
    // save the current theme
    console.log('saved theme:', theme)
    alert(JSON.stringify(theme, null, 2))
  }

  return <Button onClick={handleSave}>save</Button>
}
