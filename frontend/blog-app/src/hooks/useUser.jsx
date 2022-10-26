import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import {
  createUser,
  createUserInfo,
  getUserInfo,
  updateUser,
  getAllFromUser,
  getUserByUsername
} from '../services/api';
import useToastMessage from './useToastMessage';

export default function useUser() {
  const {
    usernameInputRef,
    passwordInputRef,
    nomeInputRef,
    sobrenomeInputRef,
    selectedImage,
    setUserInfo,
    setUsersInfo,
    usersInfo,
    setPostsUserInfo,
    posts
  } = useContext(UserContext);
  const { login, user, logout, loading, setLoading } = useContext(AuthContext);

  const { handleToastErrorMessage, handleToastSuccessMessage } =
    useToastMessage();

  const navigate = useNavigate();

  async function handleCreateUser(e) {
    e.preventDefault();
    try {
      const response = await createUser(
        usernameInputRef.current?.value,
        passwordInputRef.current?.value
      );
      navigate('/');
      handleToastSuccessMessage('Usuário criado', 'Faça login para continuar');
    } catch (error) {
      handleToastErrorMessage(
        'Impossível criar usuário',
        'Tente criar novamente'
      );
    }
  }

  async function handleGetAllFromUser() {
    try {
      const response = await getAllFromUser();
      setUsersInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function userLogin(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await login(
        usernameInputRef.current?.value,
        passwordInputRef.current?.value
      );

      const username = await getUserByUsername(usernameInputRef.current?.value);
      const cadastrado = username.data.map(dados => dados.cadastrado);

      cadastrado == 'não' ? navigate('/usuario') : navigate('/main');
      setLoading(false);
    } catch (error) {
      handleToastErrorMessage(
        'Impossível fazer login',
        'Username/Password incorreto(s)'
      );
    }
  }

  async function userLogout() {
    await logout();
    navigate('/');
  }

  //Funções relacionadas às informações do usuário

  async function handleCreateUserInfo() {
    const userInfo = {
      nome: nomeInputRef.current?.value,
      sobrenome: sobrenomeInputRef.current?.value,
      user_id: user.id,
      user_image: selectedImage
    };

    const data = {
      cadastrado: 'sim'
    };

    const userId = user.id;

    try {
      const info = await createUserInfo(userInfo);
      const update = await updateUser(data, userId);
      navigate('/main');
    } catch (error) {
      handleToastErrorMessage(
        'Impossível atualizar informações',
        'Tente novamente'
      );
    }
  }

  async function handleGetUserInfo() {
    try {
      const response = await getUserInfo(user.id);
      setUserInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleGetPostUserInfo() {
    const userId = posts?.map(dados => {
      return dados.user_id;
    });
    try {
      const response = await getUserInfo(userId);
      setPostsUserInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    handleCreateUser,
    userLogin,
    userLogout,
    handleCreateUserInfo,
    handleGetUserInfo,
    handleGetAllFromUser,
    handleGetPostUserInfo
  };
}
