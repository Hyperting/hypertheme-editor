import { atom, DefaultValue, useRecoilState, useRecoilValue } from 'recoil'
import { GOOGLE_FONTS_LOCAL_STORAGE_KEY } from '../constants'
import { safeJsonParse } from './safeJsonParse'

export type GoogleFont = {
  family: string
  variants: string[]
  subsets: string[]
  version: string
  lastModified: string
  files: Record<string, string>
  category: string
  kind: string
}

export type GoogleFontsState = {
  fonts: GoogleFont[]
  fontFamilies: string[]
  toLoadFonts: GoogleFont[]
  toLoadVariants: Record<string, string[]>
  initialized: boolean
}

export const googleFontFamiliesState = atom<GoogleFontsState>({
  key: 'googleFontFamiliesState',
  default: {
    initialized: false,
    toLoadFonts: [],
    fonts: [],
    fontFamilies: [],
    toLoadVariants: {},
  },
  effects_UNSTABLE: [
    ({ onSet, setSelf }) => {
      onSet((newValue) => {
        if (newValue instanceof DefaultValue) {
          //
        } else if (newValue.initialized) {
          localStorage.setItem(
            GOOGLE_FONTS_LOCAL_STORAGE_KEY,
            JSON.stringify({
              toLoadFonts: newValue.toLoadFonts,
              toLoadVariants: newValue.toLoadVariants,
            })
          )
        }
      })
    },
  ],
})

export const useGoogleFontFamiliesState = () => useRecoilState(googleFontFamiliesState)
export const useGoogleFontFamiliesValue = () => useRecoilValue(googleFontFamiliesState)
