// import React from 'react'
// import { ComponentStory, ComponentMeta } from '@storybook/react'
// import {
//   defaultTheme,
//   ThemeEditorDrawerButton,
//   ThemeEditorProvider,
//   ThemeEditorRootPanel,
//   ThemeEditorColors,
//   ThemeEditorFontSizes,
//   ThemeEditorTypography,
//   ThemeEditorRadii,
//   ThemeEditorSpacing,
//   ThemeEditorShadows,
//   ThemeEditorConfig,
// } from '../src'

// import { Button, useColorMode } from '@chakra-ui/react'
// import ColorModeToggle from '../src/components/base/ColorModeToggle'
// import { CgColorPicker, CgEditShadows, CgSpaceBetween } from 'react-icons/cg'
// import { ImFontSize } from 'react-icons/im'
// import { BiText } from 'react-icons/bi'
// import { MdRoundedCorner } from 'react-icons/md'
// import { FaCog, FaSlidersH } from 'react-icons/fa'

// export default {
//   title: 'HyperThemeEditor/ThemeEditorDrawerButtonTest',
//   component: ThemeEditorDrawerButton,
//   argTypes: {},
// } as ComponentMeta<typeof ThemeEditorDrawerButton>

// // const Template: ComponentStory<typeof ThemeEditorDrawerButton> = (args) => {
// //   const { colorMode } = useColorMode()

// //   // const customTheme = extendTheme({
// //   //   ...defaultTheme,
// //   //   config: {
// //   //     ...defaultTheme.config,
// //   //     cssVarPrefix: 'hypertheme',
// //   //     // initialColorMode: colorMode,
// //   //   },
// //   // })
// //   return (
// //     <ThemeEditorProvider>
// //       <Button colorScheme="blue">Ciao</Button>
// //       <ThemeEditorDrawerButton {...args}>
// //         <ThemeEditorRootPanel icon={CgColorPicker} title="Colors">
// //           <ThemeEditorColors />
// //         </ThemeEditorRootPanel>

// //         <ThemeEditorRootPanel icon={ImFontSize} title="Font Sizes">
// //           <ThemeEditorFontSizes />
// //         </ThemeEditorRootPanel>
// //       </ThemeEditorDrawerButton>
// //       <ColorModeToggle />
// //     </ThemeEditorProvider>
// //   )
// // }

// export const FreeVersion = (args) => (
//   <ThemeEditorProvider>
//     <Button colorScheme="blue">Ciao</Button>
//     <ThemeEditorDrawerButton {...args}>
//       <ThemeEditorRootPanel icon={CgColorPicker} title="Colors">
//         <ThemeEditorColors />
//       </ThemeEditorRootPanel>
//       <ThemeEditorRootPanel icon={ImFontSize} title="Font Sizes">
//         <ThemeEditorFontSizes />
//       </ThemeEditorRootPanel>
//     </ThemeEditorDrawerButton>
//   </ThemeEditorProvider>
// )

// export const ProVersion = (args) => (
//   <ThemeEditorProvider>
//     <Button colorScheme="blue" letterSpacing="wider">
//       Ciao
//     </Button>
//     <ThemeEditorDrawerButton {...args} hideUpgradeToPro size="sm">
//       <ThemeEditorRootPanel icon={CgColorPicker} title="Colors">
//         <ThemeEditorColors />
//       </ThemeEditorRootPanel>

//       <ThemeEditorRootPanel icon={BiText} title="Typography">
//         <ThemeEditorTypography />
//       </ThemeEditorRootPanel>

//       <ThemeEditorRootPanel icon={CgEditShadows} title="Shadows">
//         <ThemeEditorShadows />
//       </ThemeEditorRootPanel>

//       <ThemeEditorRootPanel icon={MdRoundedCorner} title="Radii">
//         <ThemeEditorRadii />
//       </ThemeEditorRootPanel>

//       <ThemeEditorRootPanel icon={CgSpaceBetween} title="Space">
//         <ThemeEditorSpacing />
//       </ThemeEditorRootPanel>
//     </ThemeEditorDrawerButton>
//     <ThemeEditorDrawerButton {...args} hideUpgradeToPro title="Try it">
//       <ThemeEditorRootPanel icon={CgColorPicker} title="Colors">
//         <ThemeEditorColors />
//       </ThemeEditorRootPanel>

//       <ThemeEditorRootPanel icon={BiText} title="Typography">
//         <ThemeEditorTypography />
//       </ThemeEditorRootPanel>

//       <ThemeEditorRootPanel icon={CgEditShadows} title="Shadows">
//         <ThemeEditorShadows />
//       </ThemeEditorRootPanel>

//       <ThemeEditorRootPanel icon={MdRoundedCorner} title="Radii">
//         <ThemeEditorRadii />
//       </ThemeEditorRootPanel>

//       <ThemeEditorRootPanel icon={CgSpaceBetween} title="Space">
//         <ThemeEditorSpacing />
//       </ThemeEditorRootPanel>

//       <ThemeEditorRootPanel icon={FaSlidersH} title="Config">
//         <ThemeEditorConfig />
//       </ThemeEditorRootPanel>
//     </ThemeEditorDrawerButton>
//     <ColorModeToggle />
//   </ThemeEditorProvider>
// )
