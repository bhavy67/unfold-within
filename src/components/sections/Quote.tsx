import { PageContainer } from '@/components/layout'
import { FadeIn } from '@/components/ui/FadeIn'

export function Quote() {
  return (
    <section className="relative overflow-hidden py-12 bg-gradient-to-br from-[#F2EDF8] via-[#F7F3FA] to-[#FBFAFC] md:py-14 lg:py-16">
      {/* Subtle atmospheric layer */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_60%_40%_at_50%_30%,_rgba(184,169,224,0.1)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[250px] bg-[radial-gradient(ellipse_50%_40%_at_80%_100%,_rgba(232,200,208,0.08)_0%,_transparent_50%)]" />
      </div>

      <PageContainer>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-5xl text-[#D4CBF0] font-serif leading-none">"</span>
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-[#2D2540] leading-relaxed mt-2 mb-2 italic">
              You don't have to be whole to begin.
              <br />
              <span className="text-[#7D6BC0]">You just have to begin.</span>
            </blockquote>
            <span className="inline-block text-5xl text-[#D4CBF0] font-serif leading-none rotate-180 mt-1">"</span>
            <cite className="mt-3 block text-[#8B8399] text-sm">
              — A gentle reminder
            </cite>
          </div>
        </FadeIn>
      </PageContainer>
    </section>
  )
}