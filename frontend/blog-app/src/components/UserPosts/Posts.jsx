import usePost from '../../hooks/usePost';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext';
import '../../styles/css/Posts.css';
import PostMainContent from '../global/PostMainContent';

export default function Posts() {
  const { handleGetUserPosts, handleGetPost } = usePost();
  const { posts, setPosts, userInfo } = useContext(UserContext);

  useEffect(() => {
    (async () => await handleGetUserPosts())();
    const data = localStorage.getItem('USER_POSTS');
    if (!data) localStorage.setItem('USER_POSTS', JSON.stringify(posts));
    if (data?.length == 2)
      localStorage.setItem('USER_POSTS', JSON.stringify(posts));
    if (data) setPosts(JSON.parse(data));
  }, []);

  return (
    <div className="posts">
      <h1 className="posts__h1">Esses são os seus posts:</h1>
      {userInfo?.map(user =>
        posts?.map(dados => {
          return (
            <PostMainContent
              firstDivClassName="posts__div"
              firstDivKey={dados.id}
              firstDivOnClick={handleGetPost}
              onClickParam={dados.id}
              imageSrc={user.user_image}
              secondDivClassName="posts__div2"
              h1ClassName="posts__div2__h1"
              h1Content={dados.titulo}
              postContent={dados.conteudo.substring(0, 100)}
              paragraphClassName="posts__div2__p"
              authorFirstName={user.nome}
              authorSecondName={user.sobrenome}
            ></PostMainContent>
          );
        })
      )}
    </div>
  );
}
