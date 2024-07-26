import { Home, LogOut, User, UserPlus } from 'lucide-react'
import { useState } from 'react'
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

export function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = () => {
    console.log('Logging out...')
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
          <NavLink to='/add-client'>
            <UserPlus />
            Adicionar Cliente
          </NavLink>
        </Navigation>
        <Spacer>
          <ProfileDropdown onClick={handleDropdownToggle}>
            <User />
            {isDropdownOpen && (
              <DropdownMenu>
                <DropdownItem onClick={handleLogout}>
                  <LogOut />
                  Sair
                </DropdownItem>
              </DropdownMenu>
            )}
          </ProfileDropdown>
        </Spacer>
      </HeaderContent>
    </HeaderContainer>
  )
}
