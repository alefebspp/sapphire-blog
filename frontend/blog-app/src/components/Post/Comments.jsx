import { useContext, useEffect } from 'react';
import { Image } from '@chakra-ui/react';
import useUser from '../../hooks/useUser';
import usePost from '../../hooks/usePost';
import { UserContext } from '../../context/userContext';
import { AuthContext } from '../../context/AuthContext';
import '../../styles/css/Comments.css';
import DeleteButton from '../global/DeleteButton';
import UpdateButton from '../global/UpdateButton';
import PostButtons from '../global/PostButtons';

export default function Comments() {
  const { handleGetAllFromUser } = useUser();
  const { handleDeleteComment, handleUpdateComment } = usePost();
  const { user } = useContext(AuthContext);
  const { usersInfo, posts, setPosts } = useContext(UserContext);

  useEffect(() => {
    (async () => await handleGetAllFromUser())();
    const data = localStorage.getItem('USER_POST');
    if (!data) localStorage.setItem('USER_POST', JSON.stringify(posts));
    if (data?.length == 2)
      localStorage.setItem('USER_POST', JSON.stringify(posts));
    if (data) setPosts(JSON.parse(data));
  }, []);

  return (
    <div className="comments">
      <h1 className="comments__h1">Comentários</h1>
      {usersInfo?.map(dados =>
        dados.infos.map(info =>
          dados.comments.map(comment => {
            return posts.map(post => post.id) == comment.post_reference ? (
              <div key={comment.id} className="comments__div">
                <div className="comments__div1">
                  <Image
                    src={info.user_image}
                    boxSize="50px"
                    borderRadius="full"
                  />
                  <div className="comments__div1__div">
                    <div>
                      <p className="comments__div1__div__p1">
                        {`${info.nome}` + ' ' + `${info.sobrenome}`}
                      </p>
                      <p className="comments__div1__div__p2">
                        {comment.conteudo}
                      </p>
                    </div>

                    {comment.user_id == user.id ? (
                      <PostButtons
                        header="Atualizar comentário"
                        label="Digite seu novo comentário"
                        divClassName="comments__div1__div1"
                        commentButtons="allow"
                        deleteOnclik={handleDeleteComment}
                        deleteParam={comment.id}
                        updateOnclick={handleUpdateComment}
                        updateParam={comment.id}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            ) : (
              ''
            );
          })
        )
      )}
    </div>
  );
}
