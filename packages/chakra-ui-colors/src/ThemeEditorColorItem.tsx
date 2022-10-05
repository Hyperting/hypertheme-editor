import React, { FC, useCallback, useState, useEffect, useMemo } from 'react'
import {
    Box,
    Flex,
    BoxProps,
    useColorModeValue,
    Input,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Circle
} from '@chakra-ui/react'
import { useDebouncyEffect } from 'use-debouncy'
import { RgbaStringColorPicker } from 'react-colorful'
import { colord, extend } from 'colord'
import namesPlugin from 'colord/plugins/names'
import { COLOR_PICKER_TRANSPARENT_SAFE_BG_B64 } from './constants'
import { ElementsHighlighter } from '@hypertheme-editor/chakra-ui-core'
//
import { FaLink } from 'react-icons/fa'
import { BiCopy } from 'react-icons/bi'

extend([namesPlugin])

export type ThemeEditorColorItemProps = {
    title: string
    value?: string
    token: string
    colorIndex: number
    onChange: (value: { token: string; colorIndex: number; value: string }) => void
} & Omit<BoxProps, 'onChange'>

const ThemeEditorColorItem: FC<ThemeEditorColorItemProps> = ({
    p,
    px,
    title = 'Primary',
    token,
    colorIndex,
    value,
    onChange,
    ...rest
}) => {
    const [currentValue, setCurrentValue] = useState<string | undefined>(value)

    const rgbaString = useMemo(() => {
        if (!currentValue) {
            return '#ffffff'
        }
        return currentValue.startsWith('rgba') ? currentValue : colord(currentValue).toRgbString()
    }, [currentValue])

    const shadow = useColorModeValue('surface', 'surfaceDark')
    const safeB64Bg = useColorModeValue(
        COLOR_PICKER_TRANSPARENT_SAFE_BG_B64[0],
        COLOR_PICKER_TRANSPARENT_SAFE_BG_B64[1]
    )

    const handleValueChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
        setCurrentValue(event.target.value)
    }, [])

    useDebouncyEffect(
        () => {
            if (colord(currentValue as any).isValid() && currentValue !== value) {
                onChange({ token, colorIndex, value: currentValue! })
            }
        },
        500,
        [currentValue]
    )

    useEffect(() => {
        setCurrentValue(value)
    }, [value])

    return (
        <Box w="100%" {...rest} >
            { /* <Text mb={1} p={p} px={px} fontSize="0.875rem" textTransform="capitalize">
                {title}
            </Text>*/}
            <Flex alignItems="center" p={p} px={px} pos="relative" minH="40px" width='100%' justifyContent='space-between'>
                <Popover trigger="hover" placement='bottom-start' >
                    <ElementsHighlighter themeKeys={`colors.${token}.${colorIndex}`} >
                        <PopoverTrigger >
                            <Box
                                borderRadius="full"
                                bgSize="cover"
                                bgImage={`url(data:image/png;base64,${safeB64Bg})`}
                                cursor="pointer"
                                transition="all 0.25s"
                                // mr="0.75rem"
                                _hover={{
                                    shadow: 'md',
                                }}
                            >
                                <Box
                                    boxSize={8}
                                    bg={currentValue}
                                    shadow={shadow}
                                    border="3px solid"
                                    borderColor="rgba(220,220,220,0.4)"
                                    borderRadius="full"
                                    minW={8}
                                />
                            </Box>
                        </PopoverTrigger>
                    </ElementsHighlighter>
                    <PopoverContent w="min-content" >
                        <PopoverBody p="0" w="min-content" >
                            <RgbaStringColorPicker color={rgbaString} onChange={setCurrentValue} />
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                <Text color='gray.500' mb={1} p={p} px={px} fontSize="0.875rem" textTransform="capitalize" >
                    {colorIndex}
                </Text>
                <ElementsHighlighter themeKeys={`colors.${token}.${colorIndex}`}>
                    <Input
                        width='270px'
                        variant='filled'
                        //w="100%"
                        //size="sm"
                        size='md'
                        borderRadius="6px"
                        shadow={shadow}
                        cursor="pointer"
                        px="0.5rem"
                        pos="sticky"
                        left="0"
                        value={currentValue}
                        onChange={handleValueChange}
                        fontSize="0.875rem"
                        placeholder="Color code"
                        border='none'

                    />
                </ElementsHighlighter>
                <Circle ><BiCopy color='gray' /></Circle>
            </Flex>
        </Box>
    )
}

export default ThemeEditorColorItem
