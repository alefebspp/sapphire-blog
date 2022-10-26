import '../../styles/css/Form.css';
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import useUser from '../../hooks/useUser';
import Button from '../global/Button';
import InputLabel from '../global/InputLabel';
import safira from '../../assets/safira.png';
import { AuthContext } from '../../context/AuthContext';
export default function Form(props) {
  const { usernameInputRef, passwordInputRef } = useContext(UserContext);
  const { loading } = useContext(AuthContext);
  const { handleCreateUser, userLogin } = useUser();

  return (
    <div className="logo">
      {props.login ? (
        <div className="logo__div">
          <Image src={safira} boxSize="100px" />
          <h1 className="logo__div__h1">Sapphire Blog</h1>
        </div>
      ) : (
        <div className="logo__div">
          <Image src={safira} boxSize="100px" />
          <h1 className="logo__div__h1">Sapphire Blog</h1>
          <h2 className="form__div__h1">Crie sua conta</h2>
        </div>
      )}

      <div className="div_form">
        <form className="form">
          <div className="form__div">
            <InputLabel
              labelClass="form__label"
              labelText="Username"
              htmlFor="username"
              inputType="text"
              inputId="username"
              inputText="Digite o username"
              ref={usernameInputRef}
            />
          </div>

          <div className="form__div">
            <InputLabel
              labelClass="form__label"
              labelText="Senha"
              htmlFor="password"
              inputType="password"
              inputId="password"
              inputText="Digite sua senha"
              ref={passwordInputRef}
            />
          </div>
          {props.login ? (
            <Button
              loading={loading}
              color="facebook"
              text="Login"
              clique={userLogin}
            />
          ) : (
            <Button
              color="facebook"
              text="Criar conta"
              clique={handleCreateUser}
            />
          )}
        </form>
      </div>

      {props.login ? (
        <div className="form__div2">
          <h2 className="form__div2__h2">Não tem uma conta?</h2>
          <Link className="form__div2__link" to="/register">
            Criar
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
