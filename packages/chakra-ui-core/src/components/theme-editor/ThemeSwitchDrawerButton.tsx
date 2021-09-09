import React, { FC, useRef } from 'react'
import { Icon, Button, useDisclosure, useColorModeValue, ButtonProps } from '@chakra-ui/react'
import { CgSelect } from 'react-icons/cg'
import ThemeSwitchDrawer from './ThemeSwitchDrawer'

export type ThemeSwitchDrawerButtonProps = {} & ButtonProps

export const ThemeSwitchDrawerButton: FC<ThemeSwitchDrawerButtonProps> = (props) => {
  const { children, ...rest } = props
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  const shadow = useColorModeValue('surface', 'surfaceDark')
  const bgColor = useColorModeValue('whiteAlpha.600', 'blackAlpha.600')

  return (
    <>
      <Button
        ref={btnRef as any}
        onClick={onOpen}
        variant="solid"
        shadow={shadow}
        bg={bgColor}
        rightIcon={<Icon as={CgSelect} />}
        backdropFilter="blur(25px)"
        {...rest}
      >
        {children || 'Switch theme'}
      </Button>
      <ThemeSwitchDrawer onOpen={onOpen} isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </>
  )
}

export default ThemeSwitchDrawerButton
