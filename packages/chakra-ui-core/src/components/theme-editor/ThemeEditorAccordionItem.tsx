import React, { FC } from 'react'
import {
    Box,
    Text,
    AccordionItemProps,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    Circle,
    useColorModeValue,
    useColorMode,
    ThemingProps,
    As,
    Tag,
    Flex,
    Collapse,
    Icon as ChakraIcon,

} from '@chakra-ui/react'
import { FaLock, FaPlus } from 'react-icons/fa'
import { PopoverComponent } from './Popover/PopoverComponent'


export type ThemeEditorAccordionItemProps = {
    title?: string
    subtitle?: string
    icon?: As
    endIcon?: As
    tag?: string
    unmountOnExit?: boolean
} & AccordionItemProps &
    Pick<ThemingProps, 'colorScheme'>
//



export const ThemeEditorAccordionItem: FC<ThemeEditorAccordionItemProps> = (props) => {

    const {
        title = 'Accordion title',
        subtitle,
        colorScheme = 'gray',
        icon: Icon,
        tag,
        children,
        isDisabled,

        unmountOnExit = true,
        ...rest
    } = props
    const hoverBgColor = useColorModeValue('gray.200', 'gray.700')
    const bgColor = useColorModeValue(`${colorScheme}.200`, `${colorScheme}.900`)
    const { colorMode } = useColorMode()
    const ref = React.useRef()





    return (
        <AccordionItem isDisabled={isDisabled} {...rest}   >
            {({ isExpanded }) => (
                <>
                    <AccordionButton
                        //changes
                        height={title == 'Colors' ? '76px' : '56px'}
                        mb={title == 'Colors' ? '-0.2em' : ''}

                        boxShadow={isExpanded ? 'base' : 'none'}
                        bgColor={isExpanded && colorMode == 'dark' ? '#2B2B3B' : ''}
                        color={colorMode == 'light' ? 'gray.700' : 'white'}
                        p={{ base: 3, sm: 4 }}
                        // borderRadius={rest.borderRadius || 'md'}
                        borderRadius='12px'
                        _hover={{ bgColor: hoverBgColor }}



                    >
                        {Icon && (
                            <Circle
                                boxSize="25px"
                                bgColor={`${colorScheme}.200`}
                                color={`${colorScheme}.600`}
                                fontSize="0.875rem"
                                // mr="0.5rem"
                                mr='1rem'
                            >
                                <Icon />
                            </Circle>
                        )}
                        <Flex direction="column" textAlign="left" w="full" >

                            <Text flex="1" fontWeight="bold" d="flex" justifyContent="space-between" fontSize='lg'>
                                {title}
                                {tag && (
                                    <Tag
                                        colorScheme={colorScheme}
                                        size="sm"
                                        ml="0.5rem"
                                        bgColor={bgColor}
                                        px="0.25rem"
                                    >
                                        {tag}
                                    </Tag>
                                )}
                            </Text>
                            {subtitle && !isExpanded && (

                                <Text flex="1"
                                    fontSize="15px"
                                    // fontSize="0.75rem" 
                                    color='#B1B5C3'>
                                    {subtitle}
                                </Text>
                            )}
                            <Text flex="1" fontSize="15px" color='#B1B5C3'>
                                {title == 'Colors' ? 'Change colors, create new one, generate palette..' : ''}
                            </Text>

                        </Flex>
                        {title == "Custom colors" && isExpanded && (
                            // <PopoverComponent>
                            <Circle bgColor={colorMode === 'light' ? 'green.100' : 'gray.900'} w='30px' h='30px' > <ChakraIcon as={FaPlus} color='green.400' size='40%' />
                            </Circle>
                            // </PopoverComponent>
                        )}
                        {!isDisabled ? <AccordionIcon ml="0.5rem" /> : <ChakraIcon as={FaLock} />}
                    </AccordionButton>
                    <Collapse in={isExpanded && !isDisabled} unmountOnExit={unmountOnExit}>
                        <Box
                            //  boxShadow='md'
                            boxSize="100%"
                            p="0.5rem"
                            sx={{
                                ' > *': {
                                    w: 'full',
                                    px: '0.5rem',
                                    py: '0.5rem',
                                    borderRadius: 'none',
                                },
                            }}
                        >
                            {children}
                        </Box>
                    </Collapse>
                </>
            )}
        </AccordionItem>
    )
}

export default ThemeEditorAccordionItem



