import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from './pages/_layouts/auth/auth'
import { AppLayout } from './pages/_layouts/app'

import { Dashboard } from './pages/dashboard'
import { SignUp } from './pages/auth/sign-up'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
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
