# @hypertheme-editor/chakra-ui-font-sizes

Edit [Chakra UI](https://chakra-ui.com/) theme **fontSizes** with [HyperTheme Editor](#hypertheme-editor).

![Font Sizes Panel](https://hyperthe.me/images/documentation/font-sizes-screen.png)

This module is part of **[HyperTheme Editor](#hypertheme-editor)**, check it out before installing and using it.

## Import

```jsx
import { ThemeEditorFontSizes } from '@hypertheme-editor/chakra-ui-font-sizes'
```

## Usage

ThemeEditorFontSizes works with the [`ThemeEditorDrawer` component](https://hyperthe.me/documentation/components/ThemeEditorDrawer).

Put the `ThemeEditFontSizes` component as a children of `ThemeEditorDrawer` and set `icon` and `title` props like in this example:

```jsx live=true
function MyThemeEditor(props) {
  return (
    <ThemeEditor>
      <ThemeEditorButton {...props} />
      <ThemeEditorDrawer>
        <ThemeEditorFontSizes icon={ImFontSize} title="Font Sizes" />
      </ThemeEditorDrawer>
    </ThemeEditor>
  )
}
```

## HyperTheme Editor

![HyperTheme Editor screen shot](https://www.hyperthe.me/images/social-banner.jpg)

Powerful visual theme editor for your next Chakra UI project.

Learn more about it on the website: [`hyperthe.me`](https://hyperthe.me).

### Documentation

Read the HyperTheme Editor [documentation here](https://hyperthe.me/documentation).

## License

HyperTheme Editor is licensed under the [MIT License](https://github.com/Hyperting/hypertheme-editor/blob/main/LICENSE) by [Hyperting S.r.l.](https://hyperting.com).
