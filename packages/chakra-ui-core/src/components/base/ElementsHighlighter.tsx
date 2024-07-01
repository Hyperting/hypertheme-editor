import React, { FC, useCallback, useMemo } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { ElementsMap } from '../../utils/ElementsMap'

const replaceDotsWithDash = (str: string) => str.replace(/\./g, '-')

type Props = {
  themeKeys: string | string[]
} & BoxProps

export const ElementsHighlighter: FC<Props> = ({ themeKeys, ...rest }) => {
  const cssVarNames = useMemo(
    () =>
      typeof themeKeys === 'string'
        ? [replaceDotsWithDash(themeKeys)]
        : themeKeys.map((k) => replaceDotsWithDash(k)),
    [themeKeys]
  )

  const onHover = useCallback((e) => {
    const toRenderElements = {}
    for (const cssVarName of cssVarNames) {
      if (ElementsMap.getInstance().cssVarElementsMap['--chakra-' + cssVarName]) {
        toRenderElements[cssVarName] = ElementsMap.getInstance().cssVarElementsMap[
          '--chakra-' + cssVarName
        ]
      }
    }

    ElementsMap.getInstance().toRenderElements = toRenderElements
  }, [])

  const onLeave = useCallback((e) => {
    ElementsMap.getInstance().toRenderElements = {}
  }, [])

  return <Box onMouseEnter={onHover} onMouseLeave={onLeave} {...rest} />
}
