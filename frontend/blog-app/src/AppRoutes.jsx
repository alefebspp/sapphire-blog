import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Main from './pages/main/Main'
import Cadastro from './pages/cadastro/Cadastro'
import Post from './pages/post/Post'
import UserPosts from './pages/user-posts/UserPosts'
import { Routes, Route, Navigate } from 'react-router-dom'
import AuthContextProvider from './context/AuthContext'
import { AuthContext } from './context/AuthContext'
import { useContext } from 'react'
import Profile from './pages/profile/Profile'

export default function Content() {
  const Protected = ({ children }) => {
    const { authenticated, loading, user } = useContext(AuthContext)
    if (loading) return <h1>Carregando...</h1>

    if (!authenticated) return <Navigate to="/" />

    // if (user.cadastrado == 'não') return <Navigate to="/usuario" />

    return children
  }

  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/usuario" element={<Cadastro />} />
        <Route
          path="/main"
          element={
            <Protected>
              <Main />
            </Protected>
          }
        />
        <Route
          path="/post"
          element={
            <Protected>
              <Post />
            </Protected>
          }
        />
        <Route
          path="/user-posts"
          element={
            <Protected>
              <UserPosts />
            </Protected>
          }
        />
        <Route
          path="/profile"
          element={
            <Protected>
              <Profile />
            </Protected>
          }
        />
      </Routes>
    </AuthContextProvider>
  )
}
