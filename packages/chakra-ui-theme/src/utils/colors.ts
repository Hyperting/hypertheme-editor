import { mode, transparentize } from '@chakra-ui/theme-tools'

type Dict = Record<string, any>

export const variantSolid = (props: Dict) => {
  const { colorScheme: c } = props

  if (c === 'gray') {
    const bg = mode('gray.100', 'whiteAlpha.200')(props)

    return {
      bg,
      _hover: {
        bg: mode('gray.200', 'whiteAlpha.300')(props),
        _disabled: {
          bg,
        },
      },
      _active: { bg: mode('gray.300', 'whiteAlpha.400')(props) },
    }
  }

  const { bg = `${c}.500`, color = 'white', hoverBg = `${c}.600`, activeBg = `${c}.700` } = {}

  const background = mode(bg, `${c}.400`)(props)

  return {
    bg: background,
    color: mode(color, 'gray.800')(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) },
  }
}
