import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react'
import React, { FC, useCallback } from 'react'

export const ThemeEditorFontSizeSlider: FC<{
  setCurrentValue: (value: React.SetStateAction<string>) => void
  cssValue: any
}> = ({ setCurrentValue, cssValue }) => {
  const handleSliderChange = useCallback(
    (newValue: number) => {
      setCurrentValue(`${newValue}${cssValue?.unit}`)
    },
    [cssValue]
  )

  return (
    <Slider
      aria-label="slider-ex-1"
      min={0}
      max={cssValue?.unit === 'px' ? 100 : 10}
      step={cssValue?.unit === 'px' ? 1 : 0.001}
      mx="1rem"
      value={cssValue?.value}
      onChange={handleSliderChange}
    >
      <SliderTrack>
        <SliderFilledTrack bg="primary.500" />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  )
}
