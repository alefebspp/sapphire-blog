import usePost from '../../hooks/usePost'
import useUser from '../../hooks/useUser'

import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/userContext'
import { AuthContext } from '../../context/AuthContext'

import '../../styles/css/Posts.css'
import { Image, Divider } from '@chakra-ui/react'
import Button from '../global/Button'
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
                <div key={dados.id} className="mainPosts__div">
                  <Image
                    borderRadius="full"
                    src={info.user_image}
                    boxSize="50px"
                  />
                  <div className="mainPosts__div1">
                    <h1 className="mainPosts__div1__h1">{post.titulo}</h1>
                    <p className="mainPosts__div1__p">
                      Autor: {`${info.nome}` + ' ' + `${info.sobrenome}`}
                    </p>
                  </div>
                  <div className="mainPosts__div2">
                    <Button
                      clique={() => handleGetPost(post.id)}
                      color="facebook"
                      text="Ler"
                    />
                    {user.id == post.user_id ? (
                      <DeleteButton click={handleDeletePost} param={post.id} />
                    ) : (
                      ''
                    )}
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
