import { createContext, useRef, useState } from 'react'

export const UserContext = createContext()

export default function UserContextProvider({ children }) {
  const usernameInputRef = useRef()
  const passwordInputRef = useRef()
  const nomeInputRef = useRef()
  const sobrenomeInputRef = useRef()
  const [posts, setPosts] = useState()
  const [postsUserInfo, setPostsUserInfo] = useState()
  const [selectedImage, setSelectedImage] = useState(null)
  const inputTituloRef = useRef()
  const inputConteudoRef = useRef()
  const [userInfo, setUserInfo] = useState([])
  const [usersInfo, setUsersInfo] = useState([])
  const inputCommentRef = useRef()
  const inputNewTitlePostRef = useRef()
  const inputNewContentPostRef = useRef()
  return (
    <UserContext.Provider
      value={{
        inputNewTitlePostRef,
        inputNewContentPostRef,
        inputCommentRef,
        usersInfo,
        setUsersInfo,
        userInfo,
        setUserInfo,
        selectedImage,
        setSelectedImage,
        nomeInputRef,
        sobrenomeInputRef,
        usernameInputRef,
        passwordInputRef,
        posts,
        setPosts,
        postsUserInfo,
        setPostsUserInfo,
        inputTituloRef,
        inputConteudoRef
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
