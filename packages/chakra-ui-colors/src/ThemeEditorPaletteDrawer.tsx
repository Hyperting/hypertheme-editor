import React, { FC, useCallback, useRef } from 'react'
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerProps,
    useColorModeValue,
    DrawerFooter,
    Box,
    SimpleGrid,
    useColorMode,
} from '@chakra-ui/react'
import { BaseListItem, useThemeEditor } from '@hypertheme-editor/chakra-ui-core'
import ThemeEditorColorItem from './ThemeEditorColorItem'
import { ThemeEditorPaletteDrawerHeader } from './ThemeEditorPaletteDrawerHeader'

export type ThemeEditorPaletteDrawerProps = {
    palette: Record<string | number, string>
    scale?: (string | number)[]
    token: string
    showIndex?: boolean
} & Omit<DrawerProps, 'children'>


const ThemeEditorPaletteDrawer: FC<ThemeEditorPaletteDrawerProps> = (props) => {
    const {
        onClose,
        palette,
        scale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
        token,
        ...rest
    } = props
    const { theme, setTheme } = useThemeEditor()

    const btnRef = useRef<any>()
    const closeBtnRef = useRef<any>()

    const bgColor = useColorModeValue('white', 'gray.900')
    const bgColor2 = useColorModeValue('white', 'gray.800')

    const shadow = useColorModeValue('surface', 'surfaceDark')

    const handleChangeColor = useCallback(
        ({ token, index, value }) => {
            if (theme && theme.colors && theme.colors[token] && theme.colors[token][index]) {
                if (
                    typeof theme.colors[token][index] === 'string' &&
                    theme.colors[token][index] !== value
                ) {
                    try {
                        const newTheme = {
                            ...theme,
                            colors: {
                                ...theme.colors,
                                [token]: {
                                    ...theme.colors[token],
                                    [index]: value,
                                },
                            },
                        } as any
                        // setThemeColor(token, index, value)
                        setTheme(newTheme)
                    } catch (error) {
                        //
                    }
                }
                // } else {
                //   try {
                //     const newColorPalette = generatePalette(value)
                //     const newTheme = {
                //       ...theme,
                //       colors: {
                //         ...theme.colors,
                //         [token]: newColorPalette,
                //       },
                //     } as any
                //     setThemeColorPalette(token, newColorPalette)
                //     setTheme(newTheme)
                //   } catch (error) {
                //     //
                //   }
                // }
            }
        },
        [setTheme, theme]
    )
    const { colorMode } = useColorMode()
    return (
        <Drawer
            placement="right"
            finalFocusRef={btnRef}
            initialFocusRef={closeBtnRef}
            size="md"
            blockScrollOnMount={false}
            onClose={onClose}
            {...rest}

        >
            <DrawerContent bgColor={bgColor} shadow="md" fontFamily="Sora, sans-serif" >
                <ThemeEditorPaletteDrawerHeader
                    token={token}
                    onClose={onClose}
                    initialFocusRef={closeBtnRef}
                />
                <DrawerBody pos="relative" px={{ base: 3, lg: 6 }} py={3}  >
                    <SimpleGrid columns={1} spacing={{ base: 3, lg: 4 }} >
                        {scale.map((paletteIndex, key) => (
                            <Box borderBottom='1px'
                                borderColor={colorMode == 'light' ? 'gray.200' : 'rgba(255, 255, 255, 0.1)'}
                            //boxShadow='sm'

                            >
                                <BaseListItem
                                    key={`palette-item-${key}`}
                                    //shadow={shadow}
                                    bgColor={colorMode == 'light' ? 'white' : 'gray.900'}
                                    overflow="visible"

                                >
                                    <ThemeEditorColorItem
                                        width='100%'
                                        display='flex'
                                        flexDirection='row'
                                        justifyContent='space-between'
                                        alignItems='center'

                                        title={`${token.toLowerCase()}.${paletteIndex}`}
                                        token={token}
                                        colorIndex={paletteIndex as number}
                                        value={palette[paletteIndex]}
                                        onChange={({ colorIndex, token, value }) => {
                                            handleChangeColor({ token, index: colorIndex, value })
                                        }}
                                    />

                                </BaseListItem> </Box>
                        ))}
                    </SimpleGrid>
                </DrawerBody>
                <DrawerFooter
                    textAlign="left"
                    boxShadow="xl"
                    backgroundColor={bgColor}
                    px={{ base: 3, lg: 6 }}
                    py={{ base: 2, lg: 3 }}
                >
                    <Box>
                        <Button size="md" onClick={onClose}>
                            Cancel
                        </Button>
                    </Box>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default ThemeEditorPaletteDrawer
