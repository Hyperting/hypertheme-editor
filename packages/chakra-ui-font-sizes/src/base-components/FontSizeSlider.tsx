import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react'
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
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

    const int = Number(numbersSubstring)

    return int
  }, [currentFontValue])

  const [sliderValue, setSliderValue] = useState<number>(fontSizeValue)

  useEffect(() => {
    let newValue = '0rem'

    if (fontSizeUnit === 'px') {
      newValue = `${sliderValue}${fontSizeUnit}`
    } else {
      const digit = (sliderValue * 0.1).toFixed(2)
      newValue = `${digit}${fontSizeUnit}`
    }

    setCurrentFontValue(newValue)
  }, [sliderValue, fontSizeUnit])

  return (
    <Slider
      aria-label="slider-ex-1"
      min={0}
      max={100}
      mx="1rem"
      value={sliderValue}
      onChange={(value) => setSliderValue(value)}
    >
      <SliderTrack>
        <SliderFilledTrack bg="primary.500" />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  )
}
