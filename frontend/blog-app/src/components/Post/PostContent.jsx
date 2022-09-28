import { UserContext } from '../../context/userContext'
import { useContext, useEffect } from 'react'
import { Image } from '@chakra-ui/react'
import '../../styles/css/PostContent.css'
import useUser from '../../hooks/useUser'
import Comments from './Comments'
import CreateComment from './CreateComment'

export default function PostContent() {
  const { posts, postsUserInfo, usersInfo } = useContext(UserContext)
  const { handleGetPostUserInfo } = useUser()

  useEffect(() => {
    ;(async () => await handleGetPostUserInfo())()
  }, [])

  return (
    <div>
      {posts?.map(post => {
        return (
          <div className="postContent__div" key={post.id}>
            {postsUserInfo?.map(info => {
              return (
                <div className="postContent__div2">
                  <Image
                    src={info.user_image}
                    borderRadius="full"
                    boxSize="100px"
                  />
                  <div>
                    <h1 className="postContent__div2__h1">{post.titulo}</h1>
                    <p className="postContent__div2__p">
                      Autor(a): {`${info.nome}` + ' ' + `${info.sobrenome}`}
                    </p>
                    <p className="postContent__div2__p">
                      Criado em: {post.created_at}
                    </p>
                  </div>
                </div>
              )
            })}

            <p className="postContent__div__p">{post.conteudo}</p>
          </div>
        )
      })}
      <CreateComment />
      <Comments />
    </div>
  )
}
