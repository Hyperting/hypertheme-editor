import React, { FC } from 'react'
import { AccordionProps, Accordion, useColorModeValue, Stack } from '@chakra-ui/react'

export type ThemeEditorAccordionProps = {

    children?: any
} & AccordionProps

export const ThemeEditorAccordion: FC<ThemeEditorAccordionProps> = (props) => {
    const { children, ...rest } = props
    const shadow = useColorModeValue('surface', 'surfaceDark')

    const bgColor = useColorModeValue('white', 'gray.800')

    return (
        <Accordion as={Stack} defaultIndex={0} borderRadius="md" w="100%" spacing="1rem" boxShadow='base' p={1}   {...rest} >
            {React.Children.map(children, (child, key) => {
                return React.cloneElement(child, {
                    shadow,
                    bgColor,
                    borderRadius: rest.borderRadius || 'md',
                    borderWidth: 0,
                    key,
                    border: 'none',

                })
            })}
        </Accordion>
    )
}

export default ThemeEditorAccordion
