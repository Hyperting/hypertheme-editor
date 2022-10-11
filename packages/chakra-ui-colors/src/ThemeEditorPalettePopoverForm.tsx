import React, { FC, useState, useCallback, useMemo } from 'react'
import {
    Button,
    ButtonGroup,
    ButtonProps,
    FormControl,
    FormLabel,
    Icon,
    Input,
    InputProps,
    Popover,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Stack,
    Switch,
    useDisclosure,
    Flex,
    PopoverFooter,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    setThemeColorsOfPalette,
    setThemeSingleColor,
    useThemeEditor,
} from '@hypertheme-editor/chakra-ui-core'
import ThemeEditorPaletteColorItem from './ThemeEditorPaletteColorItem'
import { generatePalette } from './generateColorPalette'

import { IconStepperContainer } from './Stepper/IconStepperContainer'
import { FaPlus } from 'react-icons/fa'


type Props = {
    buttonProps?: ButtonProps
}

const initialFormValues = {
    name: '',
    isPaletteColor: true,
}

const TextInput: FC<InputProps & { label?: string; ref: any }> = React.forwardRef<any, any>(
    (props, ref) => {
        return (
            <FormControl>
                <FormLabel fontSize="sm" htmlFor={props.id}>
                    {props.label}
                </FormLabel>
                <Input ref={ref} id={props.id} size="sm" borderRadius="md" {...props} />
            </FormControl>
        )
    }
)

export const ThemeEditorPalettePopoverForm: FC<Props> = (props) => {
    const { buttonProps } = props

    const { onOpen, onClose, isOpen } = useDisclosure()
    const [tempPalette, setTempPalette] = useState<Record<number, string> | undefined>(undefined)
    const initialFocusRef = React.useRef(null)
    const { theme, setTheme } = useThemeEditor()
    const [formState, setFormState] = useState<Record<string, any>>(initialFormValues)

    const handleInputChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
        (event) => {
            const { target } = event
            const value = target.type === 'checkbox' ? target.checked : target.value
            const { name } = target

            if (name === 'isPaletteColor' && formState.color) {
                if (value) {
                    setTempPalette(generatePalette(formState.color))
                } else {
                    setTempPalette(undefined)
                }
            }

            setFormState({
                ...formState,
                [name]: value,
            })
        },
        [formState]
    )

    const handleColorChange = useCallback(
        ({ token, value }) => {
            setFormState({
                ...formState,
                color: value,
            })

            if (formState.isPaletteColor) {
                setTempPalette(generatePalette(value))
            } else {
                setTempPalette(undefined)
            }
        },
        [formState]
    )

    const handleCreateCustomColor = useCallback(() => {
        try {
            const token = formState.name.toLowerCase()
            const newPalette = generatePalette(formState.color)
            const newTheme = {
                ...theme,
                colors: {
                    ...theme!.colors,
                    [token]: formState.isPaletteColor ? newPalette : formState.color,
                },
            } as any

            if (formState.isPaletteColor) {
                setThemeColorsOfPalette(token, newPalette)
            } else {
                setThemeSingleColor(token, formState.color)
            }

            setTheme(newTheme)
            setFormState(initialFormValues)
            setTempPalette(undefined)
            onClose()
        } catch (error) {
            //
        }
    }, [formState.color, formState.isPaletteColor, formState.name, onClose, setTheme, theme])

    const isFormValid = useMemo(() => formState.name && formState.color, [formState])
    const bgColor = useColorModeValue('#EBF7F0', '#FFFFFF')
    return (
        <IconStepperContainer>
            <Popover
                isOpen={isOpen}
                initialFocusRef={initialFocusRef}
                onOpen={onOpen}
                onClose={onClose}
                placement="bottom"
                closeOnBlur={false}
                trigger="click"


            >
                <PopoverTrigger>

                    <Button
                        width='72px'
                        height='32px'
                        boxShadow='md'
                        rounded='md'
                        bgColor='bgColor'
                        color='#6FCF97'
                        alignSelf="flex-start"
                        //px="2.5rem"
                        //mt="0.75rem"
                        p='16px 8px 16px 8px'
                        mt='1.9rem'
                        ml='0.5em'
                        mb='1em'
                        isFullWidth
                        {...buttonProps}

                    >
                        {/* <Icon as={FaPlus} mr="0.25rem" /> Add */}
                        {props.children}
                    </Button>
                </PopoverTrigger>
                <PopoverContent minW="380px" zIndex='10000'
                >
                    {/* <PopoverArrow /> */}
                    <PopoverCloseButton />
                    <PopoverHeader fontWeight="bold" textAlign="left">
                        Add Color
                    </PopoverHeader>
                    <PopoverBody zIndex='1000'>
                        <Stack spacing={4} mt={4} mb={2}>
                            {/* <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Box
                boxSize={8}
                bg={"red"}
                // bg={`${palette[500]}`}
                // shadow={shadow}
                border="3px solid"
                borderColor="rgba(220,220,220,0.4)"
                borderRadius="full"
              />
            </PopoverTrigger>
            <PopoverContent w="min-content">
              <PopoverBody p="0" w="min-content">
                <RgbaStringColorPicker
                  color={"red"}
                  onChange={handleColorChange}
                />
              </PopoverBody>
            </PopoverContent>
          </Popover> */}

                            <TextInput
                                label="Color name"
                                placeholder="Color name"
                                name="name"
                                id="name"
                                value={formState?.name}
                                onChange={handleInputChange}
                                ref={initialFocusRef}
                            // border='none'

                            />

                            <Flex alignItems="center">
                                <ThemeEditorPaletteColorItem
                                    title="New color"
                                    token="newColor"
                                    palette={tempPalette}
                                    onChange={handleColorChange}
                                    textAlign="left"
                                    w="100%"
                                />
                                <Flex direction="column" w="auto" ml={2}>
                                    <FormLabel htmlFor="is-palette-color" fontSize="sm" mr={0}>
                                        Palette
                                    </FormLabel>
                                    <Switch
                                        id="is-palette-color"
                                        name="isPaletteColor"
                                        isChecked={formState?.isPaletteColor}
                                        onChange={handleInputChange}
                                        colorScheme="primary"
                                        size="md"
                                        alignSelf="flex-end"
                                    />
                                </Flex>
                            </Flex>
                        </Stack>
                    </PopoverBody>
                    <PopoverFooter>
                        <ButtonGroup d="flex" justifyContent="flex-end">
                            <Button onClick={onClose} size="sm">
                                Cancel
                            </Button>
                            <Button
                                onClick={handleCreateCustomColor}
                                isDisabled={!isFormValid}
                                colorScheme="primary"
                                size="sm"
                            >
                                Create color
                            </Button>
                        </ButtonGroup>
                    </PopoverFooter>
                </PopoverContent>
            </Popover></IconStepperContainer>
    )
}
