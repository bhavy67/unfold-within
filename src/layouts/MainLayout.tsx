import { Outlet } from 'react-router'
import { Navbar } from '@/components/common/Navbar'
import { Footer } from '@/components/common/Footer'

export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}