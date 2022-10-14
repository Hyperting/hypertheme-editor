import React, { FC } from 'react'
import {
    BoxProps,
    useColorModeValue,
    Center,
    Text,
    SimpleGrid,
    useDisclosure,
    Tooltip,
    SimpleGridProps,
} from '@chakra-ui/react'
import { extend } from 'colord'
import namesPlugin from 'colord/plugins/names'
import ThemeEditorPaletteDrawer from './ThemeEditorPaletteDrawer'

extend([namesPlugin])

export type ThemeEditorPaletteProps = {
    palette: Record<string | number, string>
    scale?: (string | number)[]
    value?: string
    token: string
    showIndex?: boolean
    disableEditDrawer?: boolean
} & Omit<SimpleGridProps, 'onChange'>

const ThemeEditorPalette: FC<ThemeEditorPaletteProps> = ({
    p,
    px,
    palette,
    token,
    scale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    value,
    showIndex,
    disableEditDrawer,
    ...rest
}) => {
    const { onOpen, onClose, isOpen } = useDisclosure()
    const shadow = useColorModeValue('surface', 'surfaceDark')
    const borderColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')

    return (
        <>
            <Tooltip
                label="Edit palette"
                aria-label="Edit palette"
                openDelay={500}
                closeOnMouseDown
                hasArrow
                isDisabled={disableEditDrawer}

            >
                <SimpleGrid
                    columns={5}
                    //textAlign="center"
                    spacing={1}
                    overflow="hidden"
                    w="100%"
                    //borderRadius="6px"
                    mr='-1.5em'
                    p={0}
                    h={10}
                    //border="1px solid"
                    borderColor={borderColor}
                    onClick={onOpen}
                    {...rest}
                >
                    {scale.map((paletteIndex, key) => (
                        <Center
                            // shadow={shadow}
                            w='17.39px'

                            h='17.39px'
                            // mb='2px'
                            pr='0'
                            bgColor={palette[paletteIndex] as string}
                            fontSize="0.75rem"
                            borderColor={key < 5 ? 'whiteAlpha.600' : 'whiteAlpha.300'}
                            cursor={!disableEditDrawer ? 'pointer' : 'auto'}
                            key={key}
                            borderRadius='50%'
                        >
                            {showIndex && (
                                <Text
                                    color={token.indexOf('white') >= 0 ? 'gray.500' : palette[scale[9 - key]]}
                                    size="xs"
                                    d={{ base: 'none', md: 'inline' }}
                                >
                                    {paletteIndex}
                                </Text>
                            )}
                        </Center>
                    ))}
                </SimpleGrid>
            </Tooltip>
            {!disableEditDrawer && (
                <ThemeEditorPaletteDrawer
                    onClose={onClose}
                    isOpen={isOpen}
                    palette={palette}
                    token={token}
                />
            )}
        </>
    )
}

export default ThemeEditorPalette
