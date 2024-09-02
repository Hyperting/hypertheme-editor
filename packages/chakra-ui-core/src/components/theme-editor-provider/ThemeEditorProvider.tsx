import React, { FC } from 'react'
import { theme as chakraTheme } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import { ThemeStateInitializer } from './ThemeStateInitializer'
import { GoogleFontFamiliesStateInitializer } from '../../utils/GoogleFontFamiliesStateInitializer'

type Props = {
  children: React.ReactNode | React.ReactNode[]
  disableGoogleFonts?: boolean
}

export const ThemeEditorProvider: FC<Props> = ({ children, disableGoogleFonts = true }) => {
  return (
    <RecoilRoot>
      <ThemeStateInitializer theme={chakraTheme} />
      {!disableGoogleFonts && <GoogleFontFamiliesStateInitializer />}
      {children}
    </RecoilRoot>
  )
}
