import { Home, LogOut, User, UserPlus } from 'lucide-react'
import { useContext, useState } from 'react'
import { NavLink } from '../NavLink'
import {
  DropdownItem,
  DropdownMenu,
  HeaderContainer,
  HeaderContent,
  Navigation,
  ProfileDropdown,
  Separator,
  Spacer,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { ClientsContext } from '../../contexts/ClientsContext'

export function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const { setSelectedClient, setModalType } = useContext(ClientsContext)
  const navigate = useNavigate()

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = () => {
    document.cookie = 'auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    toast.success('Logout efetuado com sucesso!')
    navigate('/sign-in', { replace: true })
  }

  const handleAddClient = () => {
    setSelectedClient(null)
    setModalType('add')
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <span>[ Beyond ]</span>
        <Separator height='1.5rem' />
        <Navigation>
          <NavLink to='/'>
            <Home />
            Início
          </NavLink>
          <div onClick={handleAddClient}>
            <UserPlus />
            Adicionar Cliente
          </div>
        </Navigation>
        <Spacer>
          <ProfileDropdown onClick={handleDropdownToggle}>
            <User />
            {isDropdownOpen && (
              <DropdownMenu>
                <DropdownItem onClick={handleLogout}>
                  <LogOut />
                  <span>Sair</span>
                </DropdownItem>
              </DropdownMenu>
            )}
          </ProfileDropdown>
        </Spacer>
      </HeaderContent>
    </HeaderContainer>
  )
}
