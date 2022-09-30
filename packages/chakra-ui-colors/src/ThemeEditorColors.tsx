import React, { FC, useCallback, useMemo } from 'react'
import { Accordion } from '@chakra-ui/react'
import { CgColorPicker } from 'react-icons/cg'
import {
    useThemeEditor,
    ThemeEditorAccordionItem,
    EmptyBox,
    themeColorKeys,
    ThemeEditorRootPanelProps,
} from '@hypertheme-editor/chakra-ui-core'
import ThemeEditorPaletteColorItem from './ThemeEditorPaletteColorItem'
import { ThemeEditorPalettePopoverForm } from './ThemeEditorPalettePopoverForm'
import { generatePalette } from './generateColorPalette'

//my modifications
import { StepperContainer } from './StepperContainer'



type Props = {
    //
} & Partial<ThemeEditorRootPanelProps>

export const ThemeEditorColors: FC<Props> = (props) => {
    const { theme, setTheme } = useThemeEditor()

    const handleChangeColor = useCallback(
        ({ token, value }) => {
            if (theme && theme.colors && theme.colors[token]) {
                if (typeof theme.colors[token] === 'string' && theme.colors[token] !== value) {
                    try {
                        const newTheme = {
                            ...theme,
                            colors: {
                                ...theme.colors,
                                [token]: value,
                            },
                        } as any
                        // setThemeSingleColor(token, value)
                        setTheme(newTheme)
                    } catch (error) {
                        //
                    }
                } else {
                    try {
                        const newColorPalette = generatePalette(value)
                        const newTheme = {
                            ...theme,
                            colors: {
                                ...theme.colors,
                                [token]: newColorPalette,
                            },
                        } as any
                        setTheme(newTheme)
                    } catch (error) {
                        //
                    }
                }
            }
        },
        [setTheme, theme]
    )

    const handleDeleteCustomColor = useCallback(
        (token: string) => {
            if (theme?.colors && theme.colors[token]) {
                const newThemeColors = {
                    ...theme?.colors,
                }
                delete newThemeColors[token]
                setTheme({ ...theme, colors: newThemeColors })
            }
        },
        [setTheme, theme]
    )

    const customColorTokens = useMemo(() => {
        if (!theme || !theme.colors) {
            return []
        }

        return Object.keys(theme.colors).filter((item) => themeColorKeys.indexOf(item) === -1)
    }, [theme])

    return (
        <Accordion p={0} mr="-1rem" defaultIndex={0} allowToggle theme={theme}>
            <StepperContainer>
                <ThemeEditorAccordionItem
                    title="Custom colors"
                    fontSize="lg"
                    subtitle="Add your colors here (click 'Add Color')"
                    border='none'
                >
                    {customColorTokens.map((item, index) => {
                        return (
                            <ThemeEditorPaletteColorItem
                                key={`theme-custom-color-${item}`}
                                token={item}
                                title={item}
                                palette={typeof theme!.colors![item] === 'string' ? undefined : theme!.colors![item]}
                                value={
                                    typeof theme!.colors![item] === 'string'
                                        ? (theme?.colors![item] as string)
                                        : theme!.colors![item][500]
                                }
                                onChange={handleChangeColor}
                                hasDelete
                                onDelete={handleDeleteCustomColor}
                                showIndex

                            />
                        )
                    })}
                    {customColorTokens.length == 0 ? (
                        <EmptyBox
                            w="100%"
                            h="auto"
                            title="No custom colors"
                            subtitle="Add your first custom color:"
                            spacing={1}
                            icon={CgColorPicker}


                        >
                            <ThemeEditorPalettePopoverForm buttonProps={{ colorScheme: 'primary', size: 'sm' }} />
                        </EmptyBox>
                    ) : (
                        <ThemeEditorPalettePopoverForm />
                    )}
                </ThemeEditorAccordionItem>
            </StepperContainer>
            <StepperContainer>
                <ThemeEditorAccordionItem title="Tint" fontSize="lg" border='none' >

                    <ThemeEditorPaletteColorItem
                        token="blue"
                        title="Blue"
                        palette={theme?.colors?.blue as any}
                        value={`${theme?.colors?.blue[500]}`}
                        onChange={handleChangeColor}
                        showIndex
                    />
                    <ThemeEditorPaletteColorItem
                        token="red"
                        title="Red"
                        palette={theme?.colors?.red as any}
                        value={`${theme?.colors?.red[500]}`}
                        onChange={handleChangeColor}
                        showIndex
                    />
                    <ThemeEditorPaletteColorItem
                        token="green"
                        title="Green"
                        palette={theme?.colors?.green as any}
                        value={`${theme?.colors?.green[500]}`}
                        onChange={handleChangeColor}
                        showIndex
                    />
                    <ThemeEditorPaletteColorItem
                        token="orange"
                        title="Orange"
                        palette={theme?.colors?.orange as any}
                        value={`${theme?.colors?.orange[500]}`}
                        onChange={handleChangeColor}
                        showIndex
                    />
                    <ThemeEditorPaletteColorItem
                        token="yellow"
                        title="Yellow"
                        palette={theme?.colors?.yellow as any}
                        value={`${theme?.colors?.yellow[500]}`}
                        onChange={handleChangeColor}
                        showIndex
                    />
                    <ThemeEditorPaletteColorItem
                        token="purple"
                        title="Purple"
                        palette={theme?.colors?.purple as any}
                        value={`${theme?.colors?.purple[500]}`}
                        onChange={handleChangeColor}
                        showIndex
                    />
                    <ThemeEditorPaletteColorItem
                        token="teal"
                        title="Teal"
                        palette={theme?.colors?.teal as any}
                        value={`${theme?.colors?.teal[500]}`}
                        onChange={handleChangeColor}
                        showIndex
                    />
                    <ThemeEditorPaletteColorItem
                        token="cyan"
                        title="Cyan"
                        palette={theme?.colors?.cyan as any}
                        value={`${theme?.colors?.cyan[500]}`}
                        onChange={handleChangeColor}
                        showIndex
                    />
                    <ThemeEditorPaletteColorItem
                        token="pink"
                        title="Pink"
                        palette={theme?.colors?.pink as any}
                        value={`${theme?.colors?.pink[500]}`}
                        onChange={handleChangeColor}
                        showIndex
                    />
                </ThemeEditorAccordionItem></StepperContainer>
            <StepperContainer>
                <ThemeEditorAccordionItem title="Grayscale" fontSize="lg" border='none' >
                    <ThemeEditorPaletteColorItem
                        token="gray"
                        title="Gray"
                        palette={theme?.colors?.gray as any}
                        value={theme?.colors?.gray[500]}
                        onChange={handleChangeColor}
                        showIndex
                    />
                </ThemeEditorAccordionItem></StepperContainer>
            <StepperContainer>
                <ThemeEditorAccordionItem title="Alpha" fontSize="lg" border='none' >

                    <ThemeEditorPaletteColorItem
                        title="WhiteAlpha"
                        token="whiteAlpha"
                        palette={theme?.colors?.whiteAlpha as any}
                        value={theme?.colors?.whiteAlpha[500]}
                        onChange={handleChangeColor}
                        showIndex
                    />
                    <ThemeEditorPaletteColorItem
                        title="BlackAlpha"
                        token="blackAlpha"
                        palette={theme?.colors?.blackAlpha as any}
                        value={theme?.colors?.blackAlpha[500]}
                        onChange={handleChangeColor}
                        showIndex
                    />
                </ThemeEditorAccordionItem></StepperContainer>

        </Accordion>
    )
}
