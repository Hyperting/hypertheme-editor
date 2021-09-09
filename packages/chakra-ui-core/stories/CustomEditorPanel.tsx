/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback, useEffect, useState } from 'react'
import { HStack, Input } from '@chakra-ui/react'
import { colord } from 'colord'
import { useDebouncyEffect } from 'use-debouncy'
import { useThemeEditor } from '../src'
import { ThemeColorBox } from './ThemeColorBox'

export const CustomEditorPanel = () => {
  const { theme, setTheme } = useThemeEditor()
  const [inputValue, setInputValue] = useState<string>(theme.colors?.blue[500] || '')

  const handleOnChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    setInputValue(event.target.value)
  }, [])

  // update this value if another panel change this value
  useEffect(() => {
    if (theme.colors?.blue[500] !== inputValue) {
      setInputValue(theme.colors?.blue[500])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme.colors?.blue[500]])

  useDebouncyEffect(
    () => {
      if (colord(inputValue).isValid() && inputValue !== theme.colors?.blue[500]) {
        setTheme({
          ...theme,
          colors: {
            ...theme.colors,
            blue: {
              ...theme.colors.blue,
              500: inputValue,
            },
          },
        })
      }
    },
    500,
    [inputValue]
  )

  return (
    <HStack>
      <ThemeColorBox token="blue" paletteIndex={500} />
      <Input onChange={handleOnChange} value={inputValue} />
    </HStack>
  )
}
