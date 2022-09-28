import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { UserContext } from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import {
  createUser,
  createUserInfo,
  getUserInfo,
  updateUser,
  getAllFromUser
} from '../services/api'

export default function useUser() {
  const {
    usernameInputRef,
    passwordInputRef,
    nomeInputRef,
    sobrenomeInputRef,
    selectedImage,
    setUserInfo,
    setUsersInfo,
    setPostsUserInfo,
    posts
  } = useContext(UserContext)
  const { login, user, logout } = useContext(AuthContext)

  const navigate = useNavigate()

  // async function handleUpdateUser() {
  //   const userId = user.id
  //   const data = { cadastro: 'sim' }
  //   try {
  //     const response = await updateUser(data, userId)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  async function handleCreateUser(e) {
    e.preventDefault()
    try {
      createUser(
        usernameInputRef.current?.value,
        passwordInputRef.current?.value
      )
      navigate('/')
    } catch (error) {
      console.log('Impossível criar usuário', error)
    }
  }

  async function handleGetAllFromUser() {
    try {
      const response = await getAllFromUser()
      setUsersInfo(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function userLogin(e) {
    e.preventDefault()
    const response = await login(
      usernameInputRef.current?.value,
      passwordInputRef.current?.value
    )

    if (user.cadastrado == 'não') return navigate('/usuario')

    navigate('/main')
  }

  async function userLogout() {
    await logout()
    navigate('/')
  }

  //Funções relacionadas às informações do usuário

  async function handleCreateUserInfo() {
    const userInfo = {
      nome: nomeInputRef.current?.value,
      sobrenome: sobrenomeInputRef.current?.value,
      user_id: user.id,
      user_image: selectedImage
    }

    const data = {
      cadastrado: 'sim'
    }

    const userId = user.id

    try {
      const info = await createUserInfo(userInfo)
      const update = await updateUser(data, userId)
      navigate('/main')
    } catch (error) {
      console.log('impossível atualizar informações', error)
    }
  }

  async function handleGetUserInfo() {
    const userId = user.id
    try {
      const response = await getUserInfo(userId)
      setUserInfo(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleGetPostUserInfo() {
    const userId = posts?.map(dados => {
      return dados.user_id
    })
    try {
      const response = await getUserInfo(userId)
      setPostsUserInfo(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    handleCreateUser,
    userLogin,
    userLogout,
    handleCreateUserInfo,
    handleGetUserInfo,
    handleGetAllFromUser,
    handleGetPostUserInfo
  }
}
