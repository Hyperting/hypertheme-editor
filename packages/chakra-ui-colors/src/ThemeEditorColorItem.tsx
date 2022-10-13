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

    Icon,
    Tooltip,
    useColorMode,
    toast,
    useToast
} from '@chakra-ui/react'
import { useDebouncyEffect } from 'use-debouncy'
import { RgbaStringColorPicker } from 'react-colorful'
import { colord, extend } from 'colord'
import namesPlugin from 'colord/plugins/names'
import { COLOR_PICKER_TRANSPARENT_SAFE_BG_B64 } from './constants'
import { ElementsHighlighter } from '@hypertheme-editor/chakra-ui-core'

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
    const toast = useToast()

    //copy function

    //  

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


    const { colorMode } = useColorMode()

    const copyToClipBoard = async () => {
        if ("clipboard" in navigator) {
            await navigator.clipboard.writeText(currentValue || '');
            toast({
                title: 'Copied!',
                variant: 'success',
                position: 'top-right',
                duration: 2000
            })
        } else {
            document.execCommand("copy", true, currentValue || '');
        }
    }


    return (
        <Box w="100%" {...rest} >
            { /* <Text mb={1} p={p} px={px} fontSize="0.875rem" textTransform="capitalize">
                {title} bgColor={colorMode === 'light' ? 'white' : '#1E1E2F'}
            </Text>*/}
            <Flex alignItems="center" p={p} px={px} pos="relative" minH="40px" width='100%' justifyContent='space-between'  >
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
                        id="myInput"
                        width='270px'
                        height='40px'
                        variant='filled'
                        //w="100%"

                        size='sm'
                        borderRadius="8px"
                        // shadow={shadow}
                        bgColor={colorMode == 'light' ? 'gray.200' : '#14141F'}
                        cursor="pointer"
                        px="0.5rem"
                        pos="sticky"
                        left="0"
                        value={currentValue}

                        onChange={handleValueChange}

                        fontSize="0.875rem"
                        placeholder="Color code"


                    />
                </ElementsHighlighter>

                <Icon as={BiCopy} color={colorMode == 'light' ? 'gray' : 'white'} opacity='0.6' _hover={{ opacity: '0.8' }} _active={{ opacity: '1' }}
                    onClick={copyToClipBoard}></Icon>

                {/* <CopyToClipboard text={currentValue} onCopy={() => setCopied(true)}>
                        <Icon as={BiCopy} color='gray.400' _hover={{ color: 'green.500' }} _active={{ color: 'green.700' }}></Icon>
                    </CopyToClipboard> */}


            </Flex>
        </Box>
    )
}

export default ThemeEditorColorItem;
