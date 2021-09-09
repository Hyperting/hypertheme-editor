/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback } from 'react'
import { Button } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { setThemeTokens, themeEditorState } from '../src'

export const CustomResetThemeButton = () => {
  const [themeState, setThemeState] = useRecoilState(themeEditorState)

  const handleClick = useCallback(() => {
    // reset the theme
    setThemeState({
      ...themeState,
      undoable: [],
      undone: [],
      currentTheme: themeState.initialTheme,
    })
    setThemeTokens(themeState.initialTheme as any)
  }, [themeState, setThemeState])

  return <Button onClick={handleClick}>Reset Theme</Button>
}
