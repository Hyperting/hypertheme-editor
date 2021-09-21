import React, { FC, useMemo } from 'react'
import { Button, ButtonProps, ThemeProvider, Text, Divider } from '@chakra-ui/react'
import ThemeIcon from '../base/ThemeIcon'

export type ThemeEditorButtonProps = {
  label?: string
  onOpen?: () => void
} & Omit<ButtonProps, 'children'>

export const ThemeEditorButton: FC<ThemeEditorButtonProps> = ({ label, size, onOpen, ...rest }) => {
  const themeIconSize = useMemo(
    () => (typeof size === 'undefined' ? undefined : size !== 'xs' ? size : 'sm'),
    [size]
  )

  return (
    <Button onClick={onOpen} variant="solid" p="0.25rem" size={size} {...rest}>
      {label && (
        <>
          <Text ml={2} fontWeight="inherit">
            {label}
          </Text>
          <Divider orientation="vertical" my={2} maxH="50%" ml={2} />
        </>
      )}
      <ThemeIcon boxShadow="none" bgColor="transparent" size={themeIconSize as any} />
    </Button>
  )
}
