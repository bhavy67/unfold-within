import { PageContainer, ContentWrapper } from '@/components/layout'
import { FadeIn } from '@/components/ui/FadeIn'

export function BrandIntro() {
  return (
    <section className="relative overflow-hidden py-14 bg-[#F7F3FA] md:py-18 lg:py-22">
      {/* Dreamy glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_70%_60%_at_70%_0%,_rgba(200,208,240,0.15)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_60%_50%_at_20%_100%,_rgba(232,200,208,0.1)_0%,_transparent_50%)]" />
      </div>

      <PageContainer>
        <ContentWrapper>
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <FadeIn>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#2D2540] md:text-3xl">
                  A space for your mind
                </h2>
                <p className="mt-5 text-[#5C5675] leading-relaxed">
                  Unfold Within is a mental wellness brand dedicated to helping you
                  navigate the complexities of emotional health. We believe in the power
                  of self-discovery and practical tools for lasting change.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="md:pt-2">
                <p className="text-[#5C5675] leading-relaxed">
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