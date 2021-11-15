import {
  setThemeColors,
  setThemeColorsOfPalette,
  setThemePaletteColor,
  setThemeSingleColor,
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
})
