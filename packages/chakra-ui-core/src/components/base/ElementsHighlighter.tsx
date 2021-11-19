import React, { FC, useCallback, useMemo } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { ElementsMap } from '../../utils/ElementsMap'

type Props = {
  themeKey: string
} & BoxProps

export const ElementsHighlighter: FC<Props> = ({ themeKey, ...rest }) => {
  const cssVarName = useMemo(() => themeKey.replaceAll('.', '-'), [themeKey])

  const onHover = useCallback((e) => {
    if (ElementsMap.getInstance().cssVarElementsMap['--chakra-' + cssVarName]) {
      ElementsMap.getInstance().toRenderElements = {
        [cssVarName]: ElementsMap.getInstance().cssVarElementsMap['--chakra-' + cssVarName],
      }
    }
  }, [])

  const onLeave = useCallback((e) => {
    ElementsMap.getInstance().toRenderElements = {}
  }, [])

  return <Box onMouseEnter={onHover} onMouseLeave={onLeave} {...rest} />
}
