import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

// import '@fontsource/sora/200.css'
// import '@fontsource/sora/400.css'
// import '@fontsource/sora/600.css'
// import '@fontsource/sora/800.css'

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  ),
]
