import useUser from '../../hooks/useUser';
import { UserContext } from '../../context/userContext';
import { useContext, useEffect } from 'react';
import safira from '../../assets/safira.png';
import { Image } from '@chakra-ui/react';
import '../../styles/css/Header.css';
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';
export default function Header() {
  const { handleGetUserInfo, userLogout } = useUser();
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    (async () => await handleGetUserInfo())();
    const data = localStorage.getItem('USER_INFO');
    if (!data) localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
    if (data?.length == 2)
      localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
    if (data) setUserInfo(JSON.parse(data));
  }, []);

  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav__ul">
          <li>
            <div className="li__div">
              <Image src={safira} boxSize="40px" />
            </div>
          </li>

          <li>
            <div className="li__links__div">
              <Link className="li__link" to="/main">
                Início
              </Link>

              <Link className="li__link" to="/profile">
                Perfil
              </Link>

              <Link className="li__link" to="/user-posts">
                Meus posts
              </Link>
              <Link className="li__link" onClick={userLogout}>
                Sair
              </Link>
              {userInfo?.map(user => {
                return (
                  <Image
                    src={user?.user_image}
                    borderRadius="full"
                    boxSize="50px"
                  />
                );
              })}
            </div>
          </li>
          <li id="headerMenu">
            <div className="headerMenu__div">
              {userInfo?.map(user => {
                return (
                  <Image
                    src={user?.user_image}
                    borderRadius="full"
                    boxSize="50px"
                  />
                );
              })}
              <HeaderMenu />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
