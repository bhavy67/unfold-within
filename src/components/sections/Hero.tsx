import { PageContainer } from '@/components/layout'
import { Button } from '@/components/ui'
import { FadeIn } from '@/components/ui/FadeIn'
import { Link } from 'react-router'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
      {/* Atmospheric background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-100/50 via-brand-50 to-brand-50" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-accent-200/20 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gradient-radial from-brand-300/10 via-transparent to-transparent" />
      </div>

      <PageContainer>
        <div className="relative mx-auto max-w-3xl text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold tracking-tight text-brand-900 md:text-5xl lg:text-6xl">
              Find calm in the chaos
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg text-brand-600 md:mt-8 md:text-xl max-w-2xl mx-auto">
              Your journey to emotional wellness starts here.
              Discover tools and insights to navigate anxiety, overthinking, and self-healing.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/toolkits">
                <Button size="lg">Explore Toolkits</Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary" size="lg">Learn More</Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </PageContainer>
    </section>
  )
}