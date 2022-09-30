import React, { FC, useCallback, MutableRefObject } from 'react'
import {
  DrawerHeader,
  Flex,
  Box,
  IconButton,
  Icon,
  Divider,
  ButtonGroup,
  Button,
  useColorModeValue,
  HStack,
  useColorMode,
  Heading,
} from '@chakra-ui/react'
import { BsArrowClockwise } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { BsArrow90DegLeft, BsArrow90DegRight } from 'react-icons/bs'
import { useRecoilState } from 'recoil'
import { ThemeIcon, ColorModeToggle } from '../base'
import { setThemeTokens } from '../../utils/updateThemeTokens'
import { themeEditorState, useThemeEditor } from '../../hooks/useThemeEditor'

export type ThemeEditorDrawerHeaderProps = {
  onClose?: () => void
  initialFocusRef?: MutableRefObject<HTMLButtonElement>
  children?: React.ReactNode
}

export const ThemeEditorDrawerHeader: FC<ThemeEditorDrawerHeaderProps> = ({
  onClose,
  initialFocusRef,
  children,
}) => {
  const { canUndo, canRedo, undo, redo } = useThemeEditor()
  const [kitThemeState, setThemeState] = useRecoilState(themeEditorState)
  const shadow = useColorModeValue('surface', 'surfaceDark')
  const bgColor = useColorModeValue('white', 'gray.900')
  const { colorMode } = useColorMode()
  const handleResetTheme = useCallback(() => {
    setThemeState({
      ...kitThemeState,
      undoable: [],
      undone: [],
      currentTheme: kitThemeState.initialTheme,
    })
    setThemeTokens(kitThemeState.initialTheme as any)
  }, [kitThemeState, setThemeState])

  return (
    <Box pos="relative">
      {/* button as first element to let autofocus on open */}
      <Flex
        py={{ base: 2, lg: 6 }}
        pos="absolute"
        right={{ base: 3, lg: 6 }}
        top={{ base: 0, lg: 0 }}
        alignItems="flex-start"
        h="full"
      >
        <Button
          borderRadius="md"
          variant="outline"
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.2)"
          size="sm"
          onClick={onClose}
          fontSize="1rem"
          // p="0.5rem"
          color={colorMode == 'light' ? 'gray.600' : 'white'}
          bgColor={colorMode == 'light' ? 'white' : 'gray.700'}
          border="none"
          p={2}
          ref={initialFocusRef}
        >
          <Icon as={MdClose} h="18px" w="18px" />
        </Button>
      </Flex>

      <DrawerHeader
        d="flex"
        alignItems="center"
        backgroundColor={{ md: bgColor }}
        pl={{ base: 3, lg: 6 }}
        pr={{ base: '75px', lg: '100px' }}
        py={{ base: 0, lg: 6 }}
      >
        <Flex alignItems="center" w="100%" flex="1">
          <ThemeIcon boxSize={{ base: 16, lg: 20 }} mr={{ base: 2, md: 4 }} shadow={shadow} />
          {children ? (
            children
          ) : (
            <Flex flexDir="column" justifyContent="center" h="80px">
              {/* <ThemeSwitchDrawerButton
              variant="ghost"
              boxShadow="none"
              p="0.25rem"
              h="auto"
              fontSize="1rem"
              bg="transparent"
            > */}
              <Heading
                d="flex"
                alignItems="center"
                fontSize={{ base: '1.25rem', lg: '1.5rem' }}
                h={{ lg: '60%' }}
                mb={{ base: 1, lg: 0 }}
              >
                Hyper Theme
              </Heading>
              {/* </ThemeSwitchDrawerButton> */}
              <HStack align="center" h="fit-content" spacing={1.5}>
                <ColorModeToggle p={0} w="auto" fontSize="0.875rem" />
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
                <IconButton
                  aria-label="reset"
                  icon={<BsArrowClockwise />}
                  onClick={handleResetTheme}
                  fontSize="15px"
                  size="sm"
                  height="27px"
                  w="10px"
                  variant="outline"
                  border="none"
                  color={colorMode == 'light' ? 'gray.600' : 'gray.100'}
                  bgColor={colorMode == 'light' ? 'white' : 'gray.700'}
                  _focus={{ border: 'none' }}
                  boxShadow="0px 4px 8px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.2)"
                />
                {/* <BaseMenu
                placement="bottom-start"
                trigger={
                  <IconButton
                    aria-label="Theme options"
                    size="xs"
                    borderRadius="6px"
                    fontSize="0.75rem"
                    icon={
                      <Icon
                        aria-label="Theme options"
                        borderRadius="6px"
                        as={FaEllipsisH}
                        pointerEvents="none"
                      />
                    }
                  />
                }
                hasPortal={false}
              >
                <BaseMenuItem icon={FaPlus} onClick={handleResetTheme} colorScheme="secondary">
                  New theme
                </BaseMenuItem>
                <BaseMenuItem icon={GrPowerReset} onClick={handleResetTheme}>
                  Reset theme
                </BaseMenuItem>
              </BaseMenu> */}
              </HStack>
            </Flex>
          )}
        </Flex>
      </DrawerHeader>
    </Box>
  )
}
