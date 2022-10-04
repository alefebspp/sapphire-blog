import { UserContext } from '../../context/userContext'
import { useContext, useEffect } from 'react'
import '../../styles/css/PostContent.css'
import useUser from '../../hooks/useUser'
import Comments from './Comments'
import CreateComment from './CreateComment'
import PostMainContent from '../global/PostMainContent'
export default function PostContent() {
  const { posts, postsUserInfo } = useContext(UserContext)
  const { handleGetPostUserInfo } = useUser()

  useEffect(() => {
    ;(async () => await handleGetPostUserInfo())()
  }, [])

  return (
    <div className="postContent">
      {posts?.map(post => {
        return (
          <div className="postContent__div" key={post.id}>
            {postsUserInfo?.map(info => {
              return (
                <PostMainContent
                  firstDivKey={info.id}
                  firstDivClassName="postContent__div2"
                  imageSrc={info.user_image}
                  h1ClassName="postContent__div2__h1"
                  h1Content={post.titulo}
                  paragraphClassName="postContent__div2__p"
                  authorFirstName={info.nome}
                  authorSecondName={info.sobrenome}
                  extraParagraph
                  postCreatedAt={post.created_at}
                />
              )
            })}
            <p className="postContent__div__p">{post.conteudo}</p>
          </div>
        )
      })}
      <div className="postContent__div1">
        <CreateComment />
        <Comments />
      </div>
    </div>
  )
}
