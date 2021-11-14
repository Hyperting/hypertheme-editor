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
} from '@chakra-ui/react'
import { FaRedo } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { RiArrowGoBackFill, RiArrowGoForwardFill } from 'react-icons/ri'
import { useRecoilState } from 'recoil'
import { ThemeIcon, ColorModeToggle } from '../base'
import { setThemeTokens } from '../../utils/updateThemeTokens'
import { themeEditorState, useThemeEditor } from '../../hooks/useThemeEditor'

export type ThemeEditorDrawerHeaderProps = {
  onClose?: () => void
  initialFocusRef?: MutableRefObject<HTMLButtonElement>
}

export const ThemeEditorDrawerHeader: FC<ThemeEditorDrawerHeaderProps> = ({
  onClose,
  initialFocusRef,
}) => {
  const { canUndo, canRedo, undo, redo } = useThemeEditor()
  const [kitThemeState, setThemeState] = useRecoilState(themeEditorState)
  const shadow = useColorModeValue('surface', 'surfaceDark')
  const bgColor = useColorModeValue('whiteAlpha.600', 'gray.900')

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
        py={{ base: 2, lg: 3 }}
        pos="absolute"
        right={{ base: 3, lg: 6 }}
        top={{ base: 0, lg: 0 }}
        alignItems="center"
        h="full"
      >
        <Button
          borderRadius="12px"
          boxSize={{ base: 12, lg: 14 }}
          onClick={onClose}
          fontSize="1.5rem"
          p="0.5rem"
          ref={initialFocusRef}
        >
          <MdClose />
        </Button>
      </Flex>

      <DrawerHeader
        d="flex"
        alignItems="center"
        backgroundColor={bgColor}
        pl={{ base: 3, lg: 6 }}
        pr={{ base: '75px', lg: '100px' }}
        py={{ base: 2, lg: 3 }}
        shadow="sm"
      >
        <Flex alignItems="center" w="100%" flex="1">
          <ThemeIcon boxSize={{ base: 12, lg: 14 }} mr={{ base: 2, md: 3 }} shadow={shadow} />
          <Box>
            {/* <ThemeSwitchDrawerButton
              variant="ghost"
              boxShadow="none"
              p="0.25rem"
              h="auto"
              fontSize="1rem"
              bg="transparent"
            > */}
            Hyper Theme
            {/* </ThemeSwitchDrawerButton> */}
            <Flex alignItems="center">
              <ColorModeToggle p={0} w="auto" fontSize="0.875rem" mr={1} />
              <Button
                rightIcon={<Icon as={FaRedo} />}
                onClick={handleResetTheme}
                size="xs"
                variant="ghost"
              >
                Reset
              </Button>
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
            </Flex>
          </Box>
        </Flex>

        <ButtonGroup size="sm" borderRadius="md" isAttached overflow="hidden">
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
      </DrawerHeader>
    </Box>
  )
}
