import { PageContainer } from '@/components/layout'
import { FadeIn } from '@/components/ui/FadeIn'

export function Quote() {
  return (
    <section className="relative py-14 bg-[#F7F3FA] md:py-18 lg:py-22">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,_rgba(232,216,224,0.12)_0%,_transparent_50%)]" />
      </div>

      <PageContainer>
        <FadeIn>
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="text-xl font-medium italic text-[#7D6BC0] md:text-2xl leading-relaxed">
              "The wound is the place where the Light enters you."
            </p>
            <cite className="mt-5 block text-sm font-medium text-[#B8A9C0]">— Rumi</cite>
          </blockquote>
        </FadeIn>
      </PageContainer>
    </section>
  )
}