import usePost from '../../hooks/usePost'
import useUser from '../../hooks/useUser'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/userContext'
import { AuthContext } from '../../context/AuthContext'
import '../../styles/css/Posts.css'
import { Divider } from '@chakra-ui/react'
import PostMainContent from '../global/PostMainContent'
import PostButtons from '../global/PostButtons'
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
                <PostMainContent
                  firstDivClassName="mainPosts__div"
                  firstDivOnClick={handleGetPost}
                  onClickParam={post.id}
                  imageSrc={info.user_image}
                  secondDivClassName="mainPosts__div1"
                  h1ClassName="mainPosts__div1__h1"
                  h1Content={post.titulo}
                  paragraphClassName="mainPosts__div1__p"
                  authorFirstName={info.nome}
                  authorSecondName={info.sobrenome}
                />
                {user.id == post.user_id ? (
                  <PostButtons
                    divClassName="mainPosts__div2"
                    deleteOnclik={handleDeletePost}
                    deleteParam={post.id}
                  />
                ) : (
                  ''
                )}
                <Divider orientation="horizontal" />
              </>
            )
          })
        })
      )}
    </div>
  )
}
