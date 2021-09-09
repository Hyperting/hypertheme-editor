import React, { FC, ReactNode } from 'react'
import {
  Text,
  useColorModeValue,
  Heading,
  Stack,
  Icon,
  StackProps,
  As,
  Flex,
} from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

type Props = {
  icon?: As
  title?: string
  subtitle?: string
  children?: ReactNode
} & StackProps

const EmptyBox: FC<Props> = ({
  icon: IconComp = FaSearch,
  title = 'Search font family',
  subtitle = 'No font family selected',
  children,
  ...rest
}) => {
  const bgColor = useColorModeValue('gray.100', 'gray.900')

  return (
    <Stack
      bgColor={bgColor}
      alignItems="center"
      justifyContent="center"
      borderRadius="md"
      textAlign="center"
      h="300px"
      w="100%"
      p={8}
      {...rest}
    >
      <Icon as={IconComp} fontSize="3xl" />
      <Heading fontSize="xl">{title}</Heading>
      <Text opacity="0.8">{subtitle}</Text>
      {children && <Flex alignItems="center">{children}</Flex>}
    </Stack>
  )
}

export default EmptyBox
