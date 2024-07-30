/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Meta } from '@storybook/react'
// import { Button } from '@chakra-ui/react'
import {
  ThemeEditorButton,
  ThemeEditorProvider,
  ThemeEditorDrawer,
  ThemeEditor,
  ThemeEditorDrawerFooter,
  useThemeEditor,
} from '../src'

export default {
  title: 'HyperThemeEditor/chakra-ui-core/ThemeEditorDrawerFooter',
  component: ThemeEditorDrawerFooter,
  argTypes: {},
} as Meta<typeof ThemeEditorDrawerFooter>

export const DefaultFooter = (args) => (
  <ThemeEditorProvider>
    <ThemeEditor>
      <ThemeEditorButton />
      <ThemeEditorDrawer footerComponent={<ThemeEditorDrawerFooter {...args} />} />
    </ThemeEditor>
  </ThemeEditorProvider>
)

// export const WithCustomActionButton = (args) => {
//   const CustomSaveButton = () => {
//     const { theme } = useThemeEditor()

//     const handleClick = () => {
//       // eslint-disable-next-line no-alert
//       alert(JSON.stringify(theme, null, 2))
//     }

//     return <Button onClick={handleClick}>Save</Button>
//   }

//   return (
//     <ThemeEditorProvider>
//       <ThemeEditor>
//         <ThemeEditorButton />
//         <ThemeEditorDrawer
//           footerComponent={
//             <ThemeEditorDrawerFooter actionButton={<CustomSaveButton />} {...args} />
//           }
//         />
//       </ThemeEditor>
//     </ThemeEditorProvider>
//   )
// }
