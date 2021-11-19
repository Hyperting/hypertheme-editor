import React, { FC, useCallback, useMemo, useState, useEffect } from 'react'
import {
  Box,
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
    return window && currentValue
      ? (window as any).CSSStyleValue.parse('font-size', currentValue)
      : undefined
  }, [currentValue])

  const handleSliderChange = useCallback(
    (newValue: number) => {
      setCurrentValue(`${newValue}${cssValue.unit}`)
    },
    [cssValue.unit]
  )

  const handleInputChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setCurrentValue(`${event.target.value}${cssValue.unit}`)
    },
    [cssValue.unit]
  )

  const handleUnitChange = useCallback<React.ChangeEventHandler<HTMLSelectElement>>(
    (event) => {
      if (cssValue.unit === 'px' && (event.target.value === 'em' || event.target.value === 'rem')) {
        setCurrentValue(`${cssValue.value / 16}${event.target.value}`)
      } else if (
        (cssValue.unit === 'em' || cssValue.unit === 'rem') &&
        event.target.value === 'px'
      ) {
        setCurrentValue(`${(cssValue.value * 16).toFixed(0)}${event.target.value}`)
      } else {
        setCurrentValue(`${cssValue.value}${event.target.value}`)
      }
    },
    [cssValue.unit, cssValue.value]
  )

  useDebouncyEffect(() => onChange({ size, value: currentValue }), 500, [currentValue])

  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  return (
    <ElementsHighlighter themeKey={`fontSizes.${size}`} fontSize="1rem">
      <Flex justifyContent="space-between" mt="0.5rem" alignItems="center">
        <Tag alignItems="center" minW="min-content" fontSize="0.75rem" px="0.5rem">
          {size}
        </Tag>
        <Slider
          aria-label="slider-ex-1"
          min={0}
          max={cssValue.unit === 'px' ? 100 : 10}
          step={cssValue.unit === 'px' ? 1 : 0.001}
          mx="1rem"
          value={cssValue.value}
          onChange={handleSliderChange}
        >
          <SliderTrack>
            <SliderFilledTrack bg="primary.500" />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        <Flex alignItems="center">
          <Input
            borderRadius="6px"
            size="sm"
            textAlign="right"
            fontSize="0.875rem"
            w="70px"
            type="number"
            value={cssValue.value}
            onChange={handleInputChange}
          />
          <Select
            size="sm"
            w="70px"
            ml="0.5rem"
            borderRadius="6px"
            value={cssValue.unit}
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
