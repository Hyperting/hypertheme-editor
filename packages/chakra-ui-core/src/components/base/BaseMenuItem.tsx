import React, { FC } from 'react'
import {
  Text,
  MenuItem,
  Circle,
  ThemingProps,
  Flex,
  Heading,
  Stack,
  MenuItemProps,
  useColorModeValue,
  As,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'

export type BaseMenuItemProps = {
  subtitle?: string
  children?: any
  bgImage?: string
  icon?: As
  endIcon?: As
} & Omit<MenuItemProps, 'icon'> &
  Pick<ThemingProps, 'colorScheme'>

const BaseMenuItem: FC<BaseMenuItemProps> = ({
  subtitle,
  colorScheme = 'gray',
  children,
  icon: Icon,
  endIcon: EndIcon = FaArrowRight,
  ...rest
}) => {
  const focusBgColor = useColorModeValue(`${colorScheme}.100`, `${colorScheme}.800`)

  return (
    <MenuItem
      w="auto"
      d="flex"
      flexDir="column"
      bgSize="cover"
      pos="relative"
      borderRadius="md"
      zIndex={0}
      overflow="hidden"
      p="1rem"
      alignItems="flex-start"
      _focus={{ bgColor: focusBgColor }}
      pr="1.5rem"
      {...rest}
    >
      <Stack alignItems="flex-start" spacing="0.125rem" pr="1.5rem">
        <Flex alignItems="center">
          {Icon && (
            <Circle
              size="25px"
              bgColor={`${colorScheme}.200`}
              color={`${colorScheme}.600`}
              fontSize="sm"
              mr="0.5rem"
            >
              <Icon />
            </Circle>
          )}

          <Heading
            fontSize="md"
            display="flex"
            alignContent="space-between"
            textOverflow="ellipsis"
            overflow="scroll"
          >
            {children}
          </Heading>
        </Flex>
        <Text fontSize="xs" textOverflow="ellipsis" overflow="scroll">
          {subtitle}
        </Text>
      </Stack>

      {EndIcon && (
        <Flex
          color={`${colorScheme}.600`}
          fontSize="sm"
          pos="absolute"
          right={3}
          top={0}
          h="100%"
          alignItems="center"
        >
          <EndIcon />
        </Flex>
      )}
    </MenuItem>
  )
}

export default BaseMenuItem
