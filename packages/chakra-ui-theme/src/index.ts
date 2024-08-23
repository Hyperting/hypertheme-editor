import { extendTheme, ThemeOverride } from '@chakra-ui/react'
import components from './components'
import config from './foundations/config'
import fonts from './foundations/fonts'
import colors from './foundations/colors'
import styles from './styles'
import sizes from './foundations/sizes'
import shadows from './foundations/shadows'
import radii from './foundations/radii'

const customTheme: ThemeOverride = {
  config,
  styles,
  fonts,
  colors,
  sizes,
  shadows,
  radii,
  components,
  lineHeights: {
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
}

export const theme = extendTheme({
  ...customTheme,
  config: {
    ...customTheme.config,
    cssVarPrefix: 'hypertheme',
  },
})
