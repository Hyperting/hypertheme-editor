import React, { FC } from 'react'
import { useTheme } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import { GoogleFontFamiliesStateInitializer } from './GoogleFontFamiliesStateInitializer'
import { ThemeStateInitializer } from './ThemeStateInitializer'

type Props = {
  children: React.ReactNode | React.ReactNode[]
}

export const ThemeEditorProvider: FC<Props> = ({ children }) => {
  const chakraTheme = useTheme()

  return (
    <RecoilRoot>
      <ThemeStateInitializer theme={chakraTheme} />
      <GoogleFontFamiliesStateInitializer />
      {children}
    </RecoilRoot>
  )
}
