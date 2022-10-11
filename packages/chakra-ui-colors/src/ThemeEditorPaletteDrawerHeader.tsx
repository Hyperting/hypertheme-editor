import React, { FC, MutableRefObject } from 'react'
import {
    DrawerHeader,
    Flex,
    Box,
    IconButton,
    Divider,
    ButtonGroup,
    Button,
    Text,
    useColorMode,
} from '@chakra-ui/react'
//import { MdClose } from 'react-icons/md'
//import { RiArrowGoBackFill, RiArrowGoForwardFill } from 'react-icons/ri'
import { ColorModeToggle, useThemeEditor } from '@hypertheme-editor/chakra-ui-core'
//import ThemeEditorPalette from './ThemeEditorPalette'
import { BiArrowBack } from 'react-icons/bi'
import { BsArrow90DegLeft, BsArrow90DegRight } from 'react-icons/bs'
type Props = {
    onClose: () => void
    initialFocusRef: MutableRefObject<HTMLButtonElement>
    token: string
}

export const ThemeEditorPaletteDrawerHeader: FC<Props> = ({ onClose, initialFocusRef, token }) => {
    const { canUndo, canRedo, undo, redo, theme } = useThemeEditor()
    const { colorMode } = useColorMode()
    return (
        <DrawerHeader
            d="flex"
            alignItems="center"
            backgroundColor="rgba(0,0,0,0)"
            px={{ base: 3, lg: 6 }}
        >
            <Flex alignItems="center" w="100%" flex="1">
                { /* {theme?.colors && (
          <ThemeEditorPalette
            palette={theme?.colors[token]}
            token={token}
            w={20}
            h={{ base: 10, md: 10 }}
            mr={3}
            alignSelf="centrer"
            d={{ base: 'none', sm: 'grid' }}
            disableEditDrawer
          />
        )}*/}<Button
                    borderRadius="6px"
                    boxSize={{ base: 8, lg: 10 }}
                    onClick={onClose}
                    fontSize="1.5rem"
                    p="0.5rem"
                    ml="1rem"
                    mr='1rem'
                    ref={initialFocusRef}

                    boxShadow='xs'
                    bg={colorMode == 'light' ? 'white' : '#2B2B3Bs'}
                >
                    <BiArrowBack />
                </Button>

                <Box>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} textTransform="capitalize" mb='0.1rem'>
                        {token} palette
                    </Text>
                    <Flex alignItems="center" >
                        <ColorModeToggle p={0} w="auto" fontSize="0.875rem" mr='0.5rem' />
                        <ButtonGroup size="xs" borderRadius="md" isAttached overflow="hidden" boxShadow='md'>
                            <IconButton
                                //icon={<RiArrowGoBackFill />}
                                icon={<BsArrow90DegLeft />}

                                aria-label="undo"
                                disabled={!canUndo}
                                onClick={undo}
                                border='1px solid #bcbcbc'
                                bg={colorMode == 'light' ? 'white' : '#2B2B3Bs'}
                            />

                            <Divider orientation="vertical" />
                            <IconButton
                                // icon={<RiArrowGoForwardFill />}
                                icon={<BsArrow90DegRight />}
                                aria-label="redo"
                                disabled={!canRedo}
                                onClick={redo}
                                bg={colorMode == 'light' ? 'white' : '#2B2B3B'}
                                border='1px solid #bcbcbc'
                            />
                        </ButtonGroup>
                    </Flex>
                </Box>
            </Flex>

            {/* <ButtonGroup size="sm" borderRadius="md" isAttached overflow="hidden">
                <IconButton
                    icon={<RiArrowGoBackFill />}
                    aria-label="undo"
                    disabled={!canUndo}
                    onClick={undo}
                />

                <Divider orientation="vertical" />
                <IconButton
                    icon={<RiArrowGoForwardFill />}
                    aria-label="redo"
                    disabled={!canRedo}
                    onClick={redo}
                />
            </ButtonGroup>

           <Button
                borderRadius="6px"
                boxSize={{ base: 12, lg: 14 }}
                onClick={onClose}
                fontSize="1.5rem"
                p="0.5rem"
                ml="1rem"
                ref={initialFocusRef}
            >
                <MdClose />
            </Button>*/}
        </DrawerHeader>
    )
}