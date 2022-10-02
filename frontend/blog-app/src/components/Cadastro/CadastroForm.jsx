import Input from '../global/Input'
import Button from '../global/Button'
import axios from 'axios'
import { Image } from 'cloudinary-react'
import { useContext, useEffect, useState } from 'react'
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
      .then(response => setSelectedImage(response.data.url))
  }

  return (
    <div className="cadastro__div">
      <Image
        className="cadastro__div__image"
        cloudName="ddjyksu33"
        publicId={selectedImage}
      />
      <label className="cadastro__div__label" htmlFor="imagem">
        Selecione uma imagem:
      </label>
      <Input
        accept="image/*"
        tipo="file"
        id="imagem"
        onChange={event => setImage(event.target.files[0])}
      />
      <p className="cadastro__div__p">
        Agora aperte em "Carregar imagem" para carregar a imagem selecionada
      </p>
      <Button color="facebook" clique={imageUpload} text="Carregar imagem" />
      <div className="infos">
        <div className="infos__div1">
          <label className="infos__div1__label" htmlFor="nome">
            Nome
          </label>
          <Input
            tipo="text"
            ref={nomeInputRef}
            id="nome"
            texto="Digite seu nome"
          />
        </div>
        <div className="infos__div2">
          <label className="infos__div2__label" htmlFor="sobrenome">
            Sobrenome
          </label>
          <Input
            tipo="text"
            ref={sobrenomeInputRef}
            id="sobrenome"
            texto="Digite seu sobrenome"
          />
        </div>
      </div>
      <Button color="facebook" clique={handleCreateUserInfo} text="Atualizar" />
    </div>
  )
}
