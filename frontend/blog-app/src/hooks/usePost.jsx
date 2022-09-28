import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  createComment,
  deleteComment,
  updateComment
} from '../services/api'
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
    posts
  } = useContext(UserContext)
  const navigate = useNavigate()

  const { handleGetAllFromUser } = useUser()
  const {
    handleCreatePostToast,
    handleDeletePostToast,
    handleDeleteCommentToast,
    handleCreateCommentToast
  } = useToastMessage()

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
      handleCreatePostToast()
    } catch (error) {
      return console.log(error)
    }
  }

  async function handleDeletePost(postId) {
    try {
      const post = await deletePost(postId)
      handleGetUserPosts()
      handleGetAllFromUser()
      handleDeletePostToast()
    } catch (error) {
      return console.log(error)
    }
  }

  //Funções relacionadas a posts

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
      handleCreateCommentToast()
    } catch (error) {
      return console.log(error)
    }
  }

  async function handleDeleteComment(commentId) {
    try {
      const comment = await deleteComment(commentId)
      handleGetAllFromUser()
      handleDeleteCommentToast()
      return console.log('Comentário deletado!')
    } catch (error) {
      return console.log(error)
    }
  }

  // async function handleUpdateComment(commentId) {
  //   try {
  //     const comment = await updateComment(commentId)
  //     return console.log('Comentário deletado!')
  //   } catch (error) {
  //     return console.log(error)
  //   }
  // }

  return {
    handleGetUserPosts,
    handleCreatePost,
    handleDeletePost,
    handleGetPost,
    handleCreateComment,
    handleDeleteComment
  }
}
