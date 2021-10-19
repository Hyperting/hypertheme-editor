# HyperTheme Editor

![HyperTheme Editor screen shot](https://www.hyperthe.me/images/social-banner.jpg)

Powerful visual theme editor for your next Chakra UI project.

## Features

- Chakra-UI Theme Foundation Color Editor
- Chakra-UI Theme Foundation Font Sizes Editor
- Undo/Redo
- Customizable Editor Drawer
- Custom Panel Editors
- Unlimited exports


## PRO Version

HyperTheme Editor has also a PRO version with more features:
- Font Family Editor from Google Fonts
- Line Heights Editor
- Letter Spacing Editor
- Shadows Editor
- Radii Editor
- Spacing Editor

Visit [`hyperthe.me`](https://hyperthe.me) for more info.

## Documentation

Documentation and guides can be found [here](https://hyperthe.me/documentation).

## Getting Started
### 1. Installation

Install with NPM:

```bash
npm i @hypertheme-editor/chakra-ui
```

or with Yarn:

```bash
yarn add @hypertheme-editor/chakra-ui
```

### 2. Setup

Installation is super easy and fast:

- Add the component `<ThemeEditorProvider />` just below the `<ChakraProvider />` component.
- Add the component `<HyperThemeEditor />`.

Here's an example:

```jsx
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeEditorProvider, HyperThemeEditor } from '@hypertheme-editor/chakra-ui'
import theme from './my-theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ThemeEditorProvider>
        <HyperThemeEditor pos="fixed" bottom={4} right={2} />
      </ThemeEditorProvider>
    </ChakraProvider>
  )
}
```

### 3. Next Steps

Congratulations! You have a working **theme editor** on your application.

HyperTheme Editor comes also with all the building blocks necessary to create custom theme editor that works with Chakra UI.

To learn more read the [documentation](https://hyperthe.me/documentation).

## Contributing

If you want to contribute to HyperTheme Editor, make sure to read the [contribution guide](CONTRIBUTING.md) first.

## License

HyperTheme Editor is licensed under the [MIT License](https://github.com/Hyperting/hypertheme-editor/blob/main/LICENSE) by [Hyperting S.r.l.](https://hyperting.com).
