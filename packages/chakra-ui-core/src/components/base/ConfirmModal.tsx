import React, { FC, ReactNode } from 'react'
import {
  As,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  ThemingProps,
  useColorModeValue,
} from '@chakra-ui/react'

type Props = {
  title?: string
  description?: string
  onConfirm: () => void
  onClose: () => void
  children?: ReactNode
  confirmIcon?: As
  avoidIcon?: As
} & Omit<ModalProps, 'children'> &
  Pick<ThemingProps, 'colorScheme'>

export const ConfirmModal: FC<Props> = ({
  title = 'Confirm action',
  description = 'If your are sure, please confirm this action.',
  isOpen,
  onClose,
  onConfirm,
  confirmIcon: ConfirmIcon,
  avoidIcon: AvoidIcon,
  children,
  colorScheme,
  ...rest
}) => {
  const shadow = useColorModeValue('surface', 'surfaceDark')
  const initialFocusRef = React.useRef(null)

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xs"
      isCentered
      {...rest}
      initialFocusRef={initialFocusRef}
    >
      <ModalOverlay />
      <ModalContent overflow="hidden" fontFamily="Sora">
        <ModalHeader shadow={shadow} alignItems="center" display="flex">
          <Heading fontSize="xl" color={`${colorScheme}.500`}>
            {title}
          </Heading>
          <ModalCloseButton top={3} />
        </ModalHeader>

        {description && <ModalBody pt={6}>{description}</ModalBody>}

        <ModalFooter flexDirection="column">
          <Button
            variant="outline"
            onClick={onClose}
            leftIcon={AvoidIcon ? <AvoidIcon /> : undefined}
            isFullWidth
            size="lg"
            mb={4}
            ref={initialFocusRef}
          >
            No, I'm not sure
          </Button>
          <Button
            onClick={onConfirm}
            colorScheme={colorScheme}
            leftIcon={ConfirmIcon && <ConfirmIcon />}
            isFullWidth
            size="lg"
          >
            Yes, confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
