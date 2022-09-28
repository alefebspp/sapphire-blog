import { useToast } from '@chakra-ui/react'

export default function useToastMessage() {
  const toast = useToast()

  function handleCreatePostToast() {
    return toast({
      title: 'Post criado',
      description: 'Seu post foi criado com sucesso!',
      status: 'success',
      duration: 9000,
      isClosable: true
    })
  }

  function handleDeletePostToast() {
    return toast({
      title: 'Post deletado',
      description: 'Seu post foi deletado com sucesso!',
      status: 'success',
      duration: 9000,
      isClosable: true
    })
  }

  function handleDeleteCommentToast() {
    return toast({
      title: 'Comentário deletado',
      description: 'Seu comentário foi deletado com sucesso!',
      status: 'success',
      duration: 9000,
      isClosable: true
    })
  }

  function handleCreateCommentToast() {
    return toast({
      title: 'Comentário criado',
      description: 'Seu comentário foi criado com sucesso!',
      status: 'success',
      duration: 9000,
      isClosable: true
    })
  }

  return {
    handleCreatePostToast,
    handleDeletePostToast,
    handleDeleteCommentToast,
    handleCreateCommentToast
  }
}
