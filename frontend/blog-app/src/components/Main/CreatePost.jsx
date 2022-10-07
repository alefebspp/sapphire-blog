import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/userContext'
import usePost from '../../hooks/usePost'
import useUser from '../../hooks/useUser'
import Input from '../global/Input'
import Button from '../global/Button'
import { Textarea } from '@chakra-ui/textarea'
import '../../styles/css/CreatePost.css'
export default function CreatePost() {
  const { inputTituloRef, inputConteudoRef, userInfo } = useContext(UserContext)
  const { handleCreatePost } = usePost()
  const { handleGetUserInfo } = useUser()

  useEffect(() => {
    ;(async () => await handleGetUserInfo())()
  }, [])

  return (
    <div className="createPost">
      {userInfo?.map(dados => {
        return (
          <div key={dados.id} className="createPost__div">
            <h1 className="createPost__h1">Olá, {dados.nome}!</h1>
            <h1 className="createPost__h1">Crie um novo post</h1>
          </div>
        )
      })}

      <Input
        variant="filled"
        ref={inputTituloRef}
        texto="Digite seu título..."
      />

      <Textarea
        textAlign="left"
        ref={inputConteudoRef}
        placeholder="Digite o conteúdo do post..."
        variant="filled"
      />

      <Button color="facebook" text="Criar post" clique={handleCreatePost} />
    </div>
  )
}
