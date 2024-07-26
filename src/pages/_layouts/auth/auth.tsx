import { Outlet } from 'react-router-dom'
import {
  AuthContainer,
  AuthContent,
  AuthSidebar,
  AuthSidebarContent,
  AuthSidebarFooter,
} from './styles'

export function AuthLayout() {
  return (
    <AuthContainer>
      <AuthSidebar>
        <AuthSidebarContent>
          <span>[ Beyond ]</span>
        </AuthSidebarContent>
        <AuthSidebarFooter>
          Client CRUD - {new Date().getFullYear()}
        </AuthSidebarFooter>
      </AuthSidebar>
      <AuthContent>
        <Outlet />
      </AuthContent>
    </AuthContainer>
  )
}
