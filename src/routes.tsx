import { createBrowserRouter } from 'react-router-dom'
import { SignIn } from './pages/auth/sign-in/sign-in'
import { AuthLayout } from './pages/_layouts/auth/auth'
import { SignUp } from './pages/auth/sign-up/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
])
