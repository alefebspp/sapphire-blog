import usePost from '../../hooks/usePost'
import useUser from '../../hooks/useUser'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/userContext'
import { AuthContext } from '../../context/AuthContext'
import '../../styles/css/Posts.css'
import { Image, Divider } from '@chakra-ui/react'
import DeleteButton from '../global/DeleteButton'
import '../../styles/css/MainPosts.css'

export default function MainPosts() {
  const { handleDeletePost, handleGetPost } = usePost()
  const { handleGetAllFromUser } = useUser()
  const { user } = useContext(AuthContext)
  const { usersInfo } = useContext(UserContext)

  useEffect(() => {
    ;(async () => await handleGetAllFromUser())()
  }, [])

  return (
    <div className="mainPosts">
      {usersInfo?.map(dados =>
        dados.infos.map(info => {
          return dados.posts.map(post => {
            return (
              <>
                <Divider orientation="horizontal" />
                <div
                  onClick={() => handleGetPost(post.id)}
                  key={post.id}
                  className="mainPosts__div"
                >
                  <Image
                    borderRadius="full"
                    src={info.user_image}
                    boxSize={{ base: '50px', md: '50px', lg: '100px' }}
                  />
                  <div className="mainPosts__div1">
                    <h1 className="mainPosts__div1__h1">{post.titulo}</h1>
                    <p className="mainPosts__div1__p">
                      Autor: {`${info.nome}` + ' ' + `${info.sobrenome}`}
                    </p>

                    <div className="mainPosts__div2">
                      {user.id == post.user_id ? (
                        <DeleteButton
                          click={handleDeletePost}
                          param={post.id}
                          size={{ base: 'xs', md: 'xs', lg: 'sm' }}
                        />
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
                <Divider orientation="horizontal" />
              </>
            )
          })
        })
      )}
    </div>
  )
}
