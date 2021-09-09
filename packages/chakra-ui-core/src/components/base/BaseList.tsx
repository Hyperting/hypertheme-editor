import React, { FC } from 'react'
import { useColorModeValue, Stack, StackProps } from '@chakra-ui/react'

export type BaseListProps = {} & StackProps

const BaseList: FC<BaseListProps> = (props) => {
  const { children, ...rest } = props
  const bgColor = useColorModeValue('white', 'gray.800')
  const shadow = useColorModeValue('surface', 'surfaceDark')

  return (
    <Stack
      bgColor={bgColor}
      shadow={shadow}
      p="0.75rem"
      borderRadius="md"
      spacing="0.5rem"
      {...rest}
    >
      {children}
    </Stack>
  )
}

export default BaseList
