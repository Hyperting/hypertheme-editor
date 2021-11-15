import {
  setThemeColors,
  setThemeColorsOfPalette,
  setThemePaletteColor,
  setThemeSingleColor,
  setThemeTypographyFont,
  setThemeTypographyFonts,
  setThemeTypographyFontSize,
  setThemeTypographyLetterSpacing,
  setThemeTypographyLetterSpacings,
  setThemeTypographyLineHeight,
  setThemeTypographyLineHeights,
} from '../../../src/utils/updateThemeTokens'

describe('updateThemeTokens.ts Unit Group Test', function () {
  describe('setThemeColors Unit Group Test', function () {
    describe('setThemeSingleColor()', function () {
      it('should set a single color value for a chakra css variable', function () {
        setThemeSingleColor('secondaryLight', 'strange-variable-value')
        expect(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--chakra-colors-secondaryLight'
          )
        ).toBe('strange-variable-value')
      })
    })

    describe('setThemePaletteColor()', function () {
      it('should set a palette color value for a chakra css variable', function () {
        setThemePaletteColor('secondaryLight', 50, 'strange-variable-value-50')
        setThemePaletteColor('secondaryLight', 100, 'strange-variable-value-100')
        setThemePaletteColor('secondaryLight', 200, 'strange-variable-value-200')
        setThemePaletteColor('secondaryLight', 300, 'strange-variable-value-300')
        setThemePaletteColor('secondaryLight', 400, 'strange-variable-value-400')
        setThemePaletteColor('secondaryLight', 500, 'strange-variable-value-500')
        setThemePaletteColor('secondaryLight', 600, 'strange-variable-value-600')
        setThemePaletteColor('secondaryLight', 700, 'strange-variable-value-700')
        setThemePaletteColor('secondaryLight', 800, 'strange-variable-value-800')
        setThemePaletteColor('secondaryLight', 900, 'strange-variable-value-900')

        const cssStyleDeclarationt = getComputedStyle(document.documentElement)
        expect(cssStyleDeclarationt.getPropertyValue('--chakra-colors-secondaryLight-50')).toBe(
          'strange-variable-value-50'
        )
        expect(cssStyleDeclarationt.getPropertyValue('--chakra-colors-secondaryLight-100')).toBe(
          'strange-variable-value-100'
        )
        expect(cssStyleDeclarationt.getPropertyValue('--chakra-colors-secondaryLight-200')).toBe(
          'strange-variable-value-200'
        )
        expect(cssStyleDeclarationt.getPropertyValue('--chakra-colors-secondaryLight-300')).toBe(
          'strange-variable-value-300'
        )
        expect(cssStyleDeclarationt.getPropertyValue('--chakra-colors-secondaryLight-400')).toBe(
          'strange-variable-value-400'
        )
        expect(cssStyleDeclarationt.getPropertyValue('--chakra-colors-secondaryLight-500')).toBe(
          'strange-variable-value-500'
        )
        expect(cssStyleDeclarationt.getPropertyValue('--chakra-colors-secondaryLight-600')).toBe(
          'strange-variable-value-600'
        )
        expect(cssStyleDeclarationt.getPropertyValue('--chakra-colors-secondaryLight-700')).toBe(
          'strange-variable-value-700'
        )
        expect(cssStyleDeclarationt.getPropertyValue('--chakra-colors-secondaryLight-800')).toBe(
          'strange-variable-value-800'
        )
        expect(cssStyleDeclarationt.getPropertyValue('--chakra-colors-secondaryLight-900')).toBe(
          'strange-variable-value-900'
        )
      })
    })

    describe('setThemeColorsOfPalette()', function () {
      it('should set a complete palettte of colors', function () {
        const colorName = 'testColorName'
        const palette = {
          50: 'strange-variable-value-50',
          100: 'strange-variable-value-100',
          200: 'strange-variable-value-200',
          300: 'strange-variable-value-300',
          400: 'strange-variable-value-400',
          500: 'strange-variable-value-500',
          600: 'strange-variable-value-600',
          700: 'strange-variable-value-700',
          800: 'strange-variable-value-800',
          900: 'strange-variable-value-900',
        }

        setThemeColorsOfPalette(colorName, palette)

        const cssStyleDeclarationt = getComputedStyle(document.documentElement)
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-50`)).toBe(
          palette[50]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-100`)).toBe(
          palette[100]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-200`)).toBe(
          palette[200]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-300`)).toBe(
          palette[300]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-400`)).toBe(
          palette[400]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-500`)).toBe(
          palette[500]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-600`)).toBe(
          palette[600]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-700`)).toBe(
          palette[700]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-800`)).toBe(
          palette[800]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-900`)).toBe(
          palette[900]
        )
      })
    })

    describe('setThemeColors()', function () {
      it('should set the chakra ui css variable to the correct value', function () {
        const colorName = 'paletteColor'
        const colorsInput = {
          singleColor: 'strange-variable-value',
          [colorName]: {
            50: 'strange-variable-value-50',
            100: 'strange-variable-value-100',
            200: 'strange-variable-value-200',
            300: 'strange-variable-value-300',
            400: 'strange-variable-value-400',
            500: 'strange-variable-value-500',
            600: 'strange-variable-value-600',
            700: 'strange-variable-value-700',
            800: 'strange-variable-value-800',
            900: 'strange-variable-value-900',
          },
        } as any
        setThemeColors(colorsInput)

        const cssStyleDeclarationt = getComputedStyle(document.documentElement)
        expect(cssStyleDeclarationt.getPropertyValue('--chakra-colors-singleColor')).toBe(
          'strange-variable-value'
        )

        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-50`)).toBe(
          colorsInput[colorName][50]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-100`)).toBe(
          colorsInput[colorName][100]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-200`)).toBe(
          colorsInput[colorName][200]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-300`)).toBe(
          colorsInput[colorName][300]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-400`)).toBe(
          colorsInput[colorName][400]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-500`)).toBe(
          colorsInput[colorName][500]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-600`)).toBe(
          colorsInput[colorName][600]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-700`)).toBe(
          colorsInput[colorName][700]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-800`)).toBe(
          colorsInput[colorName][800]
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-colors-${colorName}-900`)).toBe(
          colorsInput[colorName][900]
        )
      })
    })
  })

  describe('setThemeTypographyFonts Unit Group Test', function () {
    describe('setThemeTypographyFont()', function () {
      it('should set the chakra ui css variable to the correct value', function () {
        const fontInput = 'strange-variable-value'
        setThemeTypographyFont('body', fontInput)

        const cssStyleDeclarationt = getComputedStyle(document.documentElement)
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-fonts-body`)).toBe(fontInput)
      })
    })

    describe('setThemeTypographyFonts()', function () {
      it('should set the chakra ui css variables to the correct value', function () {
        const fontInput = {
          heading: 'strange-variable-value-heading',
          body: 'strange-variable-value-body',
          mono: 'strange-variable-value-mono',
        }
        setThemeTypographyFonts(fontInput)

        const cssStyleDeclarationt = getComputedStyle(document.documentElement)
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-fonts-heading`)).toBe(
          fontInput.heading
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-fonts-body`)).toBe(fontInput.body)
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-fonts-mono`)).toBe(fontInput.mono)
      })
    })
  })

  describe('setThemeTypograghyFontSizes Unit Group Test', function () {
    describe('setThemeTypograghyFontSize()', function () {
      it('should set the chakra ui css variable to the correct value', function () {
        const fontInput = 'strange-variable-value'
        setThemeTypographyFontSize('body', fontInput)

        const cssStyleDeclarationt = getComputedStyle(document.documentElement)
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-fontSizes-body`)).toBe(fontInput)
      })
    })

    describe('setThemeTypograghyFontSizes()', function () {
      it('should set the chakra ui css variables to the correct value', function () {
        const fontInput = {
          heading: 'strange-variable-value-heading',
          body: 'strange-variable-value-body',
          mono: 'strange-variable-value-mono',
        }
        setThemeTypographyFonts(fontInput)

        const cssStyleDeclarationt = getComputedStyle(document.documentElement)
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-fonts-heading`)).toBe(
          fontInput.heading
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-fonts-body`)).toBe(fontInput.body)
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-fonts-mono`)).toBe(fontInput.mono)
      })
    })
  })

  describe('setThemeTypographyLetterSpacings Unit Group Test', function () {
    describe('setThemeTypographyLetterSpacing()', function () {
      it('should set the chakra ui css variable to the correct value', function () {
        const input = 'strange-variable-value'
        setThemeTypographyLetterSpacing('normal', input)

        const cssStyleDeclarationt = getComputedStyle(document.documentElement)
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-letterSpacings-normal`)).toBe(input)
      })
    })

    describe('setThemeTypographyLetterSpacings()', function () {
      it('should set the chakra ui css variables to the correct value', function () {
        const input = {
          tighter: '-0.05',
          tight: '-0.025',
          normal: '0',
          wide: '0.025',
          wider: '0.05',
          widest: '0.1',
        }
        setThemeTypographyLetterSpacings(input)

        const cssStyleDeclarationt = getComputedStyle(document.documentElement)
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-letterSpacings-tighter`)).toBe(
          input.tighter
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-letterSpacings-tight`)).toBe(
          input.tight
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-letterSpacings-normal`)).toBe(
          input.normal
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-letterSpacings-wide`)).toBe(
          input.wide
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-letterSpacings-wider`)).toBe(
          input.wider
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-letterSpacings-widest`)).toBe(
          input.widest
        )
      })
    })
  })

  describe('setThemeTypographyLineHeights Unit Group Test', function () {
    describe('setThemeTypographyLineHeight()', function () {
      it('should set the chakra ui css variable to the correct value', function () {
        const input = 'strange-variable-value'
        setThemeTypographyLineHeight('base', input)

        const cssStyleDeclarationt = getComputedStyle(document.documentElement)
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-base`)).toBe(input)
      })
    })

    describe('setThemeTypographyLineHeights()', function () {
      it('should set the chakra ui css variables to the correct value', function () {
        const input = {
          normal: 'normal',
          none: 1,
          shorter: 1.25,
          short: 1.375,
          base: 1.5,
          tall: 1.625,
          taller: '2rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '7': '1.75rem',
          '8': '2rem',
          '9': '2.25rem',
          '10': '2.5rem',
        }
        setThemeTypographyLineHeights(input)

        const cssStyleDeclarationt = getComputedStyle(document.documentElement)
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-normal`)).toBe(
          input.normal
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-none`)).toBe(input.none)
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-shorter`)).toBe(
          input.shorter
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-short`)).toBe(
          input.short
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-base`)).toBe(input.base)
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-tall`)).toBe(input.tall)
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-taller`)).toBe(
          input.taller
        )
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-3`)).toBe(input['3'])
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-4`)).toBe(input['4'])
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-5`)).toBe(input['5'])
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-6`)).toBe(input['6'])
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-7`)).toBe(input['7'])
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-8`)).toBe(input['8'])
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-9`)).toBe(input['9'])
        expect(cssStyleDeclarationt.getPropertyValue(`--chakra-lineHeights-10`)).toBe(input['10'])
      })
    })
  })
})
