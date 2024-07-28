import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Header } from '../../../components/Header'

export function AppLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!document.cookie.includes('auth=')) {
      navigate('/sign-in', { replace: true })
    }

    return () => {}
  }, [navigate])

  if (!document.cookie.includes('auth=')) return null

  return (
    <div>
      <Header />

      <div>
        <Outlet />
      </div>
    </div>
  )
}
