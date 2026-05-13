import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  email: string
  name: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  signup: (email: string, password: string, name: string) => Promise<boolean>
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string) => {
        set({ isLoading: true })

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock validation
        if (email && password.length >= 6) {
          set({
            user: {
              id: '1',
              email,
              name: email.split('@')[0],
            },
            isAuthenticated: true,
            isLoading: false,
          })
          return true
        }

        set({ isLoading: false })
        return false
      },

      signup: async (email: string, password: string, name: string) => {
        set({ isLoading: true })

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock validation
        if (email && password.length >= 6 && name) {
          set({
            user: {
              id: '1',
              email,
              name,
            },
            isAuthenticated: true,
            isLoading: false,
          })
          return true
        }

        set({ isLoading: false })
        return false
      },

      logout: () => {
        set({ user: null, isAuthenticated: false })
      },
    }),
    {
      name: 'unfold-within-auth',
    }
  )
)