import React, { FC, useEffect } from 'react'
import { ThemeOverride } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { safeJsonParse } from '../../utils/safeJsonParse'
import { THEME_STATE_LOCAL_STORAGE_KEY } from '../../constants'
import { setThemeTokens } from '../../utils/updateThemeTokens'
import { themeEditorState as hyperkitThemeState } from '../../hooks/useThemeEditor'

type Props = {
  theme: ThemeOverride
}

export const ThemeStateInitializer: FC<Props> = ({ theme }) => {
  const [themeState, setThemeState] = useRecoilState(hyperkitThemeState)

  useEffect(() => {
    if (!themeState.currentTheme && !themeState.initialTheme) {
      const localStorageValue = localStorage.getItem(THEME_STATE_LOCAL_STORAGE_KEY)
      if (localStorageValue) {
        const parsedValue = safeJsonParse(localStorageValue)
        if (!parsedValue.error && parsedValue.value) {
          const currentTheme =
            parsedValue.value.currentTheme && Object.keys(parsedValue.value.currentTheme).length > 0
              ? parsedValue.value.currentTheme
              : (theme as any)
          setThemeState({
            ...(parsedValue.value as any),
            undoable: parsedValue.value.undoable || [],
            undone: parsedValue.value.undone || [],
            initialTheme: theme as any,
            currentTheme,
          })
          setThemeTokens(currentTheme)
          return
        }
      }

      setThemeState({
        ...themeState,
        undoable: themeState.undoable || [],
        undone: themeState.undone || [],
        currentTheme:
          themeState.currentTheme && Object.keys(themeState.currentTheme).length > 0
            ? themeState.currentTheme
            : (theme as any),
        initialTheme: theme as any,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
