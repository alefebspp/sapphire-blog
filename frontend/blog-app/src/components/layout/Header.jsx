import useUser from '../../hooks/useUser'
import { UserContext } from '../../context/userContext'
import { useContext, useEffect } from 'react'
import safira from '../../assets/safira.png'
import { Image } from '@chakra-ui/react'
import '../../styles/css/Header.css'
import HeaderMenu from './HeaderMenu'
export default function Header() {
  const { handleGetUserInfo } = useUser()
  const { userInfo } = useContext(UserContext)
  let user = userInfo[0]

  useEffect(() => {
    ;(async () => await handleGetUserInfo())()
  }, [])
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav__ul">
          <li>
            <Image src={user?.user_image} borderRadius="full" boxSize="50px" />
          </li>
          <li>
            <div className="li__div">
              <Image src={safira} boxSize="40px" />
              <p className="li__div__p">Sapphire</p>
            </div>
          </li>
          <li>
            <HeaderMenu />
          </li>
        </ul>
      </nav>
    </header>
  )
}
