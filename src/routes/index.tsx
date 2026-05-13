import { createBrowserRouter } from 'react-router'
import { MainLayout } from '@/layouts/MainLayout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Toolkits } from '@/pages/Toolkits'
import { Journal } from '@/pages/Journal'
import { Contact } from '@/pages/Contact'

export const router = createBrowserRouter([
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
        path: 'journal',
        element: <Journal />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])