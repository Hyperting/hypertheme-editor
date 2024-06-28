import React, { createContext, FC, useMemo, useState } from 'react'
import { Flex, Tag, Text } from '@chakra-ui/react'
import { useDebouncyEffect } from 'use-debouncy'
import { ElementsHighlighter } from '@hypertheme-editor/chakra-ui-core'
import { FontSizeSlider } from './base-components/FontSizeSlider'
import { InputFields } from './base-components/InputFields'

export type ThemeEditorFontSizesItemProps = {
  size: string
  sampleTitle?: string
  value: string
  onChange: (value: { size: string; value: string }) => void
}

export const InputGroupContext = createContext<{
  currentFontValue: any
  setCurrentFontValue: React.Dispatch<React.SetStateAction<any>>
}>({ currentFontValue: '', setCurrentFontValue: () => undefined })

const ThemeEditorFontSizesItem: FC<ThemeEditorFontSizesItemProps> = (props) => {
  const { sampleTitle = 'Lorem ipsum dolor sit', size, value, onChange } = props

  const staticCssValue = useMemo(() => {
    if (!window) {
      return '0rem'
    } else if (!value?.length) {
      return '0rem'
    } else {
      return value
    }
  }, [value])

  const [currentValue, setCurrentValue] = useState<string>(staticCssValue)

  useDebouncyEffect(() => onChange({ size, value: currentValue }), 500, [currentValue])

  return (
    <ElementsHighlighter themeKeys={`fontSizes.${size}`} fontSize="1rem">
      <Flex justifyContent="space-between" mt="0.5rem" alignItems="center">
        <Tag alignItems="center" minW="min-content" fontSize="0.75rem" px="0.5rem">
          {size}
        </Tag>
        <InputGroupContext.Provider
          value={{
            currentFontValue: currentValue,
            setCurrentFontValue: setCurrentValue,
          }}
        >
          <FontSizeSlider />
          <InputFields />
        </InputGroupContext.Provider>
      </Flex>
      <Text
        alignItems="center"
        minW="min-content"
        d="block"
        fontSize={currentValue}
        whiteSpace="nowrap"
      >
        {sampleTitle}
      </Text>
    </ElementsHighlighter>
  )
}

export default ThemeEditorFontSizesItem
