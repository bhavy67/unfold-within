import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Toolkit } from '@/data/toolkits'

export interface CartItem {
  toolkit: Toolkit
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
  addItem: (toolkit: Toolkit) => void
  removeItem: (toolkitId: string) => void
  updateQuantity: (toolkitId: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  getTotalItems: () => number
  getSubtotal: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (toolkit: Toolkit) => {
        const items = get().items
        const existingItem = items.find((item) => item.toolkit.id === toolkit.id)

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.toolkit.id === toolkit.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            isOpen: true,
          })
        } else {
          set({
            items: [...items, { toolkit, quantity: 1 }],
            isOpen: true,
          })
        }
      },

      removeItem: (toolkitId: string) => {
        set({
          items: get().items.filter((item) => item.toolkit.id !== toolkitId),
        })
      },

      updateQuantity: (toolkitId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(toolkitId)
          return
        }

        set({
          items: get().items.map((item) =>
            item.toolkit.id === toolkitId ? { ...item, quantity } : item
          ),
        })
      },

      clearCart: () => {
        set({ items: [] })
      },

      openCart: () => {
        set({ isOpen: true })
      },

      closeCart: () => {
        set({ isOpen: false })
      },

      toggleCart: () => {
        set({ isOpen: !get().isOpen })
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getSubtotal: () => {
        return get().items.reduce(
          (total, item) => total + item.toolkit.price * item.quantity,
          0
        )
      },
    }),
    {
      name: 'unfold-within-cart',
    }
  )
)