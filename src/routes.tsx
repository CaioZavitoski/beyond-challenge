import { createBrowserRouter } from 'react-router-dom'
import { SignIn } from './pages/auth/sign-in/sign-in'
import { AuthLayout } from './pages/_layouts/auth/auth'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
])
