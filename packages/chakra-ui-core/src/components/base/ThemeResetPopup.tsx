import React, { FC, useCallback } from 'react'
import {
  Button,
  StackProps,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  ModalProps,
} from '@chakra-ui/react'
import { GrPowerReset } from 'react-icons/gr'

type ThemeResetPopupProps = {
  isOpen: boolean
  onReset?: () => void
  onClose: () => void
} & StackProps &
  ModalProps

const ThemeResetPopup: FC<ThemeResetPopupProps> = ({ isOpen, onReset, onClose, ...rest }) => {
  const handleReset = useCallback(
    (id) => {
      onReset && onReset()
    },
    [onReset]
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose} {...rest}>
      <ModalContent pos="absolute" bottom={0} left={0} m={4}>
        <ModalHeader>Reset theme?</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            You are using a modified version of the original theme, woud you like to reset the theme
            to original one?
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost" leftIcon={<GrPowerReset />} onClick={handleReset}>
            Reset Theme
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ThemeResetPopup
