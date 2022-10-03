import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import useUser from '../../hooks/useUser'
import { UserContext } from '../../context/userContext'
import { useContext } from 'react'

export default function HeaderMenu() {
  const { setPostsUserInfo } = useContext(UserContext)
  const { userLogout } = useUser()
  const navigate = useNavigate()

  function navigateToMain() {
    navigate('/main')
    setPostsUserInfo(null)
  }
  function navigateToUserPosts() {
    navigate('/user-posts')
  }
  function navigateToProfile() {
    navigate('/profile')
  }

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="filled"
        color="white"
      />
      <MenuList>
        <MenuItem onClick={navigateToMain}>Início</MenuItem>
        <MenuItem onClick={navigateToProfile}>Perfil</MenuItem>
        <MenuItem onClick={navigateToUserPosts}>Meus posts</MenuItem>
        <MenuItem onClick={userLogout}>Sair</MenuItem>
      </MenuList>
    </Menu>
  )
}
