import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  IconButton,
  Textarea,
  useDisclosure
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { useRef } from 'react'
import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

export default function UpdateButton({ click, param, size }) {
  const { inputCommentRef } = useContext(UserContext)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef(null)

  return (
    <>
      <IconButton
        onClick={onOpen}
        colorScheme="green"
        size={size}
        icon={<EditIcon color="white" />}
      />

      <Modal
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Alterar comentário</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Digite seu novo comentário</FormLabel>
              <Textarea
                ref={inputCommentRef}
                placeholder="Novo comentário..."
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => click(param)} colorScheme="blue" mr={3}>
              Alterar
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
