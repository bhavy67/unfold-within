import { PageContainer, ContentWrapper } from '@/components/layout'
import { Button, Input } from '@/components/ui'
import { FadeIn } from '@/components/ui/FadeIn'

export function Newsletter() {
  return (
    <section className="relative py-14 bg-brand-900 md:py-18 lg:py-22">
      {/* Atmospheric gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900 via-brand-900 to-brand-800" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-radial from-accent-600/20 via-transparent to-transparent opacity-50" />
      </div>

      <PageContainer>
        <ContentWrapper>
          <FadeIn>
            <div className="text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Stay connected to your calm
              </h2>
              <p className="mt-4 text-brand-200 md:mt-6 max-w-md mx-auto leading-relaxed">
                Get weekly insights and tools delivered to your inbox.
              </p>
              <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:max-w-md sm:mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border-white/10 text-white placeholder:text-brand-300 focus:ring-brand-400/50"
                />
                <Button
                  variant="secondary"
                  className="bg-white text-brand-900 hover:bg-brand-50 border-0"
                >
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