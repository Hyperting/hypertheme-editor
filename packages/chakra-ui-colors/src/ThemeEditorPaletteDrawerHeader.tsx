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
} from '@chakra-ui/react'
import { MdClose } from 'react-icons/md'
import { RiArrowGoBackFill, RiArrowGoForwardFill } from 'react-icons/ri'
import { ColorModeToggle, useThemeEditor } from '@hypertheme-editor/chakra-ui-core'
import ThemeEditorPalette from './ThemeEditorPalette'

type Props = {
  onClose: () => void
  initialFocusRef: MutableRefObject<HTMLButtonElement>
  token: string
}

export const ThemeEditorPaletteDrawerHeader: FC<Props> = ({ onClose, initialFocusRef, token }) => {
  const { canUndo, canRedo, undo, redo, theme } = useThemeEditor()

  return (
    <DrawerHeader
      display="flex"
      alignItems="center"
      backgroundColor="rgba(0,0,0,0)"
      px={{ base: 3, lg: 6 }}
    >
      <Flex alignItems="center" w="100%" flex="1">
        {theme?.colors && (
          <ThemeEditorPalette
            palette={theme?.colors[token]}
            token={token}
            w={20}
            h={{ base: 10, md: 10 }}
            mr={3}
            alignSelf="centrer"
            display={{ base: 'none', sm: 'grid' }}
            disableEditDrawer
          />
        )}
        <Box>
          <Text fontSize={{ base: 'md', lg: 'lg' }} textTransform="capitalize">
            {token} palette
          </Text>
          <Flex alignItems="center">
            <ColorModeToggle p={0} w="auto" fontSize="0.875rem" />
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
      </Button>
    </DrawerHeader>
  )
}
