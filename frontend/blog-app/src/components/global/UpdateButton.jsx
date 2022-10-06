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
import Input from './Input'

export default function UpdateButton({
  click,
  param,
  size,
  updatePost,
  header,
  label,
  titleLabel,
  titleValue,
  contentValue
}) {
  const { inputCommentRef, inputNewTitlePostRef, inputNewContentPostRef } =
    useContext(UserContext)

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
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            {updatePost == 'allow' ? (
              <>
                <FormControl>
                  <FormLabel>{titleLabel}</FormLabel>
                  <Input
                    value={titleValue}
                    tipo="text"
                    texto="Digite o novo título"
                    variant="filled"
                    ref={inputNewTitlePostRef}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>{label}</FormLabel>

                  <Textarea
                    value={contentValue}
                    textAlign="center"
                    variant="filled"
                    ref={inputNewContentPostRef}
                    placeholder="Digite o novo conteúdo do post"
                  />
                </FormControl>
              </>
            ) : (
              <FormControl>
                <FormLabel>{label}</FormLabel>
                <Textarea
                  ref={inputCommentRef}
                  placeholder="Novo comentário..."
                />
              </FormControl>
            )}
          </ModalBody>

          <ModalFooter>
            <div onClick={onClose}>
              <Button onClick={() => click(param)} colorScheme="blue" mr={3}>
                Atualizar
              </Button>
            </div>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
