import { Flex, Input, Select } from '@chakra-ui/react'
import React, { useCallback, useContext, useMemo } from 'react'
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

    return numbersSubstring
  }, [currentFontValue])

  const handleUnitChange = useCallback<React.ChangeEventHandler<HTMLSelectElement>>(
    (event) => {
      let newValue = '0rem'
      if (fontSizeUnit === 'px' && (event.target.value === 'em' || event.target.value === 'rem')) {
        newValue = `${Number(fontSizeValue) / 16}${event.target.value}`
      } else {
        newValue = `${fontSizeValue}${event.target.value}`
      }

      setCurrentFontValue(newValue)
    },
    [currentFontValue]
  )

  return (
    <Flex alignItems="center">
      <Input
        type="number"
        step="0.01"
        fontSize="0.875rem"
        w="70px"
        borderRadius="6px"
        size="sm"
        value={fontSizeValue}
        onChange={(e) =>
          setCurrentFontValue(`${!e.target.value ? '' : e.target.value}${fontSizeUnit}`)
        }
        onWheel={(e) => e.currentTarget.blur()}
      />
      <Select
        size="sm"
        w="70px"
        ml="0.5rem"
        borderRadius="6px"
        value={!fontSizeValue?.length ? '' : !!fontSizeUnit?.length ? fontSizeUnit : 'rem'}
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
