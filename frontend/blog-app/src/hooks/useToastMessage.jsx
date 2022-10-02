import { useToast } from '@chakra-ui/react'

export default function useToastMessage() {
  const toast = useToast()

  function handleToastSuccessMessage(title, description) {
    return toast({
      title: title,
      description: description,
      status: 'success',
      duration: 9000,
      isClosable: true
    })
  }

  function handleToastErrorMessage(title, description) {
    return toast({
      title: title,
      description: description,
      status: 'error',
      duration: 9000,
      isClosable: true
    })
  }

  return {
    handleToastSuccessMessage,
    handleToastErrorMessage
  }
}
