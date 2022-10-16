import React, { FC, useCallback, useMemo } from 'react'
import { Accordion, Box, Button, Circle, Icon, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { CgColorPicker } from 'react-icons/cg'
import {
    useThemeEditor,
    useAccordionState,
    ThemeEditorAccordionItem,
    EmptyBox,
    themeColorKeys,
    ThemeEditorRootPanelProps,
} from '@hypertheme-editor/chakra-ui-core'
import ThemeEditorPaletteColorItem from './ThemeEditorPaletteColorItem'
import { ThemeEditorPalettePopoverForm } from './ThemeEditorPalettePopoverForm'
import { generatePalette } from './generateColorPalette'
import { COLOR_EXPANDED_INDEX_LOCAL_STORAGE_KEY } from './constants'

//my modifications
import { StepperContainer } from './Stepper/StepperContainer'
import { IconStepperContainer } from './Stepper/IconStepperContainer'
import { BiGridVertical } from 'react-icons/bi'
import { FaPlus } from 'react-icons/fa'

type Props = {} & Partial<ThemeEditorRootPanelProps>

export const ThemeEditorColors: FC<Props> = (props) => {
    const { theme, setTheme } = useThemeEditor()
    const [defaultIndex, setDefaultIndex] = useAccordionState(COLOR_EXPANDED_INDEX_LOCAL_STORAGE_KEY)

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

    const { colorMode } = useColorMode()
    const bgCircle = useColorModeValue('gray.300', 'gray.600')
    return (
        <Accordion p={1} ml="1.2em" mr="1.2em" mdefaultIndex={0} allowToggle

        >

            <StepperContainer >
                <ThemeEditorAccordionItem
                    color="gray.600"
                    fontSize="md"
                    title='Custom colors'
                    collapsedSubtitle="Manage your colors"
                    border="none"
                    shadow="none"
                    mt={1}

                    ml={3}
                    customHeight='56px'
                    rightComponent={<ThemeEditorPalettePopoverForm

                        triggerComponent={
                            <Circle
                                bgColor={colorMode === 'light' ? 'green.100' : 'gray.900'}
                                _hover={{ bgColor: bgCircle }}
                                w="30px"
                                h="30px"
                                mr='0.5em'
                            >
                                <Icon as={FaPlus} color="green.400" size="40%" />
                            </Circle>
                        } />}
                >
                    {customColorTokens.map((item, index) => {
                        //added a box with the bi-grid icon
                        return (
                            <IconStepperContainer>
                                <Box
                                    pos="absolute"
                                    bgColor={colorMode === 'light' ? 'gray.400' : 'gray'}
                                    width="16px"
                                    height="16px"
                                    borderRadius="50%"
                                    marginLeft="-1.9em"
                                    marginTop="2.5em"
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    zIndex="10"
                                >
                                    <BiGridVertical size="90%" color={colorMode === 'light' ? 'white' : 'white'} />
                                </Box>
                                <ThemeEditorPaletteColorItem
                                    key={`theme-custom-color-${item}`}
                                    token={item}
                                    title={item}
                                    palette={
                                        typeof theme!.colors![item] === 'string' ? undefined : theme!.colors![item]
                                    }
                                    value={
                                        typeof theme!.colors![item] === 'string'
                                            ? (theme?.colors![item] as string)
                                            : theme!.colors![item][500]
                                    }
                                    onChange={handleChangeColor}
                                    hasDelete
                                    onDelete={handleDeleteCustomColor}
                                    showIndex
                                    mt="-1"
                                />
                            </IconStepperContainer>
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
                            zIndex="100000"
                        >
                            <ThemeEditorPalettePopoverForm

                                triggerComponent={
                                    <Button
                                        width='72px'
                                        height='32px'
                                        boxShadow='md'
                                        rounded='md'
                                        colorScheme='primary'
                                        // size='sm'
                                        px="2.5rem"
                                        p='16px 8px 16px 8px'
                                        mt='1.9rem'
                                        ml='0.5em'
                                        mb='1em'
                                        isFullWidth><Icon as={FaPlus} mr="0.25rem" /> Add </Button>
                                } />
                        </EmptyBox>
                    ) : (
                        <IconStepperContainer>

                            <ThemeEditorPalettePopoverForm
                                triggerComponent={
                                    <Button
                                        width='72px'
                                        height='32px'
                                        boxShadow='md'
                                        rounded='md'
                                        bgColor='bgColor'
                                        color='#6FCF97'
                                        alignSelf="flex-start"
                                        px="2.5rem"
                                        p='16px 8px 16px 8px'
                                        mt='1.9rem'
                                        ml='0.5em'
                                        mb='1em'
                                        isFullWidth><Icon as={FaPlus} mr="0.25rem" /> Add </Button>
                                } />
                        </IconStepperContainer>
                    )}
                </ThemeEditorAccordionItem>
            </StepperContainer>
            <StepperContainer>
                <ThemeEditorAccordionItem
                    title="Tint"
                    color="gray.600"
                    fontSize="md"
                    border="none"
                    mt={2}
                    ml={3}
                >
                    <ThemeEditorPaletteColorItem
                        token="blue"
                        title="Blue"
                        palette={theme?.colors?.blue as any}
                        value={`${theme?.colors?.blue[500]}`}
                        onChange={handleChangeColor}
                        showIndex
                        borderBottom="2px solid gray.300"
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
                </ThemeEditorAccordionItem>
            </StepperContainer>
            <StepperContainer>
                <ThemeEditorAccordionItem
                    title="Grayscale"
                    color="gray.600"
                    fontSize="md"
                    border="none"
                    mt='0.35em'
                    ml={3}
                >
                    <ThemeEditorPaletteColorItem
                        token="gray"
                        title="Gray"
                        palette={theme?.colors?.gray as any}
                        value={theme?.colors?.gray[500]}
                        onChange={handleChangeColor}
                        showIndex
                    />
                </ThemeEditorAccordionItem>
            </StepperContainer>
            <StepperContainer>
                <ThemeEditorAccordionItem
                    title="Alpha"
                    color="gray.600"
                    fontSize="md"
                    border="none"
                    mt='0.35em'
                    ml={3}
                >
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
                </ThemeEditorAccordionItem>
            </StepperContainer>
        </Accordion>
    )
}
