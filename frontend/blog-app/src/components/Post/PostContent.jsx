import { UserContext } from '../../context/userContext'
import { useContext, useEffect } from 'react'
import '../../styles/css/PostContent.css'
import useUser from '../../hooks/useUser'
import Comments from './Comments'
import CreateComment from './CreateComment'
import PostButtons from '../global/PostButtons'
import PostMainContent from '../global/PostMainContent'
import usePost from '../../hooks/usePost'
import { AuthContext } from '../../context/AuthContext'
export default function PostContent() {
  const { posts, postsUserInfo } = useContext(UserContext)
  const { user } = useContext(AuthContext)
  const { handleGetPostUserInfo } = useUser()
  const { handleDeletePost, handleUpdatePost } = usePost()

  useEffect(() => {
    ;(async () => await handleGetPostUserInfo())()
  }, [])

  return (
    <div className="postContent">
      {posts?.map(post => {
        return (
          <div className="postContent__div" key={post.user_id}>
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
            {user.id == post.user_id ? (
              <PostButtons
                divClassName="postContent__div__buttons"
                header="Atualizar post"
                label="Digite o novo conteúdo do post"
                titleLabel="Digite o novo título do post"
                updatePost="allow"
                updateOnclick={handleUpdatePost}
                updateParam={post.id}
                deleteOnclik={handleDeletePost}
                deleteParam={post.id}
              />
            ) : (
              ''
            )}
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
