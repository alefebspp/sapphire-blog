import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { Textarea } from '@chakra-ui/react'
import Button from '../global/Button'
import usePost from '../../hooks/usePost'
import '../../styles/css/CreateComment.css'

export default function CreateComment() {
  const { inputCommentRef } = useContext(UserContext)
  const { handleCreateComment } = usePost()
  return (
    <div className="createComment">
      <div className="createComment__div">
        <p className="createComment__div__p">Comente o post</p>
        <Textarea
          ref={inputCommentRef}
          placeholder="Digite seu comentário..."
          variant="filled"
        />
        <Button text="Comentar" clique={handleCreateComment} color="facebook" />
      </div>
    </div>
  )
}
