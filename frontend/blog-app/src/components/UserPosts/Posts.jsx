import usePost from '../../hooks/usePost'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/userContext'
import '../../styles/css/Posts.css'
import PostMainContent from '../global/PostMainContent'

export default function Posts() {
  const { handleGetUserPosts, handleGetPost } = usePost()
  const { posts, userInfo } = useContext(UserContext)

  let user = userInfo[0]
  let userFirstName = `${user?.nome}`
  let userSecondName = `${user?.sobrenome}`

  useEffect(() => {
    ;(async () => await handleGetUserPosts())()
  }, [])

  return (
    <div className="posts">
      <h1 className="posts__h1">Esses são os seus posts:</h1>
      {posts?.map(dados => {
        return (
          <PostMainContent
            firstDivClassName="posts__div"
            firstDivKey={dados.id}
            firstDivOnClick={handleGetPost}
            onClickParam={dados.id}
            imageSrc={user?.user_image}
            secondDivClassName="posts__div2"
            h1ClassName="posts__div2__h1"
            h1Content={dados.titulo}
            paragraphClassName="posts__div2__p"
            authorFirstName={userFirstName}
            authorSecondName={userSecondName}
          ></PostMainContent>
        )
      })}
    </div>
  )
}
