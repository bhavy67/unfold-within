import { Link } from 'react-router'
import { PageContainer, Section, ContentWrapper } from '@/components/layout'
import { Button, EmptyState } from '@/components/ui'
import { FadeIn } from '@/components/ui/FadeIn'
import { useCartStore } from '@/store/cart'

export function Cart() {
  const { items, removeItem, updateQuantity, getSubtotal, clearCart } = useCartStore()
  const subtotal = getSubtotal()

  return (
    <PageContainer>
      <Section>
        <FadeIn>
          <ContentWrapper>
            <h1 className="text-2xl font-bold tracking-tight text-brand-900 md:text-3xl">
              Your Cart
            </h1>

            {items.length === 0 ? (
              <EmptyState
                icon={
                  <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                }
                title="Your cart is empty"
                description="Explore our toolkits to find what you need"
                action={
                  <Link to="/toolkits">
                    <Button size="lg">Browse Toolkits</Button>
                  </Link>
                }
              />
            ) : (
              <div className="mt-8 grid gap-10 lg:grid-cols-3">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                  <ul className="space-y-6">
                    {items.map((item) => (
                      <li key={item.toolkit.id} className="flex gap-6 border-b border-brand-100 pb-6">
                        <div className="flex-1">
                          <Link
                            to={`/toolkits/${item.toolkit.slug}`}
                            className="text-lg font-semibold text-brand-900 hover:text-brand-700"
                          >
                            {item.toolkit.title}
                          </Link>
                          <p className="mt-1 text-sm text-brand-600">{item.toolkit.subtitle}</p>
                          <p className="mt-2 text-base font-medium text-brand-900">
                            ${item.toolkit.price}
                          </p>
                          <div className="mt-4 flex items-center gap-4">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => updateQuantity(item.toolkit.id, item.quantity - 1)}
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-200 text-brand-600 hover:bg-brand-50 transition-colors"
                              >
                                -
                              </button>
                              <span className="text-base text-brand-900 w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.toolkit.id, item.quantity + 1)}
                                className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-200 text-brand-600 hover:bg-brand-50 transition-colors"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.toolkit.id)}
                              className="text-sm text-brand-500 hover:text-brand-700 transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold text-brand-900">
                            ${item.toolkit.price * item.quantity}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Summary */}
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <div className="rounded-3xl bg-brand-100 p-6">
                    <h2 className="text-lg font-semibold text-brand-900">Order Summary</h2>
                    <div className="mt-4 space-y-3">
                      <div className="flex justify-between text-brand-600">
                        <span>Subtotal</span>
                        <span>${subtotal}</span>
                      </div>
                      <div className="flex justify-between text-brand-600">
                        <span>Shipping</span>
                        <span>Calculated at checkout</span>
                      </div>
                      <div className="border-t border-brand-200 pt-3">
                        <div className="flex justify-between text-lg font-semibold text-brand-900">
                          <span>Total</span>
                          <span>${subtotal}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="lg" className="mt-6 w-full justify-center">
                      Proceed to Checkout
                    </Button>
                    <button
                      onClick={clearCart}
                      className="mt-4 w-full text-sm text-brand-500 hover:text-brand-700 transition-colors"
                    >
                      Clear Cart
                    </button>
                    <Link
                      to="/toolkits"
                      className="mt-4 block text-center text-sm text-brand-600 hover:text-brand-900 transition-colors"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </ContentWrapper>
        </FadeIn>
      </Section>
    </PageContainer>
  )
}