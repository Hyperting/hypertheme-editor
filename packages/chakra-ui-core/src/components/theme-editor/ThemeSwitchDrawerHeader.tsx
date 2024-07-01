import React, { FC } from 'react'
import { DrawerHeader, Button, Text, useColorModeValue, Box, Flex } from '@chakra-ui/react'
import { MdClose } from 'react-icons/md'
import { ThemeIcon } from '../base'

type Props = {
  onClose: () => void
}

export const ThemeSwitchDrawerHeader: FC<Props> = ({ onClose }) => {
  const bgColor = useColorModeValue('white', 'gray.900')

  return (
    <DrawerHeader
      d="flex"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor={bgColor}
    >
      <Box>
        <Text fontSize={{ base: 'md', lg: 'lg' }}>Switch theme</Text>
        <Flex alignItems="center" mt={0}>
          <ThemeIcon columns={4} boxSize="60px" h={3} size="sm" p={0} />
          <Text fontSize={{ base: 'sm' }} ml={1} fontWeight="normal">
            Theme 1
          </Text>
        </Flex>
      </Box>
      <Button
        borderRadius="6px"
        boxSize={{ base: 12, lg: 14 }}
        onClick={onClose}
        fontSize="1.5rem"
        p="0.5rem"
      >
        <MdClose />
      </Button>
    </DrawerHeader>
  )
}
