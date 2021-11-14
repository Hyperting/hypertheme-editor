import { isColor } from '../../../src/utils/isColor'

describe('unit: isColor()', function () {
  it('should return true for valid color names', function () {
    expect(isColor('red')).toBe(true)
    expect(isColor('green')).toBe(true)
    expect(isColor('darkcyan')).toBe(true)
    expect(isColor('darkgoldenrod')).toBe(true)
    expect(isColor('darkgray')).toBe(true)
    expect(isColor('forestgreen')).toBe(true)
    expect(isColor('peachpuff')).toBe(true)
    expect(isColor('whitesmoke')).toBe(true)
    expect(isColor('oldlace')).toBe(true)
  })

  it('should return true for valid hex color values', function () {
    expect(isColor('#f09')).toBe(true)
    expect(isColor('#F09')).toBe(true)
    expect(isColor('#ff0099')).toBe(true)
    expect(isColor('#FF0099')).toBe(true)

    // with transparency
    expect(isColor('#3a30')).toBe(true)
    expect(isColor('#3A3F')).toBe(true)
    expect(isColor('#33aa3300')).toBe(true)
    expect(isColor('#33AA3380')).toBe(true)
    expect(isColor('#f09f')).toBe(true)
    expect(isColor('#F09F')).toBe(true)
    expect(isColor('#ff0099ff')).toBe(true)
    expect(isColor('#FF0099FF')).toBe(true)
  })

  it('should return true for valid rgb() function colors', function () {
    expect(isColor('rgb(255,0,153)')).toBe(true)
    expect(isColor('rgb(255, 0, 153)')).toBe(true)
    // expect(isColor('rgb(255, 0, 153.0)')).toBe(true) <-- TODO: fix me
    expect(isColor('rgb(100%,0%,60%)')).toBe(true)
    expect(isColor('rgb(100%, 0%, 60%)')).toBe(true)

    // whitespace syntax
    // TODO: fix whitespace syntax
    // expect(isColor('rgb(51 170 51')).toBe(true)
    // expect(isColor('rgb(51 170 51')).toBe(true)

    // with float values
    // TODO: fix float values
    // expect(isColor('rgb(255, 0, 153.6)')).toBe(true)
    // expect(isColor('rgb(2.55e2, 0e0, 1.53e2)')).toBe(true)
  })

  it('should return true for valid rgba() function colors', function () {
    expect(isColor('rgba(51, 170, 51, .1)')).toBe(true)
    expect(isColor('rgba(51, 170, 51, .4)')).toBe(true)
    expect(isColor('rgba(51, 170, 51, .7)')).toBe(true)
    expect(isColor('rgba(51, 170, 51,  1)')).toBe(true)

    // whitespace syntax
    // TODO: fix whitespace syntax
    // expect(isColor('rgba(51 170 51 / 0.4')).toBe(true)
    // expect(isColor('rgba(51 170 51 / 40%')).toBe(true)

    // with float values
    // TODO: fix float values
    // expect(isColor('rgba(255, 0, 153.6, 1)')).toBe(true)
    // expect(isColor('rgba(2.55e2, 0e0, 1.53e2, 1e2%)')).toBe(true)
  })

  it('should return true for valid hsl() function colors', function () {
    expect(isColor('hsl(270,60%,70%)')).toBe(true)
    expect(isColor('hsl(270, 60%, 70%)')).toBe(true)

    // TODO: fix hsl syntax values
    // expect(isColor('hsl(270 60% 70%)')).toBe(true)
    // expect(isColor('hsl(270deg, 60%, 70%)')).toBe(true)
    // expect(isColor('hsl(4.71239rad, 60%, 70%)')).toBe(true)
    // expect(isColor('hsl(.75turn, 60%, 70%)')).toBe(true)
  })

  it('should return true for valid hsla() function colors', function () {
    expect(isColor('hsla(270, 60%, 50%, .15)')).toBe(true)
    expect(isColor('hsla(240, 100%, 50%, .05)')).toBe(true)
    expect(isColor('hsla(240, 100%, 50%, .4)')).toBe(true)
    expect(isColor('hsla(240, 100%, 50%, .7)')).toBe(true)
    expect(isColor('hsla(240, 100%, 50%, 1)')).toBe(true)

    // TODO: fix hsla syntax values
    // expect(isColor('hsla(270, 60%, 50%, 15%)')).toBe(true)
    // expect(isColor('hsla(270 60% 50% / .15)')).toBe(true)
    // expect(isColor('hsla(270 60% 50% / 15%)')).toBe(true)
  })

  it('should return false for invalid color values', function () {
    expect(isColor('invalid-color')).toBe(false)
    expect(isColor('reds')).toBe(false)
    expect(isColor('#YYYYY')).toBe(false)
    expect(isColor('rgb(test, 2, testing)')).toBe(false)
    expect(isColor('rgba(test, 2, testing, 0.1)')).toBe(false)
    expect(isColor('hsl(test, 2, testing)')).toBe(false)
    expect(isColor('hsla(test, 2, testing, 1)')).toBe(false)
  })
})
