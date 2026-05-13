import { PageContainer, ContentWrapper } from '@/components/layout'
import { FadeIn } from '@/components/ui/FadeIn'

export function BrandIntro() {
  return (
    <section className="relative py-14 bg-brand-100 md:py-18 lg:py-22">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-100 via-brand-100 to-brand-50 opacity-50" />

      <PageContainer>
        <ContentWrapper>
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <FadeIn>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-brand-900 md:text-3xl">
                  A space for your mind
                </h2>
                <p className="mt-5 text-brand-600 leading-relaxed">
                  Unfold Within is a mental wellness brand dedicated to helping you
                  navigate the complexities of emotional health. We believe in the power
                  of self-discovery and practical tools for lasting change.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="md:pt-2">
                <p className="text-brand-600 leading-relaxed">
                  Whether you're dealing with anxiety, overthinking, or simply seeking
                  a clearer path forward, we're here to support your journey with
                  evidence-based approaches and compassionate guidance.
                </p>
              </div>
            </FadeIn>
          </div>
        </ContentWrapper>
      </PageContainer>
    </section>
  )
}