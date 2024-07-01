import React, { FC, ReactElement, useCallback } from 'react'
import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  MenuProps,
  Divider,
  Portal,
  useColorModeValue,
  MenuButtonProps,
} from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'

type BaseMenuProps = {
  title?: string
  subtitle?: string
  trigger?: ReactElement
  buttonProps?: MenuButtonProps
  hasPortal?: boolean
} & MenuProps

const BaseMenu: FC<BaseMenuProps> = (props) => {
  const { children, title = 'Menu 4', subtitle, trigger, buttonProps, hasPortal, ...rest } = props
  const shadow = useColorModeValue('lg', 'xl')

  const List = useCallback(() => {
    return (
      <MenuList p={0} d="flex" flexDir="column" overflow="hidden" shadow={shadow} zIndex={1}>
        {subtitle && (
          <>
            <Flex justifyContent="space-between" p="0.5rem">
              <Text>{subtitle}</Text>
            </Flex>
            <Divider mt={0} />
          </>
        )}
        <Stack spacing="0.5rem" p="0.5rem">
          {children}
        </Stack>
      </MenuList>
    )
  }, [subtitle, children])

  return (
    <Menu placement="bottom" isLazy {...rest}>
      <MenuButton {...buttonProps}>
        {trigger || (
          <Flex alignItems="center">
            {title}
            <Text as={FaChevronDown} ml="0.5rem" fontSize="xs" />
          </Flex>
        )}
      </MenuButton>
      {hasPortal ? (
        <Portal>
          <List />
        </Portal>
      ) : (
        <List />
      )}
    </Menu>
  )
}

export default BaseMenu
