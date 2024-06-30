import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react'
import React, { useContext, useMemo, useState } from 'react'
import { InputGroupContext } from '../ThemeEditorFontSizesItem'

export const FontSizeSlider = () => {
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

    const int = Number.isNaN(Number(numbersSubstring)) ? 0 : Number(numbersSubstring)

    return int
  }, [currentFontValue])

  const [isMouseOver, setIsMouseOver] = useState<boolean>(false)

  return (
    <Slider
      aria-label="slider-ex-1"
      min={0}
      max={fontSizeUnit === 'px' ? 100 : 10}
      step={fontSizeUnit === 'px' ? 1 : 0.01}
      mx="1rem"
      focusThumbOnChange={isMouseOver}
      value={fontSizeValue}
      onChange={(value) => setCurrentFontValue(`${value}${fontSizeUnit}`)}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <SliderTrack>
        <SliderFilledTrack bg="primary.500" />
      </SliderTrack>
      <SliderThumb zIndex={2} />
    </Slider>
  )
}
