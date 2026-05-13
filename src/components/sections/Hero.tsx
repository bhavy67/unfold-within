import { PageContainer } from '@/components/layout'
import { Button } from '@/components/ui'
import { FadeIn } from '@/components/ui/FadeIn'
import { Link } from 'react-router'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
      {/* Dreamy layered atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBFAFC] via-[#F7F3FA] to-[#FBFAFC]" />
        {/* Layered glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,_rgba(184,169,224,0.22)_0%,_transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_80%_100%,_rgba(232,200,208,0.18)_0%,_transparent_60%)]" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_50%_40%_at_20%_60%,_rgba(200,208,240,0.15)_0%,_transparent_50%)]" />
        <div className="absolute top-20 right-1/4 w-[300px] h-[300px] bg-[radial-gradient(ellipse_60%_60%_at_60%_20%,_rgba(240,216,200,0.12)_0%,_transparent_50%)]" />
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      </div>

      <PageContainer>
        <div className="relative mx-auto max-w-4xl text-center">
          <FadeIn>
            <h1 className="text-5xl font-bold tracking-tight text-[#2D2540] md:text-6xl lg:text-7xl">
              Let Your Mind{' '}
              <span className="text-gradient-dreamy">Unfold</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-7 text-lg text-[#5C5675] md:mt-9 md:text-xl max-w-xl mx-auto leading-relaxed">
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