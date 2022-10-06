import { atom, DefaultValue, useRecoilState } from 'recoil'
import { Theme as ChakraTheme } from '@chakra-ui/react'
import { useCallback } from 'react'
import produce, { applyPatches, enablePatches, nothing, Patch } from 'immer'
import { setThemeTokens } from '../utils/updateThemeTokens'
import { THEME_STATE_LOCAL_STORAGE_KEY } from '../constants'

enablePatches()

export type Theme = Partial<Omit<ChakraTheme, 'colors'>> & {
  colors?: Record<string, Record<number, string>> /* & Theme['colors'] */
}

/**
 * Contains all the information necessary to manage the dynamic theme
 * @param currentTheme - The current theme actually visible
 * @param initialTheme - The initial theme filled at startup, used for reset
 * @param undoable - the list of patches containing past changes history
 * @param undone - the list of patches containing redos history
 */
export interface ThemeEditorState {
  currentTheme: Theme | undefined
  initialTheme: Theme | undefined
  undoable: { patches: Patch[]; inversePatches: Patch[] }[]
  undone: { patches: Patch[]; inversePatches: Patch[] }[]
}

/**
 * Recoil theme editor state atom
 */
export const themeEditorState = atom<ThemeEditorState>({
  key: 'themeState',
  default: { initialTheme: undefined, currentTheme: undefined, undoable: [], undone: [] },
  effects_UNSTABLE: [
    ({ onSet, setSelf }) => {
      console.log('onSet', onSet, 'setSelf', setSelf)
      onSet((newValue) => {
        console.log('newValue', newValue)
        if (newValue instanceof DefaultValue) {
          //
          console.log('newValue in if', newValue)
        } else {
          console.log('else')
          localStorage.setItem(
            THEME_STATE_LOCAL_STORAGE_KEY,
            JSON.stringify({
              undoable: newValue.undoable,
              undone: newValue.undone,
              currentTheme: newValue.currentTheme,
            })
          )
        }
      })
    },
    ({ onSet }) => {
      onSet((newValue) => {
        if (!(newValue instanceof DefaultValue)) {
          setThemeTokens(newValue.currentTheme as any)
        }
      })
    },
  ],
})

export interface useThemeEditorReturn {
  /**
   * The returned object from useThemeEditor
   * @param theme - the current theme
   * @param initialTheme - the initial theme provided from Chakra
   * @param setTheme - set a new current theme: {@link useThemeEditorReturn.setTheme}
   * @param canUndo - a boolean indicating if there's any past history
   * @param undo - this function set the current theme to the last change
   * @param canRedo - this function set the current theme to the next change
   * @param redo - call this function to go back in the history
   */
  theme: Theme | undefined
  initialTheme: Theme | undefined
  /**
   * set the current theme
   * @param theme - the new theme that will be setted
   */
  setTheme: (theme: Theme) => void
  canUndo: boolean
  undo: () => void
  canRedo: boolean
  redo: () => void
}

/**
 * An hook to manage the current ThemeEditorState
 *
 * @returns an object with the curent ThemeEditorState and history actions: {@link useThemeEditorReturn}
 */
export const useThemeEditor = (): useThemeEditorReturn => {
  const [{ currentTheme, undone, undoable, initialTheme }, setThemeState] = useRecoilState(
    themeEditorState
  )

  const setTheme = useCallback(
    (theme: Theme) => {
      let newPatches: Patch[] = []
      let newInversePatches: Patch[] = []

      const newTheme = produce(
        currentTheme,
        (draft) => {
          if (!theme) {
            return nothing
          } else {
            return theme as any
          }
        },
        (patches, inversePatches) => {
          newPatches = patches
          newInversePatches = inversePatches
        }
      )

      const newUndoable = [...undoable]
      if (newUndoable.length >= 10) {
        newUndoable.pop()
      }
      setThemeState({
        initialTheme,
        currentTheme: newTheme,
        undoable: [{ patches: newPatches, inversePatches: newInversePatches }, ...newUndoable],
        undone: [],
      })
    },
    [currentTheme, initialTheme, setThemeState, undoable]
  )

  const undo = useCallback(() => {
    const lastPatches = undoable[0]

    const newUndone = [lastPatches, ...undone]
    const newUndoable = undoable.slice(1)

    const newTheme = applyPatches(currentTheme as any, lastPatches.inversePatches)
    setThemeState({
      initialTheme,
      currentTheme: newTheme,
      undone: newUndone,
      undoable: newUndoable,
    })
  }, [currentTheme, initialTheme, setThemeState, undoable, undone])

  const redo = useCallback(() => {
    const nextPatches = undone[0]

    const newUndoable = [nextPatches, ...undoable]
    const newUndone = undone.slice(1)

    const newTheme = applyPatches(currentTheme as any, nextPatches.patches)

    setThemeState({
      initialTheme,
      currentTheme: newTheme,
      undone: newUndone,
      undoable: newUndoable,
    })
  }, [currentTheme, initialTheme, setThemeState, undoable, undone])

  return {
    initialTheme,
    theme: currentTheme,
    setTheme,
    canUndo: undoable.length > 0,
    undo,
    canRedo: undone.length > 0,
    redo,
  }
}
