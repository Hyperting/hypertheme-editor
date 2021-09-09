import { mode } from '@chakra-ui/theme-tools'
import { variantSolid } from '../utils/colors'

const components = {
  // CHAKRA  components

  Checkbox: {
    baseStyle: (props) => ({
      control: {
        _checked: {
          bg: mode('primary.500', 'primary.200')(props),
          borderColor: mode('primary.500', 'primary.200')(props),
          color: mode('white', 'gray.900')(props),

          _hover: {
            bg: mode('v.600', 'primary.300')(props),
            borderColor: mode('primary.600', 'primary.300')(props),
          },

          _disabled: {
            borderColor: mode('gray.200', 'transparent')(props),
            bg: mode('gray.200', 'whiteAlpha.300')(props),
            color: mode('gray.500', 'whiteAlpha.500')(props),
          },
        },
      },
    }),
  },
  Radio: {
    baseStyle: (props) => ({
      control: {
        _checked: {
          bg: mode('primary.500', 'primary.200')(props),
          borderColor: mode('primary.500', 'primary.200')(props),
          color: mode('white', 'gray.900')(props),

          _hover: {
            bg: mode('v.600', 'primary.300')(props),
            borderColor: mode('primary.600', 'primary.300')(props),
          },

          _disabled: {
            borderColor: mode('gray.200', 'transparent')(props),
            bg: mode('gray.200', 'whiteAlpha.300')(props),
            color: mode('gray.500', 'whiteAlpha.500')(props),
          },
        },
      },
    }),
  },
  Link: {
    baseStyle: {
      _active: {
        boxShadow: 'none',
      },
    },
  },
  Accordion: {
    baseStyle: {
      container: {
        borderTopWidth: '1px',
        borderColor: 'inherit',
        _first: {
          borderTopWidth: '0px',
        },
        _last: {
          borderBottomWidth: '0px',
        },
      },
    },
  },
  Input: {
    parts: ['field', 'addon'],
    baseStyle: {
      field: {},
    },
    // Styles for the size variations
    sizes: {
      md: {
        field: {
          px: 3,
          h: 12,
        },
      },
      lg: {
        field: {
          px: 4,
          h: 14,
        },
      },
      xl: {
        field: {
          px: 6,
          h: 16,
          borderRadius: 'md',
        },
      },
    },
    variants: {
      unstyled: {
        field: {
          boxShadow: 'none',
        },
      },
      outline: {
        field: {
          outline: 'rgba(125, 125, 125, 0.3)',
          borderColor: 'rgba(125, 125, 125, 0.3)',
          boxShadow: 'surface',
          _hover: {
            borderColor: 'rgba(125, 125, 125, 0.45)',
          },
          _focus: {
            zIndex: 1,
            borderColor: 'rgba(125, 125, 125, 0.3)',
            boxShadow: 'outline',
          },
        },
      },
    },
    defaultProps: {
      h: 14,
    },
  },
  Select: {
    parts: ['field', 'addon'],
    baseStyle: (props: Record<string, any>) => ({
      field: {
        boxShadow: mode('surface', 'surfaceDark')(props),
        border: 'none',
      },
    }),
    // Styles for the size variations
    sizes: {
      md: {
        field: {
          px: 4,
          h: 12,
        },
      },
      lg: {
        field: {
          px: 4,
          h: 14,
        },
      },
      xl: {
        field: {
          px: 6,
          h: 16,
        },
      },
    },
    variants: {},
    defaultProps: {},
  },
  Textarea: {
    baseStyle: (props) => ({
      boxShadow: mode('surface', 'surfaceDark')(props),
      border: 'none',
    }),
    variants: {
      outline: {
        outline: 'rgba(125, 125, 125, 0.3)',
        borderColor: 'rgba(125, 125, 125, 0.3)',
        boxShadow: 'surface',
        _hover: {
          borderColor: 'rgba(125, 125, 125, 0.45)',
        },
        _focus: {
          zIndex: 1,
          borderColor: 'rgba(125, 125, 125, 0.3)',
          boxShadow: 'outline',
        },
      },
    },
  },
  Menu: {
    baseStyle: (props: Record<string, any>) => ({
      list: {
        p: 1,
        borderWidth: '0px',
        overflow: 'visible',
        boxShadow: mode('surface', 'surfaceDark')(props),
      },
    }),
    // Styles for the size variations
    sizes: {},
    variants: {},
    defaultProps: {},
  },
  PinInput: {
    baseStyle: {
      boxShadow: 'surface',
      _hover: {
        borderColor: 'rgba(125, 125, 125, 0.45)',
      },
      _focus: {
        zIndex: 1,
        borderColor: 'rgba(125, 125, 125, 0.3)',
        boxShadow: 'outline !important',
      },
    },
    sizes: {},
  },
  Tag: {
    baseStyle: {},
    sizes: {},
    defaultProps: {},
  },
  Button: {
    baseStyle: {},
    // Styles for the size variations
    sizes: {
      md: {
        px: 4,
        h: 12,
      },
      lg: {
        px: 6,
        h: 14,
      },
      xl: {
        px: 6,
        h: 16,
        fontSize: 'xl',
      },
    },
    // Styles for the visual style variations
    variants: {
      solid: variantSolid,
      gradient: ({ colorScheme = 'gray', colorMode }) => ({
        bgColor: `${colorScheme}.600`,
        boxShdadow: mode('surface', 'surfaceDark')({ colorMode }),
        bgGradient: `linear(25deg, ${colorScheme}.500, ${colorScheme}.400)`,
        color: 'white',
      }),
    },
    // The default `size` or `variant` values
    defaultProps: {},
  },
  Tabs: {
    variants: {
      'enclosed-colored': (props) => ({
        tablist: {
          borderWidth: mode('1px', '1px')(props),
          borderColor: mode('white', 'gray.800')(props),
          overflow: 'visible',
          bgColor: mode('transparent', 'transparent')(props),
          p: 1,
          borderRadius: 'md',
        },
        tab: {
          borderWidth: '0',
          borderRightWidth: '1px',
          transition: 'all 0.25s',
          bgColor: 'transparent',
          _selected: {
            bgColor: 'primary.500',
            color: 'white',
            borderRadius: 'md',
          },
          _first: {
            borderStartRadius: 'md',
          },
          _last: {
            borderEndRadius: 'md',
            borderRightWidth: '0px',
          },
        },
      }),

      line: (props: any) => {
        const { colorScheme: c, orientation } = props
        const isVertical = orientation === 'vertical'
        const borderProp = orientation === 'vertical' ? 'borderStart' : 'borderBottom'
        const marginProp = isVertical ? 'marginStart' : 'marginBottom'

        return {
          tablist: {
            bg: mode('white', 'gray.800')(props),
            borderColor: 'inherit',
            borderBottom: '0',
            overflow: 'visible',
            shadow: mode('surface', 'surfaceDark')(props),
          },
          tab: {
            pos: 'relative',
            borderBottom: 'none',
            overflow: 'visible',
            [marginProp]: '-1px',

            _selected: {
              color: mode(`${c}.600`, `${c}.300`)(props),
              borderRightColor: mode('gray.100', 'whiteAlpha.400')(props),
              '&::before': {
                opacity: 1,
                bottom: '-1px',
                bg: mode('primary.500', 'primary.500')(props),
              },
            },
            _active: {
              bg: mode('gray.200', 'whiteAlpha.300')(props),
            },
            _disabled: {
              opacity: 0.4,
              cursor: 'not-allowed',
            },
          },
        }
      },
    },
  },
  Drawer: {
    baseStyle: {
      dialog: {
        //  m: { base: 0, md: 2 },
        //    borderRadius: { base: 0, md: 'lg' },
      },
    },
  },
}

export default components
