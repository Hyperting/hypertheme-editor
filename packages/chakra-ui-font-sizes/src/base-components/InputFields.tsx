import { Flex, Input, Select } from '@chakra-ui/react'
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { InputGroupContext } from '../ThemeEditorFontSizesItem'

export const InputFields = () => {
  const context = useContext(InputGroupContext)
  const { currentFontValue, setCurrentFontValue } = context

  const fontSizeUnit = useMemo(() => {
    const charactersList = Array.from(currentFontValue.matchAll(/[a-z]/g))
    const charactersSubstring = charactersList.toString().replaceAll(',', '')

    return charactersSubstring
  }, [currentFontValue])

  const fontSizeValue = useMemo(() => {
    const numbersList = Array.from(currentFontValue.matchAll(/[^a-z]/g))
    let numbersSubstring = ''
    numbersList.forEach((item) => {
      numbersSubstring += item
    })

    const int = Number(numbersSubstring)

    return int
  }, [currentFontValue])

  const [inputValue, setInputValue] = useState<number>(fontSizeValue)

  const handleUnitChange = useCallback<React.ChangeEventHandler<HTMLSelectElement>>(
    (event) => {
      let newValue = '0rem'
      if (!fontSizeUnit?.length) {
        newValue = `${fontSizeValue || 0}rem`
      } else {
        if (
          fontSizeUnit === 'px' &&
          (event.target.value === 'em' || event.target.value === 'rem')
        ) {
          newValue = `${fontSizeValue / 16}${event.target.value}`
        } else {
          newValue = `${fontSizeValue}${event.target.value}`
        }
      }
      setCurrentFontValue(newValue)
    },
    [currentFontValue]
  )

  useEffect(() => {
    let newValue = '0rem'
    if (fontSizeUnit === 'px') {
      newValue = `${!inputValue ? 0 : inputValue}${fontSizeUnit}`
    } else {
      const valueAsEm = Number(inputValue) / 16
      newValue = `${valueAsEm}${fontSizeUnit}`
    }
    setCurrentFontValue(newValue)
  }, [inputValue, fontSizeUnit])

  return (
    <Flex alignItems="center">
      <Input
        type="number"
        step="0.01"
        fontSize="0.875rem"
        w="70px"
        borderRadius="6px"
        size="sm"
        onWheel={(e) => e.currentTarget.blur()}
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
      />
      <Select
        size="sm"
        w="70px"
        ml="0.5rem"
        borderRadius="6px"
        value={!!fontSizeUnit?.length ? fontSizeUnit : 'rem'}
        onChange={handleUnitChange}
        fontSize="0.875rem"
      >
        <option value="rem">rem</option>
        <option value="em">em</option>
        <option value="px">px</option>
      </Select>
    </Flex>
  )
}
