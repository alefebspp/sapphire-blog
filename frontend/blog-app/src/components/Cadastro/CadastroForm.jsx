import Input from '../global/Input'
import Button from '../global/Button'
import axios from 'axios'
import { Image } from 'cloudinary-react'
import { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext'
import useUser from '../../hooks/useUser'
import '../../styles/css/CadastroForm.css'
export default function CadastroForm() {
  const { nomeInputRef, sobrenomeInputRef, selectedImage, setSelectedImage } =
    useContext(UserContext)
  const { handleCreateUserInfo } = useUser()
  const [image, setImage] = useState(null)

  function imageUpload() {
    const formData = new FormData()
    formData.append('file', image)
    formData.append('upload_preset', 'gkfohtue')

    axios
      .post('https://api.cloudinary.com/v1_1/ddjyksu33/image/upload', formData)
      .then((response) => setSelectedImage(response.data.url))
  }

  return (
    <div className="cadastro__div">
      <Image
        className="cadastro__div__image"
        cloudName="ddjyksu33"
        publicId={selectedImage}
      />
      <label htmlFor="imagem">Selecione uma imagem:</label>
      <Input
        tipo="file"
        id="imagem"
        onChange={(event) => setImage(event.target.files[0])}
      />
      <Button color="facebook" clique={imageUpload} text="Carregar imagem" />
      <label htmlFor="nome">Nome</label>
      <Input tipo="text" ref={nomeInputRef} id="nome" texto="Digite seu nome" />

      <label htmlFor="sobrenome">Sobrenome</label>
      <Input
        tipo="text"
        ref={sobrenomeInputRef}
        id="sobrenome"
        texto="Digite seu sobrenome"
      />
      <Button color="facebook" clique={handleCreateUserInfo} text="Atualizar" />
    </div>
  )
}
