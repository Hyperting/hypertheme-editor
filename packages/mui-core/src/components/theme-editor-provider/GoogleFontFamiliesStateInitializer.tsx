import React, { FC, useEffect, useMemo } from 'react'
import GoogleFontLoader, { Font } from 'react-google-font-loader'
import { useRecoilState } from 'recoil'
import { API_ENDPOINT, GOOGLE_FONTS_LOCAL_STORAGE_KEY } from '../../constants'
import { useThemeEditor } from '../../hooks/useThemeEditor'
import { GoogleFont, googleFontFamiliesState } from '../../utils/googleFontFamiliesState'
import { safeJsonParse } from '../../utils/safeJsonParse'

const GOOGLE_FONTS_API_ENDPOINT = `${API_ENDPOINT}/google-fonts`

type Props = {
  //
}

export const GoogleFontFamiliesStateInitializer: FC<Props> = () => {
  const [googleFontsState, setGoogleFontsState] = useRecoilState(googleFontFamiliesState)
  const { theme } = useThemeEditor()

  useEffect(() => {
    const init = async () => {
      try {
        const result = await fetch(GOOGLE_FONTS_API_ENDPOINT)
        const googleFonts = await result.json()
        const fontFamilies = googleFonts.items.map((item) => item.family)

        const savedValue = localStorage.getItem(GOOGLE_FONTS_LOCAL_STORAGE_KEY)
        if (savedValue) {
          const parsedValue = safeJsonParse(savedValue)
          if (!parsedValue.error) {
            setGoogleFontsState({
              ...parsedValue.value,
              fontFamilies,
              fonts: googleFonts.items,
              initialized: true,
              toLoadFonts: parsedValue.value.toLoadFonts || [],
              toLoadVariants: parsedValue.value.toLoadVariants || {},
            })
          }
          return
        }

        setGoogleFontsState({
          fontFamilies,
          fonts: googleFonts.items,
          initialized: true,
          toLoadFonts: googleFontsState.toLoadFonts || [],
          toLoadVariants: googleFontsState.toLoadVariants || {},
        })
      } catch (error) {
        //
      }
    }

    if (!googleFontsState.initialized) {
      init()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!theme || !theme.fonts) {
      return
    }

    const newToLoadFonts: GoogleFont[] = []
    const fontKeys = Object.keys(theme.fonts)
    for (const fontKey of fontKeys) {
      const font = theme.fonts[fontKey]
      const splittedFontFamily = font.split(',').map((item) => item.trim())
      const firstFontFamilyName =
        splittedFontFamily[0].startsWith('"') && splittedFontFamily[0].endsWith('"')
          ? splittedFontFamily[0].substring(1, splittedFontFamily[0].length - 1)
          : splittedFontFamily[0]

      const googleFontIndex =
        !googleFontsState.fontFamilies ||
        googleFontsState.fontFamilies.length === 0 ||
        !splittedFontFamily ||
        splittedFontFamily.length === 0
          ? -1
          : googleFontsState.fontFamilies.indexOf(firstFontFamilyName)

      if (googleFontIndex > -1 && googleFontsState.fonts[googleFontIndex]) {
        newToLoadFonts.push(googleFontsState.fonts[googleFontIndex])
      }
    }

    setGoogleFontsState({
      ...googleFontsState,
      toLoadFonts: newToLoadFonts,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme?.fonts])

  const currentGoogleFonts = useMemo<Font[]>(() => {
    return googleFontsState.toLoadFonts.map((item, index) => {
      return {
        font: item.family,
        weights:
          googleFontsState.toLoadVariants && googleFontsState.toLoadVariants[item.family]
            ? googleFontsState.toLoadVariants[item.family]
            : item.variants,
      }
    })
  }, [googleFontsState.toLoadFonts, googleFontsState.toLoadVariants])

  const currentGoogleFontSubset = useMemo<string[]>(() => {
    return googleFontsState.toLoadFonts.reduce((acc, item): any => {
      return [...acc, ...item.subsets]
    }, [])
  }, [googleFontsState.toLoadFonts])

  if (!googleFontsState.initialized) {
    return null
  }

  return <GoogleFontLoader fonts={currentGoogleFonts} subsets={currentGoogleFontSubset} />
}
