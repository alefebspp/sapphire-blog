import usePost from '../../hooks/usePost'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/userContext'
import '../../styles/css/Posts.css'
import { DeleteIcon } from '@chakra-ui/icons'
import { Image, IconButton } from '@chakra-ui/react'

export default function Posts() {
  const { handleGetUserPosts, handleDeletePost, handleGetPost } = usePost()
  const { posts, userInfo } = useContext(UserContext)

  let user = userInfo[0]
  let userName = `${user?.nome}` + ' ' + `${user?.sobrenome}`
  useEffect(() => {
    ;(async () => await handleGetUserPosts())()
  }, [])

  return (
    <div className="posts">
      <h1 className="posts__h1">Esses são os seus posts:</h1>
      {posts?.map(dados => {
        return (
          <div
            onClick={() => handleGetPost(dados.id)}
            className="posts__div"
            key={dados.id}
          >
            <Image src={user?.user_image} borderRadius="full" boxSize="50px" />
            <div className="posts__div2">
              <h1 className="posts__div2__h1">{dados.titulo}</h1>
              <p className="posts__div2__p">Autor: {userName}</p>
            </div>
            <div className="posts__div3">
              <IconButton
                onClick={() => handleDeletePost(dados.id)}
                size="xs"
                colorScheme="red"
                aria-label="Apagar"
                icon={<DeleteIcon />}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
