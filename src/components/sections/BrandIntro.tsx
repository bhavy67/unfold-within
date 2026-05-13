import { PageContainer, ContentWrapper } from '@/components/layout'
import { FadeIn } from '@/components/ui/FadeIn'

export function BrandIntro() {
  return (
    <section className="relative overflow-hidden py-16 bg-[#F7F3FA] md:py-22 lg:py-26">
      {/* Atmospheric layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-[10%] w-[600px] h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_70%_20%,_rgba(200,208,240,0.12)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-[radial-gradient(ellipse_50%_40%_at_30%_100%,_rgba(232,200,208,0.08)_0%,_transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_50%_30%_at_50%_50%,_rgba(184,169,224,0.06)_0%,_transparent_50%)]" />
      </div>

      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Heading - editorial placement */}
          <div className="lg:col-span-5">
            <FadeIn>
              <h2 className="text-3xl font-semibold tracking-tight text-[#2D2540] md:text-4xl lg:text-5xl leading-tight">
                A gentle space for your mind to rest
              </h2>
            </FadeIn>
          </div>

          {/* Content - more editorial layout */}
          <div className="lg:col-span-7 lg:pl-8">
            <FadeIn delay={0.15}>
              <div className="space-y-6">
                <p className="text-lg text-[#5C5675] leading-relaxed">
                  Unfold Within is a sanctuary for your emotional wellbeing.
                  We believe healing doesn't have to be complicated—just
                  intentional, compassionate, and human.
                </p>
                <p className="text-lg text-[#5C5675] leading-relaxed">
                  Whether anxiety keeps you up at night, or overthinking
                  clouds your days, we're here with tools that feel like
                  a warm hug for your mind.
                </p>
                <div className="pt-2">
                  <p className="text-[#7D6BC0] font-medium">
                    — Because you deserve to feel okay.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}