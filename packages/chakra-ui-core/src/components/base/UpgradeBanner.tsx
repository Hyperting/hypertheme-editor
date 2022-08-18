import React, { FC, ReactNode } from 'react'
import {
  Text,
  useColorModeValue,
  Box,
  Stack,
  Button,
  StackProps,
  As,
  Flex,
  ThemingProps,
  Heading,
  Link,
} from '@chakra-ui/react'
import { FaLockOpen, FaUserTie } from 'react-icons/fa'

type Props = {
  icon?: As
  title?: string
  subtitle?: string
  children?: ReactNode
} & StackProps &
  Pick<ThemingProps, 'colorScheme'>

const UpgradeBanner: FC<Props> = ({
  icon: IconComp = FaUserTie,
  title = 'Unlock Pro features',
  subtitle = 'Learn more',
  colorScheme = 'primary',
  children,
  ...rest
}) => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const shadow = useColorModeValue('surface', 'surfaceDark')

  return (
    <Stack
      direction={{ base: 'row', sm: 'row' }}
      bgColor={bgColor}
      shadow={shadow}
      alignItems="center"
      textAlign="left"
      w="100%"
      p={{ base: 3, md: 4 }}
      fontSize="sm"
      spacing={{ base: 2, lg: 2 }}
      {...rest}
      borderRadius="md"
    >
      <Flex direction={{ base: 'row' }} w="100%" alignItems="center">
        <Flex
          bgColor={colorScheme ? `${colorScheme}.300` : ''}
          borderColor={`${colorScheme}.300`}
          borderRadius="full"
          boxSize={{ base: '25px' }}
          alignItems="center"
          justifyContent="center"
          mr={3}
          display={{ base: 'none', sm: 'flex' }}
        >
          <Box as={IconComp} fontSize={{ base: 'md', md: 'md' }} color={`${colorScheme}.500`} />
        </Flex>
        <Box>
          <Heading fontSize="md" color="primary.400">
            {title}
          </Heading>
          <Link w="100%" flex="1" opacity="0.8" isExternal href="https://www.hyperthe.me">
            {subtitle && <Text fontSize="sm">{subtitle}</Text>}
          </Link>
        </Box>
      </Flex>
      <Link
        href="https://hyperting.gumroad.com/l/hypertheme-editor"
        isExternal
        _hover={{ textDecor: 'none' }}
      >
        <Button size="sm" colorScheme="primary" rightIcon={<FaLockOpen />}>
          Upgrade
        </Button>
      </Link>
    </Stack>
  )
}

export default UpgradeBanner
