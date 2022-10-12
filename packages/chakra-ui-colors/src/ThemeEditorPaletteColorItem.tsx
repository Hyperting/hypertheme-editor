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
    Button,
    Icon,
    useColorMode,
} from '@chakra-ui/react'
import { useDebouncyEffect } from 'use-debouncy'
import { RgbaStringColorPicker } from 'react-colorful'
import { colord, extend } from 'colord'
import namesPlugin from 'colord/plugins/names'
import { HiOutlineTrash } from 'react-icons/hi'
import { COLOR_PICKER_TRANSPARENT_SAFE_BG_B64 } from './constants'
import ThemeEditorPalette from './ThemeEditorPalette'
import { ElementsHighlighter } from '@hypertheme-editor/chakra-ui-core'

extend([namesPlugin])

export type ThemeEditorPaletteColorItemProps = {
    title: string
    palette?: Record<string | number, string>
    scale?: (string | number)[]
    value?: string
    token: string
    onChange: (value: { token: string; value: string }) => void
    onDelete?: (token: string) => void
    hasDelete?: boolean
    showIndex?: boolean
} & Omit<BoxProps, 'onChange'>

const ThemeEditorPaletteColorItem: FC<ThemeEditorPaletteColorItemProps> = ({
    p,
    px,
    palette,
    title = 'Primary',
    token,
    scale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    value,
    onChange,
    hasDelete,
    onDelete,
    showIndex,
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

    const handleDelete = useCallback(() => {
        if (onDelete) {
            onDelete(token)
        }
    }, [onDelete, token])

    useDebouncyEffect(
        () => {
            if (colord(currentValue as any).isValid() && currentValue !== value) {
                onChange({ token, value: currentValue! })
            }
        },
        500,
        [currentValue]
    )

    useEffect(() => {
        setCurrentValue(value)
    }, [value])

    // useEffect(() => {
    //   if (onChange && isColor(debouncedValue)) {
    //     onChange({ token, value: debouncedValue })
    //   }
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [debouncedValue])
    const { colorMode } = useColorMode()
    return (
        <Box w="100%" {...rest} >
            <Text m={0} p={0} px={px} fontSize="0.875rem" textTransform="capitalize" color='gray.400'>
                {title}
            </Text>
            <Flex alignItems="center" p={p} px={px} pos="relative" minH="48px" ml='0.5em'>
                <Popover trigger="hover" placement="bottom-start">
                    <ElementsHighlighter themeKeys={`colors.${token}${palette ? '.500' : ''}`}>
                        <PopoverTrigger>
                            <Box
                                borderRadius="full"
                                bgSize="cover"
                                bgImage={`url(data:image/png;base64,${safeB64Bg})`}
                                cursor="pointer"
                                transition="all 0.25s"
                                mr="0.75rem"
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
                    <PopoverContent w="min-content">
                        <PopoverBody p="0" w="min-content">
                            <RgbaStringColorPicker color={rgbaString} onChange={setCurrentValue} />
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                <ElementsHighlighter
                    themeKeys={
                        palette && scale?.length && scale.length > 0
                            ? scale.map((s) => `colors.${token}.${s}`)
                            : `colors.${token}${palette ? '.500' : ''}`
                    }
                >
                    <Input
                        //  w={palette && scale && scale.length > 0 ? 32 : '100%'}
                        width='10.125rem'
                        height='40px'
                        // size='sm'
                        variant='filled'
                        borderRadius="6px"
                        //shadow={shadow}
                        border='none'
                        cursor="pointer"
                        px="0.5rem"
                        pos="sticky"
                        left="0"
                        value={currentValue}
                        onChange={handleValueChange}
                        fontSize="0.875rem"
                        bgColor={colorMode == 'light' ? '' : '#14141F'}
                        placeholder="Color code"
                    />
                </ElementsHighlighter>
                {palette && scale && scale.length > 0 && (
                    <ThemeEditorPalette palette={palette} token={token}
                        // showIndex={showIndex} 
                        mx={3} />
                )}
                {hasDelete && (
                    <Button
                        size="xl"

                        aria-label="remove color"
                        variant="ghost"
                        onClick={handleDelete}
                        px="0.5rem"
                        opacity={0.5}
                        _hover={{
                            color: 'red.500',
                            opacity: 1,
                        }}

                    >
                        <Icon size='lg' as={HiOutlineTrash} color={colorMode == 'light' ? 'gray.300' : 'gray.100'} />
                    </Button>
                )}
            </Flex>
        </Box>
    )
}

export default ThemeEditorPaletteColorItem
