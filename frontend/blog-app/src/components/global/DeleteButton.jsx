import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure
} from '@chakra-ui/react'

import { useRef } from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { IconButton, Button } from '@chakra-ui/react'

export default function DeleteButton({ comment, click, param, size }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  return (
    <>
      <IconButton
        size={size}
        onClick={onOpen}
        colorScheme="red"
        icon={<DeleteIcon color="white" />}
      />

      <AlertDialog
        motionPreset="slideInBottom"
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            {comment ? (
              <>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Apagar comentário
                </AlertDialogHeader>
                <AlertDialogBody>
                  Você tem certeza que deseja apagar seu comentário?
                </AlertDialogBody>
              </>
            ) : (
              <>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Apagar post
                </AlertDialogHeader>
                <AlertDialogBody>
                  Você tem certeza que deseja apagar seu post?
                </AlertDialogBody>
              </>
            )}

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Não
              </Button>
              <Button colorScheme="red" onClick={() => click(param)} ml={3}>
                Sim
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
