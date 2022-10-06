import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
  createComment,
  deleteComment,
  updateComment
} from '../services/api'
import { useDisclosure } from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import useToastMessage from './useToastMessage'
import useUser from './useUser'

export default function usePost() {
  const { user } = useContext(AuthContext)
  const {
    setPosts,
    inputTituloRef,
    inputConteudoRef,
    inputCommentRef,
    userInfo,
    posts,
    inputNewTitlePostRef,
    inputNewContentPostRef
  } = useContext(UserContext)

  const navigate = useNavigate()
  const { onClose } = useDisclosure()

  const { handleGetAllFromUser, handleGetPostUserInfo } = useUser()
  const { handleToastSuccessMessage, handleToastErrorMessage } =
    useToastMessage()

  const user_info = userInfo[0]
  const post = posts?.[0]

  async function handleGetUserPosts() {
    const response = await getPosts(user.id)
    setPosts(response.data)
  }

  async function handleGetPost(postId) {
    try {
      const response = await getPost(postId)
      setPosts(response.data)

      navigate('/post')
    } catch (error) {
      return console.log(error)
    }
  }

  async function handleCreatePost() {
    const dados = {
      titulo: inputTituloRef.current.value,
      conteudo: inputConteudoRef.current.value,
      user_id: user.id
    }
    try {
      const response = await createPost(dados)
      handleGetAllFromUser()
      handleToastSuccessMessage(
        'Post criado',
        'Seu post foi criado com sucesso!'
      )
    } catch (error) {
      handleToastErrorMessage(
        'Impossível criar post',
        'Por favor, tente novamente'
      )
    }
  }

  async function handleDeletePost(postId) {
    try {
      const post = await deletePost(postId)
      navigate('/main')
      handleGetUserPosts()
      handleGetAllFromUser()
      handleToastSuccessMessage(
        'Post deletado',
        'Seu post foi deletado com sucesso!'
      )
    } catch (error) {
      handleToastErrorMessage(
        'Impossível deletar post',
        'Por favor, tente novamente'
      )
    }
  }

  async function handleUpdatePost(postId) {
    const data = {
      titulo: inputNewTitlePostRef.current.value,
      conteudo: inputNewContentPostRef.current.value
    }
    try {
      const updatedPost = await updatePost(data, postId)
      handleGetPost(postId)
      handleToastSuccessMessage(
        'Post atualizado ',
        'Seu post foi atualizado com sucesso!'
      )
    } catch (error) {
      handleToastErrorMessage(
        'Impossível atualizar post',
        'Por favor, tente novamente'
      )
    }
  }

  //Funções relacionadas a comentários

  async function handleCreateComment() {
    const data = {
      conteudo: inputCommentRef?.current.value,
      userinfo_reference: user_info.id,
      post_reference: post.id,
      user_id: user.id
    }

    try {
      const comment = await createComment(data)
      handleGetAllFromUser()
      handleToastSuccessMessage(
        'Comentário criado',
        'Seu comentário foi criado com sucesso!'
      )
    } catch (error) {
      handleToastErrorMessage(
        'Impossível criar comentário',
        'Por favor , tente novamente'
      )
    }
  }

  async function handleDeleteComment(commentId) {
    try {
      const comment = await deleteComment(commentId)
      handleGetAllFromUser()
      handleToastSuccessMessage(
        'Comentário deletado',
        'Seu comentário foi deletado com sucesso!'
      )
      return console.log('Comentário deletado!')
    } catch (error) {
      handleToastErrorMessage(
        'Impossível apagar comentário',
        'Por favor, tente novamente'
      )
    }
  }

  async function handleUpdateComment(commentId) {
    const newComment = { conteudo: inputCommentRef?.current.value }

    try {
      const comment = await updateComment(commentId, newComment)
      handleGetAllFromUser()
      handleToastSuccessMessage(
        'Comentário atualizado',
        'Seu comentário foi atualizado com sucesso!'
      )
    } catch (error) {
      handleToastErrorMessage(
        'Impossível atualizar comentário',
        'Por favor, tente novamente'
      )
    }
  }

  return {
    handleGetUserPosts,
    handleUpdatePost,
    handleCreatePost,
    handleDeletePost,
    handleGetPost,
    handleCreateComment,
    handleDeleteComment,
    handleUpdateComment
  }
}
