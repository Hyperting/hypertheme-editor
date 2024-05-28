import React, { FC, useCallback, useMemo, useState } from 'react'
import {
  Flex,
  Tag,
  Text,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
  Select,
  Input,
} from '@chakra-ui/react'
import { useDebouncyEffect } from 'use-debouncy'
import { ElementsHighlighter } from '@hypertheme-editor/chakra-ui-core'
import { ThemeEditorFontSizeSlider } from './ThemeEditorFontSizeSlider'

export type ThemeEditorFontSizesItemProps = {
  size: string
  sampleTitle?: string
  value: string
  onChange: (value: { size: string; value: string }) => void
}

const ThemeEditorFontSizesItem: FC<ThemeEditorFontSizesItemProps> = (props) => {
  const { sampleTitle = 'Lorem ipsum dolor sit', size, value, onChange } = props

  const [currentValue, setCurrentValue] = useState<string>(value)

  const cssValue = useMemo(() => {
    if (!window) {
      return (window as any).CSSStyleValue.parse('font-size', '0rem')
    } else if (!currentValue?.length) {
      return (window as any).CSSStyleValue.parse('font-size', '0rem')
    } else {
      return (window as any).CSSStyleValue.parse('font-size', currentValue)
    }
  }, [currentValue])

  const handleInputChange = useCallback(
    (event) => {
      setCurrentValue(`${!event?.target?.value ? 0 : event.target.value}${cssValue?.unit}`)
    },
    [cssValue?.unit, setCurrentValue]
  )

  const handleUnitChange = useCallback<React.ChangeEventHandler<HTMLSelectElement>>(
    (event) => {
      if (!cssValue?.unit) {
        setCurrentValue(`${cssValue?.value || 0}rem`)
      } else {
        if (
          cssValue?.unit === 'px' &&
          (event.target.value === 'em' || event.target.value === 'rem')
        ) {
          setCurrentValue(`${cssValue?.value / 16}${event.target.value}`)
        } else if (
          (cssValue?.unit === 'em' || cssValue?.unit === 'rem') &&
          event.target.value === 'px'
        ) {
          setCurrentValue(`${(cssValue?.value * 16).toFixed(0)}${event.target.value}`)
        } else {
          setCurrentValue(`${cssValue?.value}${event.target.value}`)
        }
      }
    },
    [cssValue?.unit, cssValue?.value]
  )

  useDebouncyEffect(() => onChange({ size, value: cssValue?.value }), 500, [cssValue])

  return (
    <ElementsHighlighter themeKeys={`fontSizes.${size}`} fontSize="1rem">
      <Flex justifyContent="space-between" mt="0.5rem" alignItems="center">
        <Tag alignItems="center" minW="min-content" fontSize="0.75rem" px="0.5rem">
          {size}
        </Tag>
        <ThemeEditorFontSizeSlider cssValue={cssValue} setCurrentValue={setCurrentValue} />
        <Flex alignItems="center">
          <Input
            borderRadius="6px"
            size="sm"
            textAlign="right"
            fontSize="0.875rem"
            w="70px"
            type="number"
            value={cssValue?.value}
            onChange={(e) => handleInputChange(e)}
            onWheel={(e) => e.currentTarget.blur()}
          />
          <Select
            size="sm"
            w="70px"
            ml="0.5rem"
            borderRadius="6px"
            value={cssValue?.unit ? cssValue?.unit : 'rem'}
            onChange={handleUnitChange}
            fontSize="0.875rem"
          >
            <option value="rem">rem</option>
            <option value="em">em</option>
            <option value="px">px</option>
          </Select>
        </Flex>
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
