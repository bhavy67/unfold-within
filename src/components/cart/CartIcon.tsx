import { useCartStore } from '@/store/cart'

export function CartIcon() {
  const { openCart, getTotalItems } = useCartStore()
  const totalItems = getTotalItems()

  return (
    <button
      onClick={openCart}
      className="relative p-2 text-brand-700 hover:text-brand-900 transition-colors"
      aria-label="Open cart"
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-700 text-xs font-medium text-white">
          {totalItems}
        </span>
      )}
    </button>
  )
}