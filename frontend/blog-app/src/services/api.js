import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://sapphire-app-backend.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

export const getUsers = async () => {
  const url = '/login/user'

  return api.get(url)
}

export const createUser = async (username, password) => {
  const url = '/login/user/create'

  return api.post(url, { username: username, password: password })
}

export const updateUser = async (dados, userId) => {
  const url = `/login/user/${userId}`

  return api.patch(url, dados)
}

export const createSession = async (username, password) => {
  const url = '/login/session'

  return api.post(url, { username: username, password: password })
}

export const getAllFromUser = async () => {
  const url = '/login/user/info'

  return api.get(url)
}

export const getUserByUsername = async userName => {
  const url = `/login/user/${userName}`
  return api.get(url)
}

//Chamadas à API relacionadas a posts

export const getPosts = async userId => {
  const url = `/posts/list/${userId}`

  return api.get(url)
}

export const getPost = async postId => {
  const url = `/posts/list/post/${postId}`

  return api.get(url)
}

export const createPost = async dados => {
  const url = '/posts/create'

  return api.post(url, dados)
}

export const deletePost = async postId => {
  const url = `/posts/delete/${postId}`
  return api.delete(url)
}
//Chamadas à API relacionadas às informações do usuário

export const createUserInfo = async dados => {
  const url = '/users/create'

  return api.post(url, dados)
}

export const getUserInfo = async userId => {
  const url = `/users/${userId}`
  return api.get(url)
}

//Chamadas à API relacionadas aos comentários

export const createComment = async data => {
  const url = '/comments/create'
  return api.post(url, data)
}

export const deleteComment = async commentId => {
  const url = `/comments/delete/${commentId}`
  return api.delete(url)
}

export const updateComment = async (commentId, data) => {
  const url = `/comments/update/${commentId}`
  return api.patch(url, data)
}
