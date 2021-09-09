import React, { FC, ReactNode } from 'react'
import {
  Text,
  useColorModeValue,
  Heading,
  Stack,
  Link,
  StackProps,
  As,
  Flex,
} from '@chakra-ui/react'
import { FaHeart, FaSearch } from 'react-icons/fa'

type Props = {
  icon?: As
  title?: string
  company?: string
  product?: string
  children?: ReactNode
} & StackProps

const CreditsBox: FC<Props> = ({
  icon: IconComp = FaHeart,
  title = 'is made with 💖 by ',
  company = 'Hyperting',
  product = 'HyperTheme',
  children,
  ...rest
}) => {
  const bgColor = useColorModeValue('white', 'gray.900')

  return (
    <Stack
      bgColor={bgColor}
      alignItems="center"
      justifyContent="center"
      borderRadius="md"
      textAlign="center"
      w="100%"
      py={3}
      opacity="0.5"
      fontSize="sm"
      spacing={1}
      {...rest}
    >
      <Text>
        <Link href="https://hyperthe.me" textDecor="underline" isExternal mr={1}>
          {product}
        </Link>
        {title}
        <Link href="https://hyperting.com" textDecor="underline" isExternal>
          {company}
        </Link>
      </Text>

      {children && <Flex alignItems="center">{children}</Flex>}
    </Stack>
  )
}

export default CreditsBox
