import { PageContainer, ContentWrapper } from '@/components/layout'
import { Button, Input } from '@/components/ui'
import { FadeIn } from '@/components/ui/FadeIn'

export function Newsletter() {
  return (
    <section className="relative overflow-hidden py-14 bg-gradient-to-br from-[#B8A9E0] via-[#9B8AD0] to-[#8878A0] md:py-18 lg:py-22">
      {/* Dreamy overlay */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#B8A9E0]/30 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,_rgba(255,255,255,0.15)_0%,_transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(ellipse_50%_50%_at_80%_100%,_rgba(232,200,208,0.1)_0%,_transparent_50%)]" />
      </div>

      <PageContainer>
        <ContentWrapper>
          <FadeIn>
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Stay connected to your calm
              </h2>
              <p className="mt-4 text-[#E8D8E8] md:mt-6 max-w-md mx-auto">
                Get weekly insights and tools delivered to your inbox.
              </p>
              <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:max-w-md sm:mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/90 border-white/20 text-[#2D2540] placeholder:text-[#8B8399]"
                />
                <Button variant="secondary" className="bg-white text-[#7D6BC0] hover:bg-[#F7F3FA] border-0">
                  Subscribe
                </Button>
              </form>
            </div>
          </FadeIn>
        </ContentWrapper>
      </PageContainer>
    </section>
  )
}