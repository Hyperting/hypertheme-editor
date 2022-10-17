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
                    bgColor={colorMode == 'light' ? 'white' : 'gray.700'}
                >
                    <BiArrowBack />
                </Button>

                <Box>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} textTransform="capitalize" mb='0.1rem'>
                        {token} palette
                    </Text>
                    <Flex alignItems="center" >
                        <ColorModeToggle p={0} w="auto" fontSize="0.875rem" mr='0.5rem' />

                        <ButtonGroup
                            size="xs"
                            borderRadius="md"
                            boxShadow="0px 4px 8px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.2)"
                            isAttached
                            overflow="hidden"
                        >
                            <IconButton
                                icon={<BsArrow90DegLeft />}
                                fontSize="16px"
                                height="27px"
                                width="27px"
                                aria-label="undo"
                                disabled={!canUndo}
                                onClick={undo}
                                variant="outline"
                                border="none"
                                color={colorMode == 'light' ? 'gray.600' : 'gray.100'}
                                bgColor={colorMode == 'light' ? 'white' : 'gray.700'}
                                _focus={{ border: 'none' }}
                            />
                            <Divider orientation="vertical" height="27px" />
                            <IconButton
                                icon={<BsArrow90DegRight />}
                                fontSize="16px"
                                height="27px"
                                width="27px"
                                aria-label="redo"
                                disabled={!canRedo}
                                onClick={redo}
                                variant="outline"
                                border="none"
                                color={colorMode == 'light' ? 'gray.600' : 'gray.100'}
                                bgColor={colorMode == 'light' ? 'white' : 'gray.700'}
                                _focus={{ border: 'none' }}
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