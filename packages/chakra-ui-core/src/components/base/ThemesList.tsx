import React, { FC, useCallback, useEffect, useState } from 'react'
import {
  useRadioGroup,
  Stack,
  Box,
  Text,
  Button,
  StackProps,
  Flex,
  Icon,
  As,
  Editable,
  EditablePreview,
  EditableInput,
  useColorModeValue,
  Theme,
  useDisclosure,
  useBoolean,
} from '@chakra-ui/react'
import RadioBox from './RadioBox'
import ThemeIcon from './ThemeIcon'
import { timeSince } from '../../utils/timeSince'
import { FaTrashAlt } from 'react-icons/fa'
import { ConfirmModal } from './ConfirmModal'

type ThemeItem = {
  title: string
  value: string
  updated: Date
  id: string
}

type ThemesListProps = {
  themes: ThemeItem[]
  onChange?: (nextValue: string) => void
  isEditable?: boolean
  hasDelete?: boolean
  onDelete?: (id: string) => void
} & StackProps

const ThemesList: FC<ThemesListProps> = ({
  onChange,
  themes: defaultThemes,
  isEditable = true,
  hasDelete = true,
  onDelete,
  ...rest
}) => {
  const [themes, setThemes] = useState(defaultThemes)
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'themes-list-radio-group',
    defaultValue: themes && themes.length && themes[0].id,
    onChange: onChange,
  })

  const group = getRootProps()

  const handleDelete = useCallback(
    (id) => {
      themes && setThemes(themes.slice(0, themes.length - 1))
      onDelete && onDelete(id)
    },
    [onDelete]
  )

  return (
    <Stack direction={{ base: 'column' }} spacing={3} w="100%" {...group} {...rest}>
      {themes.map((themeitem) => {
        const radio = getRadioProps({ value: themeitem.id })
        return (
          <RadioBox key={themeitem.value} {...radio} flex="1" isDisabled={!isEditable}>
            <ThemesListItem
              {...themeitem}
              onDelete={handleDelete}
              isEditable={isEditable}
              hasDelete={hasDelete}
            />
          </RadioBox>
        )
      })}
    </Stack>
  )
}

const ThemesListItem = ({ title, updated, isEditable, onDelete, hasDelete, value }) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const editableSelectedColor = useColorModeValue('gray.200', 'gray.800')
  const { onOpen, onClose, isOpen } = useDisclosure()

  const handleDelete = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      event.stopPropagation()
      onOpen()
    },
    [onDelete]
  )

  const handleConfirm = useCallback(() => {
    onClose()
    if (onDelete) {
      onDelete(value)
    }
  }, [onClose, onDelete])

  return (
    <>
      <Flex
        justifyContent="space-between"
        flexDir={{ base: 'row', md: 'row' }}
        flex="1"
        alignItems="center"
        w="100%"
      >
        <Flex
          justifyContent={{ base: 'start', md: 'center' }}
          alignItems={{ base: 'start', sm: 'center' }}
          textAlign="left"
          flexDir={{ base: 'column', sm: 'row' }}
          mr={3}
        >
          <ThemeIcon boxSize={14} mr="0.75rem" bgColor={bgColor} />
          <Flex direction="column" alignItems="start">
            <Editable
              defaultValue={title}
              fontSize="1.25rem"
              isDisabled={!isEditable}
              fontWeight="bold"
              _hover={{ bgColor: editableSelectedColor }}
              borderRadius="md"
              ml={-1}
              px={1}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
            <Text fontSize="sm">{timeSince(updated)} ago</Text>
          </Flex>
        </Flex>
        {hasDelete && (
          <Button
            size="md"
            aria-label="remove color"
            variant="ghost"
            onClick={handleDelete}
            px="0.5rem"
            opacity={0.5}
            boxSize={12}
            _hover={{
              color: 'red.500',
              opacity: 1,
            }}
          >
            <Icon as={FaTrashAlt} />
          </Button>
        )}
      </Flex>
      <ConfirmModal
        title="Delete theme?"
        isOpen={isOpen}
        onConfirm={handleConfirm}
        onClose={onClose}
        colorScheme="red"
      />
    </>
  )
}

export default ThemesList
