import { PageContainer } from '@/components/layout'
import { FadeIn } from '@/components/ui/FadeIn'

export function Quote() {
  return (
    <section className="relative py-14 bg-brand-100 md:py-18 lg:py-22">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-brand-100 to-brand-100 opacity-50" />

      <PageContainer>
        <FadeIn>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-xl font-medium italic text-brand-700 md:text-2xl leading-relaxed">
              "The wound is the place where the Light enters you."
            </p>
            <cite className="mt-6 block text-sm font-medium text-brand-500">— Rumi</cite>
          </blockquote>
        </FadeIn>
      </PageContainer>
    </section>
  )
}