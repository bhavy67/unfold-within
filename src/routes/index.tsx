import { createBrowserRouter, Navigate } from 'react-router'
import { MainLayout } from '@/layouts/MainLayout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Toolkits } from '@/pages/Toolkits'
import { ToolkitDetail } from '@/pages/ToolkitDetail'
import { Cart } from '@/pages/Cart'
import { Journal } from '@/pages/Journal'
import { ArticleDetail } from '@/pages/ArticleDetail'
import { Contact } from '@/pages/Contact'
import { Login } from '@/pages/Login'
import { Signup } from '@/pages/Signup'
import { ForgotPassword } from '@/pages/ForgotPassword'
import { useAuthStore } from '@/store/auth'

// Auth route wrapper for pages that don't need MainLayout
function AuthRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }
  return <>{children}</>
}

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <AuthRoute>
        <Login />
      </AuthRoute>
    ),
  },
  {
    path: '/signup',
    element: (
      <AuthRoute>
        <Signup />
      </AuthRoute>
    ),
  },
  {
    path: '/forgot-password',
    element: (
      <AuthRoute>
        <ForgotPassword />
      </AuthRoute>
    ),
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'toolkits',
        element: <Toolkits />,
      },
      {
        path: 'toolkits/:slug',
        element: <ToolkitDetail />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'journal',
        element: <Journal />,
      },
      {
        path: 'journal/:slug',
        element: <ArticleDetail />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])