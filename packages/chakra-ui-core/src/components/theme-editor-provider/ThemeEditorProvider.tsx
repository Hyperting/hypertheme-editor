import React, { FC } from 'react'
import { useTheme } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import { ThemeStateInitializer } from './ThemeStateInitializer'
import { GoogleFontFamiliesStateInitializer } from '../../utils/GoogleFontFamiliesStateInitializer'


type Props = {
    children: React.ReactNode | React.ReactNode[]
    disableGoogleFonts?: boolean
}

export const ThemeEditorProvider: FC<Props> = ({ children, disableGoogleFonts = true }) => {
    const chakraTheme = useTheme()

    return (
        <RecoilRoot>
            <ThemeStateInitializer theme={chakraTheme} />

            {!disableGoogleFonts && <GoogleFontFamiliesStateInitializer />}
            {children}
        </RecoilRoot>
    )
}
