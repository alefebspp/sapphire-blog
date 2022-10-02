import { UserContext } from '../../context/userContext'
import useUser from '../../hooks/useUser'
import { useContext, useEffect } from 'react'
import { Image } from '@chakra-ui/react'
import '../../styles/css/ProfileInfo.css'
export default function ProfileInfo() {
  const { userInfo } = useContext(UserContext)
  const { handleGetUserInfo } = useUser()

  useEffect(() => {
    ;(async () => await handleGetUserInfo())()
  }, [])

  return (
    <div className="profileInfo">
      {userInfo?.map(dados => {
        return (
          <div key={dados.id} className="profileInfo__div">
            <h1 className="profileInfo__div__h1">Perfil:</h1>
            <Image borderRadius="full" boxSize="150px" src={dados.user_image} />
            <h1 className="profileInfo__div__h1">Nome: {dados.nome}</h1>
            <h1 className="profileInfo__div__h1">
              Sobrenome: {dados.sobrenome}
            </h1>
          </div>
        )
      })}
    </div>
  )
}
